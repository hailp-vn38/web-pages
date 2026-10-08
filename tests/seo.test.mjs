import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
const file = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

test('All pages set a localized SEO description and a canonical-aware pathname', async () => {
  for (const component of ['LandingView','ProjectsView','ProjectDetailView','AboutView','ContactView','NotesView']) {
    const source = await file(`app/components/${component}.vue`)
    assert.match(source, /usePageSeo\(/, `${component} must set SEO`)
    assert.match(source, /prefixedPath\(/, `${component} must localize paths`)
  }
})
test('A static deploy generates a sitemap only once its public origin is known', async () => {
  const source = await file('scripts/prepare-pages.mjs')
  assert.match(source, /NUXT_PUBLIC_SITE_URL/)
  assert.match(source, /sitemap.xml/)
  assert.match(source, /robots.txt/)
  assert.match(source, /Missing static HTML/)
})
test('Non-sensitive site configuration and privacy-safe empty contacts are used', async () => {
  const source = await file('app/data/site.ts')
  assert.match(source, /contactEmail: ''/)
  assert.match(source, /githubUrl: ''/)
  assert.match(source, /linkedinUrl: ''/)
  assert.doesNotMatch(source, /Bearer |sk-[a-z0-9]/)
})
