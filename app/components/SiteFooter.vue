<script setup lang="ts">
import { site, prefixedPath, strings, type Locale } from '../data/site'
const props = defineProps<{ locale: Locale }>()
const t = computed(() => strings[props.locale])
</script>
<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div>
          <NuxtLink :to="prefixedPath(locale, '/')" class="logo"><BrandMark /><span>{{ site.brand }}</span><span class="logo-dot">.</span></NuxtLink>
          <p class="footer-statement">{{ t.footerLine }}</p>
          <p class="footer-quiet">{{ t.footerTag }}</p>
        </div>
        <div class="footer-links">
          <div><span class="footer-label">Explore</span><NuxtLink :to="prefixedPath(locale, '/projects')">{{ t.navProjects }}</NuxtLink><NuxtLink :to="prefixedPath(locale, '/about')">{{ t.navAbout }}</NuxtLink><NuxtLink :to="prefixedPath(locale, '/notes')">{{ t.navNotes }}</NuxtLink></div>
          <div><span class="footer-label">Connect</span><NuxtLink :to="prefixedPath(locale, '/contact')">{{ t.navContact }}</NuxtLink><a v-if="site.githubUrl" :href="site.githubUrl" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a v-if="site.linkedinUrl" :href="site.linkedinUrl" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
        </div>
      </div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} {{ site.brand }}. {{ t.rights }}</span><span>Built with Nuxt · Deployed on Cloudflare</span></div>
    </div>
  </footer>
</template>
