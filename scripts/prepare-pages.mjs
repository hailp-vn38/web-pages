import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const source = '.output/public'
const target = 'dist'
const routes = [
  '/', '/projects', '/projects/ai-voice-agent', '/projects/lifetrail',
  '/about', '/contact', '/notes', '/vi', '/vi/projects',
  '/vi/projects/ai-voice-agent', '/vi/projects/lifetrail',
  '/vi/about', '/vi/contact', '/vi/notes',
]

try {
  await stat(source)
} catch {
  throw new Error('Nuxt prerender output is missing. Run `nuxt generate` first.')
}

await rm(target, { recursive: true, force: true })
await mkdir(target, { recursive: true })
await cp(source, target, { recursive: true, force: true })

for (const route of routes) {
  const base = route === '/' ? '' : route.slice(1)
  const candidates = base
    ? [join(target, base, 'index.html'), join(target, `${base}.html`)]
    : [join(target, 'index.html')]
  let found = false
  for (const candidate of candidates) {
    try {
      const html = await readFile(candidate, 'utf8')
      if (!html.includes('<html') || !html.includes('<title')) {
        throw new Error(`Invalid HTML output: ${candidate}`)
      }
      found = true
      break
    } catch (err) {
      if (err?.code !== 'ENOENT') throw err
    }
  }
  if (!found) throw new Error(`Missing static HTML for route ${route}`)
}

const urlValue = (process.env.NUXT_PUBLIC_SITE_URL || '').trim().replace(/\/+$/, '')
if (urlValue) {
  const base = new URL(urlValue)
  if (!['https:', 'http:'].includes(base.protocol) || base.pathname !== '/' || base.search || base.hash) {
    throw new Error('NUXT_PUBLIC_SITE_URL must be a clean site origin, for example https://example.com')
  }
  const origin = base.origin
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes.map(route => `  <url><loc>${origin}${route}</loc></url>`).join('\n') + '\n</urlset>\n'
  await writeFile(join(target, 'sitemap.xml'), xml)
  await writeFile(join(target, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`)
}

const assets = (await readdir(target)).length
console.log(`Verified ${routes.length} prerendered routes; ${assets} top-level output entries; Cloudflare Pages artifact: ${target}/`)
