<script setup lang="ts">
import { type Locale, prefixedPath } from '../data/site'
const props = defineProps<{ locale: Locale }>()
const c = computed(() => props.locale === 'vi' ? {
  eyebrow: 'ENGINEERING NOTES', title: 'Những điều học được khi xây dựng.',
  intro: 'Ghi chép ngắn về các lựa chọn kỹ thuật và cách tiếp cận sản phẩm. Đây là các chủ đề định hướng, không phải bài nghiên cứu đã xuất bản.',
  items: [
    { number:'01', category:'VOICE SYSTEMS', title:'Thiết kế giao tiếp giọng nói theo luồng', body:'Một voice agent cần xử lý đồng thời âm thanh, trạng thái hội thoại và việc hủy tác vụ. Ranh giới phiên và luồng phản hồi quan trọng không kém chất lượng mô hình.' },
    { number:'02', category:'SYSTEMS DESIGN', title:'Tách cấu hình agent khỏi runtime', body:'Template và provider cần mô tả cấu hình logic, trong khi runtime tốn tài nguyên nên được tái sử dụng. Sự tách biệt này giảm chi phí khởi tạo và giúp vận hành dễ dự đoán hơn.' },
    { number:'03', category:'CONNECTED DEVICES', title:'Tư duy offline-first cho GPS', body:'Thiết bị không nên đánh mất hành trình vì tạm thời mất Wi-Fi. Ghi nhận cục bộ, định danh bản ghi và đồng bộ có kiểm soát tạo nền tảng tin cậy.' },
  ]
} : {
  eyebrow: 'ENGINEERING NOTES', title: 'Notes from the build.',
  intro: 'Short notes on engineering trade-offs and product thinking. These are topic summaries, not previously published research papers.',
  items: [
    { number:'01', category:'VOICE SYSTEMS', title:'Designing for streaming voice', body:'A voice agent coordinates audio, conversational state and cancellation at once. Session boundaries and response flow matter just as much as model quality.' },
    { number:'02', category:'SYSTEMS DESIGN', title:'Separating agent config from runtime', body:'Templates and providers describe logical configuration, while expensive runtime resources should be reusable. Separating the two keeps initialization predictable.' },
    { number:'03', category:'CONNECTED DEVICES', title:'An offline-first mindset for GPS', body:'A device should not lose a journey when Wi-Fi is unavailable. Local recording, record identity and controlled synchronization are the foundation.' },
  ]
})
usePageSeo(props.locale, props.locale === 'vi' ? 'Ghi chép kỹ thuật' : 'Engineering Notes', c.value.intro, prefixedPath(props.locale, '/notes'))
</script>
<template>
  <PageFrame :locale="locale"><div class="inner-page notes-page"><div class="container"><div class="page-heading"><span class="eyebrow">{{ c.eyebrow }}</span><h1>{{ c.title }}</h1><p>{{ c.intro }}</p></div><div class="notes-list"><article v-for="item in c.items" :key="item.number" class="note-item"><span class="note-number">{{ item.number }}</span><div><span class="eyebrow">{{ item.category }}</span><h2>{{ item.title }}</h2><p>{{ item.body }}</p></div><span class="note-decoration" aria-hidden="true">↗</span></article></div></div></div></PageFrame>
</template>
