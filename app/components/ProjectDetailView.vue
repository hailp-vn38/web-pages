<script setup lang="ts">
import { prefixedPath, type Locale } from '../data/site'
import { findProject, statusLabel } from '../data/projects'
const props = defineProps<{ locale: Locale; slug: string }>()
const project = findProject(props.slug)
if (!project) throw createError({ statusCode: 404, statusMessage: 'Project not found' })
const current = project!
const c = computed(() => current.copy[props.locale])
const ui = computed(() => props.locale === 'vi' ? {
  back: 'Tất cả dự án', scope: 'TỔNG QUAN', why: 'Vấn đề', how: 'Hướng tiếp cận',
  capabilities: 'Các khả năng chính', building: 'Hành trình phát triển',
  technology: 'Công nghệ', next: 'Tiếp tục khám phá', nextText: 'Khám phá sản phẩm khác trong hệ sinh thái.',
  status: 'TRẠNG THÁI', now: 'Hiện tại', nextStep: 'Tiếp theo', later: 'Định hướng'
} : {
  back: 'All projects', scope: 'OVERVIEW', why: 'The challenge', how: 'Our approach',
  capabilities: 'Core capabilities', building: 'Build roadmap',
  technology: 'Technology', next: 'Keep exploring', nextText: 'Discover another product in the ecosystem.',
  status: 'STATUS', now: 'Current focus', nextStep: 'Up next', later: 'Future direction'
})
const nextProject = project?.slug === 'ai-voice-agent' ? findProject('lifetrail')! : findProject('ai-voice-agent')!
usePageSeo(props.locale, c.value.name, c.value.excerpt, prefixedPath(props.locale, `/projects/${props.slug}`))
</script>
<template>
  <PageFrame :locale="locale">
    <div class="detail-page"><div class="container">
      <NuxtLink :to="prefixedPath(locale, '/projects')" class="back-link">← {{ ui.back }}</NuxtLink>
      <div class="detail-hero"><div class="detail-hero-copy"><span class="eyebrow">{{ c.eyebrow }}</span><h1>{{ c.tagline }}</h1><p>{{ c.excerpt }}</p><div class="detail-meta"><span class="status-pill"><span class="pill-dot"></span>{{ statusLabel(current.status, locale) }}</span><span>{{ c.name }}</span></div></div><div class="detail-hero-art"><ProjectArtwork :kind="current.kind" /></div></div>
      <div class="detail-overview-grid"><div><span class="eyebrow">{{ ui.scope }}</span><h2>{{ c.name }}</h2></div><p>{{ c.overview }}</p></div>
      <div class="challenge-grid"><div class="challenge-card"><span class="eyebrow">01 / {{ ui.why }}</span><p>{{ c.problem }}</p></div><div class="challenge-card"><span class="eyebrow">02 / {{ ui.how }}</span><p>{{ c.approach }}</p></div></div>
      <div class="detail-section"><SectionIntro eyebrow="03 / SYSTEM FEATURES" :title="ui.capabilities" /><div class="feature-grid"><div v-for="(feature,i) in c.features" :key="feature.title" class="feature-card"><span>0{{ i + 1 }} <span class="feature-icon" aria-hidden="true">✳</span></span><h3>{{ feature.title }}</h3><p>{{ feature.description }}</p></div></div></div>
      <div class="detail-section"><SectionIntro eyebrow="04 / DEVELOPMENT" :title="ui.building" /><div class="roadmap"><div v-for="(item,i) in c.roadmap" :key="item.title" class="roadmap-row"><span class="roadmap-index">0{{ i + 1 }}</span><div class="roadmap-track"><span class="roadmap-node" :class="{ 'roadmap-node-active': item.state === 'now' }"></span></div><div><h3>{{ item.title }}</h3><p>{{ item.description }}</p></div><span class="roadmap-state">{{ item.state === 'now' ? ui.now : item.state === 'next' ? ui.nextStep : ui.later }}</span></div></div></div>
      <div class="detail-section tech-section"><span class="eyebrow">05 / {{ ui.technology }}</span><div class="tech-chips"><span v-for="tool in current.tools" :key="tool">{{ tool }}</span></div></div>
      <div class="next-project"><div><span class="eyebrow">{{ ui.next }}</span><h2>{{ nextProject.copy[locale].name }}</h2><p>{{ ui.nextText }}</p></div><NuxtLink :to="prefixedPath(locale, `/projects/${nextProject.slug}`)" class="next-project-arrow" :aria-label="`View ${nextProject.copy[locale].name}`">↗</NuxtLink></div>
    </div></div>
  </PageFrame>
</template>
