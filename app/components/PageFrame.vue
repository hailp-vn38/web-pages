<script setup lang="ts">
import type { Locale } from '../data/site'
defineProps<{ locale: Locale }>()
</script>
<template><div class="site-shell"><div class="page-noise" aria-hidden="true"></div><SiteHeader :locale="locale"/><main id="main-content"><slot /></main><SiteFooter :locale="locale" /></div></template>
