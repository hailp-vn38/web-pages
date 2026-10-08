export default defineNuxtConfig({
  compatibilityDate: '2026-04-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#080c14' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/', '/projects', '/projects/ai-voice-agent', '/projects/lifetrail',
        '/about', '/contact', '/notes',
        '/vi', '/vi/projects', '/vi/projects/ai-voice-agent', '/vi/projects/lifetrail',
        '/vi/about', '/vi/contact', '/vi/notes'
      ]
    }
  }
})
