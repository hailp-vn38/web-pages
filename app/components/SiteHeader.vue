<script setup lang="ts">
import { site, prefixedPath, switchLocalePath, strings, type Locale } from '../data/site'
const props = defineProps<{ locale: Locale }>()
const route = useRoute()
const open = ref(false)
watch(() => route.fullPath, () => { open.value = false })
const t = computed(() => strings[props.locale])
const menu = computed(() => [
  { to: prefixedPath(props.locale, '/projects'), label: t.value.navProjects },
  { to: prefixedPath(props.locale, '/about'), label: t.value.navAbout },
  { to: prefixedPath(props.locale, '/notes'), label: t.value.navNotes },
])
</script>
<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink :to="prefixedPath(locale, '/')" class="logo" :aria-label="`${site.brand} homepage`">
        <BrandMark /><span>{{ site.brand }}</span><span class="logo-dot">.</span>
      </NuxtLink>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <NuxtLink v-for="item in menu" :key="item.to" :to="item.to" :class="{ 'nav-active': route.path === item.to }">{{ item.label }}</NuxtLink>
      </nav>
      <div class="header-actions">
        <NuxtLink :to="switchLocalePath(locale === 'en' ? 'vi' : 'en', route.path)" class="language-switch" :aria-label="locale === 'en' ? 'Switch to Vietnamese' : 'Switch to English'">
          {{ locale === 'en' ? 'VI' : 'EN' }} <span aria-hidden="true">↗</span>
        </NuxtLink>
        <NuxtLink :to="prefixedPath(locale, '/contact')" class="button button-small button-light header-contact">{{ t.navContact }} <span aria-hidden="true">↗</span></NuxtLink>
        <button class="mobile-toggle" type="button" :aria-expanded="open" aria-controls="mobile-menu" :aria-label="open ? 'Close menu' : 'Open menu'" @click="open = !open">
          <span :class="{ 'bar-one-open': open }"></span><span :class="{ 'bar-two-open': open }"></span>
        </button>
      </div>
    </div>
    <nav v-if="open" id="mobile-menu" class="mobile-nav" aria-label="Mobile navigation">
      <NuxtLink v-for="item in menu" :key="item.to" :to="item.to">{{ item.label }} <span aria-hidden="true">↗</span></NuxtLink>
      <NuxtLink :to="prefixedPath(locale, '/contact')">{{ t.navContact }} <span aria-hidden="true">↗</span></NuxtLink>
    </nav>
  </header>
</template>
