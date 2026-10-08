<script setup lang="ts">
import { site, prefixedPath, type Locale } from '../data/site'
const props = defineProps<{ locale: Locale }>()
const c = computed(() => props.locale === 'vi' ? {
  eyebrow: 'NGƯỜI ĐỨNG SAU SẢN PHẨM', title: 'Tôi thích xây dựng những thứ thực sự hoạt động.',
  intro: 'Tôi là người phát triển sản phẩm độc lập, tập trung vào AI, hệ thống phần mềm và phần cứng kết nối.',
  storyLabel: '01 / CÂU CHUYỆN', storyTitle: 'Từ tò mò đến sản phẩm.',
  story1: 'Tôi tin rằng công nghệ có ý nghĩa nhất khi được thử nghiệm trong thế giới thực. Một ý tưởng chỉ mới là điểm khởi đầu; giá trị được tạo ra trong quá trình thiết kế, triển khai, sửa lỗi và cải tiến.',
  story2: 'Các dự án của tôi thường bắt đầu bằng câu hỏi: làm thế nào kết hợp trí tuệ nhân tạo, phần mềm và thiết bị để tạo ra trải nghiệm hữu ích? AI Voice Agent và LifeTrail là hai hướng khám phá từ câu hỏi đó.',
  focusLabel: '02 / NĂNG LỰC', focusTitle: 'Những lĩnh vực tôi theo đuổi.',
  focus: [
    ['AI & Agents', 'Voice interfaces, LLM orchestration và kiến trúc tool integration.'],
    ['Systems Engineering', 'Backend Rust, giao thức thời gian thực và thiết kế module.'],
    ['Connected Hardware', 'ESP32, cảm biến, GPS và kết nối giữa thiết bị với phần mềm.'],
    ['Product Building', 'Nguyên mẫu, giao diện, triển khai và học hỏi từ sản phẩm thực.']
  ],
  principleLabel: '03 / TRIẾT LÝ', principleTitle: 'Build, learn, improve.',
  principleText: 'Xây dựng thứ đơn giản có thể hoạt động trước. Kiểm chứng ý tưởng bằng sản phẩm thực tế. Cải tiến kiến trúc khi vấn đề rõ ràng.',
  ctaTitle: 'Muốn trò chuyện về một ý tưởng?', cta: 'Bắt đầu kết nối'
} : {
  eyebrow: 'THE PERSON BEHIND THE PRODUCTS', title: 'I like building things that actually work.',
  intro: 'I’m an independent product builder working at the intersection of AI, software systems and connected hardware.',
  storyLabel: '01 / THE STORY', storyTitle: 'From curiosity to creation.',
  story1: 'I believe technology becomes meaningful when it meets the real world. An idea is only a starting point; the value emerges through architecture, building, debugging and refinement.',
  story2: 'My projects often begin with the same question: how can intelligence, software and devices come together to create genuinely useful experiences? AI Voice Agent and LifeTrail explore two different answers.',
  focusLabel: '02 / WHAT I WORK ON', focusTitle: 'The disciplines I connect.',
  focus: [
    ['AI & Agents', 'Voice interfaces, LLM orchestration and tool integration architecture.'],
    ['Systems Engineering', 'Rust backends, real-time protocols and modular systems.'],
    ['Connected Hardware', 'ESP32, sensors, GPS and the bridge between devices and software.'],
    ['Product Building', 'Prototypes, interfaces, deployment and learning from real products.']
  ],
  principleLabel: '03 / PHILOSOPHY', principleTitle: 'Build, learn, improve.',
  principleText: 'Make the simplest useful version work. Validate ideas with something tangible. Deepen the architecture once the problem is understood.',
  ctaTitle: 'Want to talk through an idea?', cta: 'Start a conversation'
})
usePageSeo(props.locale, props.locale === 'vi' ? 'Về người sáng lập' : 'About the founder', c.value.intro, prefixedPath(props.locale, '/about'))
</script>
<template>
  <PageFrame :locale="locale"><div class="inner-page about-page"><div class="container">
    <div class="about-hero"><div><span class="eyebrow">{{ c.eyebrow }}</span><h1>{{ c.title }}</h1><p>{{ c.intro }}</p><div class="about-founder-line"><span class="about-avatar">F/L</span><div><strong>{{ site.founderName }}</strong><span>FOUNDER / BUILDER</span></div></div></div><div class="about-graphic"><div class="about-graphic-grid"></div><div class="about-graphic-symbol">F<span>/</span>L</div><div class="about-graphic-note">EXPERIMENT · ENGINEER · EVOLVE</div></div></div>
    <div class="about-story"><div><span class="eyebrow">{{ c.storyLabel }}</span><h2>{{ c.storyTitle }}</h2></div><div><p>{{ c.story1 }}</p><p>{{ c.story2 }}</p></div></div>
    <div class="detail-section"><SectionIntro :eyebrow="c.focusLabel" :title="c.focusTitle"/><div class="focus-grid"><div v-for="(focus,i) in c.focus" :key="focus[0]" class="focus-card"><span class="focus-index">0{{ i+1 }} /</span><h3>{{ focus[0] }}</h3><p>{{ focus[1] }}</p></div></div></div>
    <div class="about-quote"><span class="eyebrow">{{ c.principleLabel }}</span><h2>{{ c.principleTitle }}</h2><p>{{ c.principleText }}</p><span class="quote-decoration">✳</span></div>
    <div class="about-end"><h2>{{ c.ctaTitle }}</h2><NuxtLink :to="prefixedPath(locale, '/contact')" class="button button-primary">{{ c.cta }} ↗</NuxtLink></div>
  </div></div></PageFrame>
</template>
