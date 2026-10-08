<script setup lang="ts">
import { type Locale, prefixedPath } from '../data/site'
import { projects } from '../data/projects'
const props = defineProps<{ locale: Locale }>()
const filter = ref<'all' | 'ai' | 'iot'>('all')
const visible = computed(() => filter.value === 'all' ? projects : projects.filter(p => p.kind === filter.value))
const c = computed(() => props.locale === 'vi' ? {
  eyebrow: 'DANH MỤC DỰ ÁN', title: 'Bản thiết kế cho những điều tiếp theo.',
  desc: 'Từ hệ thống trí tuệ nhân tạo đến thiết bị kết nối, mỗi sản phẩm bắt đầu bằng một câu hỏi đáng khám phá.',
  filters: ['Tất cả', 'AI / Agents', 'IoT / Hardware'], caption: 'Một số dự án vẫn đang phát triển. Roadmap không đồng nghĩa với tính năng đã hoàn thành.'
} : {
  eyebrow: 'PROJECT INDEX', title: 'Blueprints for what comes next.',
  desc: 'From intelligent systems to connected devices, each product starts with a question worth exploring.',
  filters: ['All projects', 'AI / Agents', 'IoT / Hardware'], caption: 'Some projects are works in progress. Roadmaps describe intentions, not shipped features.'
})
usePageSeo(props.locale, props.locale === 'vi' ? 'Dự án' : 'Projects', c.value.desc, prefixedPath(props.locale, '/projects'))
</script>
<template>
  <PageFrame :locale="locale">
    <div class="inner-page"><div class="container"><div class="page-heading"><span class="eyebrow">{{ c.eyebrow }}</span><h1>{{ c.title }}</h1><p>{{ c.desc }}</p></div>
      <div class="projects-toolbar"><div class="filter-group" role="group" aria-label="Filter projects"><button v-for="(key, i) in (['all','ai','iot'] as const)" :key="key" type="button" :class="['filter-button', { active: filter === key }]" :aria-pressed="filter === key" @click="filter = key">{{ c.filters[i] }}</button></div><span class="project-counter">0{{ visible.length }} / 02</span></div>
      <div class="project-grid project-grid-list"><ProjectCard v-for="p in visible" :key="p.slug" :project="p" :locale="locale" :featured="true" /></div><p class="projects-disclaimer">{{ c.caption }}</p>
    </div></div>
  </PageFrame>
</template>
