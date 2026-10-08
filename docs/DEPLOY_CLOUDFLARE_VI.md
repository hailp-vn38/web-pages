# Triển khai Founder Lab lên Cloudflare Pages

Website là **Nuxt 4 SSG**, chạy dưới dạng HTML/CSS/JS tĩnh trên Cloudflare Pages. Không cần database, Worker, token API hay máy chủ riêng.

## 0. Chỉnh nội dung trước khi công bố

Mở `app/data/site.ts` và sửa:

- `brand`: tên thương hiệu startup thực tế;
- `founderName`: tên người sáng lập muốn công khai;
- `contactEmail`: email nhận cơ hội hợp tác (mặc định để trống);
- `githubUrl`, `linkedinUrl`: link công khai thực tế hoặc để trống.

Website sẽ vẫn chạy nếu chưa cập nhật, nhưng khi `contactEmail` để trống, khách truy cập **không có nút email liên hệ**. Hãy điền trước khi quảng bá. Nội dung của hai sản phẩm nằm ở `app/data/projects.ts`. Ảnh đồ họa là minh họa ý tưởng, không phải ảnh thiết bị hoặc số liệu đo lường thực tế.

## 1. Chạy thử trên máy cá nhân

Yêu cầu Node.js >= 22 và Internet để cài dependency.

```bash
npm install
npm run typecheck
npm test
npm run dev
```

Mở `http://localhost:3000`.

Tạo bản static:

```bash
npm run build
```

Sau lệnh này sẽ có thư mục `dist/`. Build được thiết kế để kiểm tra đủ **14 route HTML** (7 tiếng Anh, 7 tiếng Việt); khi có `NUXT_PUBLIC_SITE_URL`, build cũng tạo `dist/sitemap.xml` và cập nhật `dist/robots.txt`.

## 2. Push GitHub

Giải nén project sao cho `package.json` nằm ở gốc repo. Nếu chưa có repo, dùng:

```bash
git init -b main
git add .
git commit -m "feat: launch founder portfolio and startup showcase"
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY>.git
git push -u origin main
```

Nếu repo GitHub đã tồn tại, làm việc trên clone của repo rồi copy mã nguồn vào, kiểm tra thay đổi và commit/push như bình thường.

Lưu ý: Không commit `node_modules`, `.env`, `dist`, hoặc `.output`. Tệp `.gitignore` đã thiết lập sẵn.

## 3. Kết nối Cloudflare Pages

1. Vào Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Import an existing Git repository**.
2. Cho phép Cloudflare truy cập GitHub repo mới tạo.
3. Chọn nhánh sản xuất `main` và nhập:

| Cloudflare Pages | Thiết lập |
|---|---|
| Framework preset | None / Custom |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Environment variable | `NODE_VERSION=22` |

**Không cấu hình Deploy command** cho Pages project này. Đặc biệt, không dùng `npx wrangler deploy`: đây là lệnh deploy **Worker**, không phải static artifact `dist`, nên Wrangler sẽ cố đọc cấu hình tạm `.output/server/wrangler.json` và báo thiếu `index.mjs`.

4. Chọn **Save and Deploy**. Cloudflare sẽ cài dependency và xuất bản trang trên domain `*.pages.dev`.
5. Khi đã có địa chỉ chính thức, thêm biến **`NUXT_PUBLIC_SITE_URL=https://<YOUR_SITE>`** (không có dấu `/` ở cuối, không có đường dẫn phụ) tại Settings → Environment variables. **Redeploy** để build canonical, hreflang và sitemap chính xác.

**Lưu ý:** Nên tạo Pages theo hướng Git integration ngay từ đầu; theo tài liệu Cloudflare, project Pages tạo bằng Direct Upload không thể gắn Git integration vào sau đó.

## 4. Gắn tên miền riêng

Cloudflare Pages → Custom domains → Add custom domain → làm theo hướng dẫn DNS. Sau khi xác thực domain, đổi `NUXT_PUBLIC_SITE_URL` cho trùng origin mới và redeploy.

## 5. Kiểm tra sau deploy

- Trang chủ `/` và `/vi` hiển thị đúng;
- Chuyển EN/VI giữ đúng ngữ cảnh của project detail;
- `/projects/ai-voice-agent` và `/vi/projects/lifetrail` hoạt động;
- Menu mobile, bộ lọc project, mọi nút nội bộ;
- Metadata OG qua công cụ preview social; sitemap tại `/sitemap.xml` nếu đã đặt URL;
- Email và social links chỉ xuất hiện khi bạn điền dữ liệu thật;
- Không có secrets/API keys trong repository.

## Xử lý sự cố nhanh

- **Cloudflare không tìm thấy `dist`:** kiểm tra Build command=`npm run build` và phiên bản Node 22.
- **Không tìm thấy trang tĩnh:** build sẽ báo route còn thiếu; kiểm tra prerender routes trong `nuxt.config.ts`.
- **Canonical/sitemap sai domain:** đổi `NUXT_PUBLIC_SITE_URL` rồi redeploy.
- **Trang Contact không có email:** cập nhật `app/data/site.ts`.
- **Build báo lỗi tải package:** kiểm tra kết nối npm registry trong build log và rerun deploy.
- **Log chạy `npx wrangler deploy` rồi báo thiếu `index.mjs`:** bạn đang dùng Workers build/deploy command. Tạo hoặc chuyển sang **Pages → Connect to Git**, để Build command=`npm run build`, Output directory=`dist`, và xoá Deploy command. Nếu deploy bằng CLI, dùng `npx wrangler pages deploy dist --project-name <ten-project>`.

Tài liệu chính thức: https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/
