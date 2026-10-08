/** Update this one file before publishing. Avoid inventing public contact links. */
export const site = {
  brand: 'Lam Phuc Hai — Independent Technology Studio',
  brandDescriptor: 'Independent technology studio',
  founderName: 'Lam Phuc Hai',
  /** Leave empty until you have a public, working contact address. */
  contactEmail: 'lamphucham@lphai.tech',
  githubUrl: 'https://github.com/hailp-vn38',
  linkedinUrl: '',
  /** Optional resume or public press-kit URL. */
  pressKitUrl: '',
} as const

export type Locale = 'en' | 'vi'
export const prefixedPath = (locale: Locale, path: string) => {
  const pathname = path.startsWith('/') ? path : `/${path}`
  return locale === 'vi' ? (pathname === '/' ? '/vi' : `/vi${pathname}`) : pathname
}
export const switchLocalePath = (locale: Locale, path: string) => {
  const normal = path === '/vi' ? '/' : path.startsWith('/vi/') ? path.slice(3) : path
  return prefixedPath(locale, normal)
}

export const strings = {
  en: {
    navProjects: 'Projects', navAbout: 'About', navNotes: 'Notes', navContact: 'Get in touch',
    footerTag: 'Independent by design. Built with purpose.',
    footerLine: 'Intelligent systems. Real-world products.',
    explore: 'Explore projects', meet: 'Meet the founder', details: 'Explore project',
    readStory: 'Read the story', contact: 'Let’s connect',
    rights: 'All rights reserved.', status: 'Project status',
    backProjects: 'All projects',
  },
  vi: {
    navProjects: 'Dự án', navAbout: 'Giới thiệu', navNotes: 'Ghi chép', navContact: 'Liên hệ',
    footerTag: 'Độc lập trong tư duy. Có mục đích trong kiến tạo.',
    footerLine: 'Hệ thống thông minh. Sản phẩm thực tiễn.',
    explore: 'Khám phá dự án', meet: 'Về người sáng lập', details: 'Xem dự án',
    readStory: 'Xem câu chuyện', contact: 'Kết nối',
    rights: 'Bảo lưu mọi quyền.', status: 'Trạng thái',
    backProjects: 'Tất cả dự án',
  }
} as const
