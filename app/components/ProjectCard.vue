<script setup lang="ts">
import { prefixedPath, type Locale } from '../data/site'
import { statusLabel, type Project } from '../data/projects'
const props = defineProps<{ project: Project; locale: Locale; featured?: boolean }>()
const copy = computed(() => props.project.copy[props.locale])
</script>
<template>
  <NuxtLink :to="prefixedPath(locale, `/projects/${project.slug}`)" class="project-card" :class="{ 'project-card-featured': featured }">
    <div class="project-card-art"><ProjectArtwork :kind="project.kind" :compact="!featured" /></div>
    <div class="project-card-content">
      <div class="project-card-meta"><span>{{ copy.eyebrow }}</span><span class="status-pill"><span class="pill-dot"></span>{{ statusLabel(project.status, locale) }}</span></div>
      <div class="project-card-heading"><h3>{{ copy.name }}</h3><span class="project-card-arrow" aria-hidden="true">↗</span></div>
      <p>{{ copy.excerpt }}</p>
      <div class="project-tags"><span v-for="tool in project.tools.slice(0, featured ? 6 : 5)" :key="tool">{{ tool }}</span></div>
    </div>
  </NuxtLink>
</template>
