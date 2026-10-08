import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
const root = new URL('../', import.meta.url)
const file = (path) => readFile(new URL(path, root), 'utf8')
const paths = ['index.vue','about.vue','contact.vue','notes.vue','projects/index.vue','projects/[slug].vue']
test('English and Vietnamese pages are paired', async () => {
  for (const path of paths) {
    assert.match(await file(`app/pages/${path}`), /locale="en"/)
    assert.match(await file(`app/pages/vi/${path}`), /locale="vi"/)
  }
})
test('Both project slug prerenders are configured in both languages', async () => {
  const config = await file('nuxt.config.ts')
  for (const p of ['/projects/ai-voice-agent','/projects/lifetrail','/vi/projects/ai-voice-agent','/vi/projects/lifetrail']) {
    assert.ok(config.includes(`'${p}'`), `missing prerender route ${p}`)
  }
})
test('Project copy includes a current and a planned milestone in two languages', async () => {
  const projects = await file('app/data/projects.ts')
  assert.match(projects, /slug: 'ai-voice-agent'/)
  assert.match(projects, /slug: 'lifetrail'/)
  assert.equal((projects.match(/, state: 'now'/g) || []).length, 4)
  assert.equal((projects.match(/, state: 'later'/g) || []).length, 4)
})
test('No fake email address or active form post is shipped', async () => {
  const site = await file('app/data/site.ts')
  const contact = await file('app/components/ContactView.vue')
  assert.match(site, /contactEmail: ''/)
  assert.ok(!contact.includes('<form'))
  assert.ok(contact.includes('v-if="site.contactEmail"'))
})
test('Cloudflare output and critical metadata are configured', async () => {
  const pkg = JSON.parse(await file('package.json'))
  assert.match(pkg.scripts.build, /nuxt generate/)
  assert.match(pkg.scripts.build, /prepare-pages/)
  await stat(new URL('public/_headers', root))
  await stat(new URL('public/og-cover.png', root))
  assert.match(await file('app/composables/usePageSeo.ts'), /canonical/)
  assert.match(await file('app/composables/usePageSeo.ts'), /hreflang/)
})
