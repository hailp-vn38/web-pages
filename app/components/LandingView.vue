<script setup lang="ts">
import { site, strings, prefixedPath, type Locale } from '../data/site'
import { projects } from '../data/projects'
const props = defineProps<{ locale: Locale }>()
const t = computed(() => strings[props.locale])
const c = computed(() => props.locale === 'vi' ? {
  eyebrow: 'ĐỘC LẬP · CÔNG NGHỆ · SẢN PHẨM',
  heroTop: 'From first principles', heroMain: 'to real-world', heroAccent: 'possibilities.',
  heroText: 'Chúng tôi khám phá điểm giao thoa giữa AI, phần mềm và thiết bị kết nối — biến ý tưởng thành sản phẩm có thể sử dụng.',
  micro: 'KHÁM PHÁ NHỮNG GÌ ĐANG ĐƯỢC XÂY DỰNG',
  flag: 'BUILDING IN PUBLIC',
  projectLabel: '01 / SELECTED WORK', projectTitle: 'Ý tưởng được hiện thực hóa.',
  projectDesc: 'Hai hướng khám phá khác nhau. Cùng một mục tiêu: công nghệ hữu ích, được thiết kế kỹ lưỡng.',
  productsAction: 'Xem tất cả dự án',
  approachLabel: '02 / OUR APPROACH', approachTitle: 'Tư duy hệ thống. Tinh thần kiến tạo.',
  approachDesc: 'Từ nghiên cứu đến nguyên mẫu, chúng tôi ưu tiên những hệ thống đáng tin cậy và trải nghiệm có ý nghĩa.',
  pillars: [
    ['01', 'Intelligence', 'Xây dựng agent, giao diện giọng nói và hệ thống ứng dụng AI có mục đích rõ ràng.'],
    ['02', 'Engineering', 'Thiết kế phần mềm và hệ thống theo hướng module, dễ hiểu, có thể phát triển lâu dài.'],
    ['03', 'Connected World', 'Kết nối thế giới số với thiết bị, cảm biến và những tương tác thực tế.'],
  ],
  founderLabel: '03 / BEHIND THE WORK', founderTitle: 'Được dẫn dắt bởi sự tò mò. Được hoàn thiện bằng kỹ thuật.',
  founderText: 'Một người xây dựng sản phẩm độc lập, yêu thích AI, hệ thống phần mềm và phần cứng kết nối. Thay vì chỉ nói về khả năng, tôi muốn tạo ra những thứ thật sự vận hành.',
  founderKicker: 'FOUNDER / BUILDER',
  ctaLabel: '04 / WHAT’S NEXT', ctaTitle: 'Có một ý tưởng đáng để xây dựng?',
  ctaText: 'Luôn sẵn sàng kết nối cùng những người quan tâm đến AI, sản phẩm số và công nghệ thực tế.'
} : {
  eyebrow: 'INDEPENDENT · TECHNOLOGY · PRODUCTS',
  heroTop: 'From first principles', heroMain: 'to real-world', heroAccent: 'possibilities.',
  heroText: 'We explore the intersection of AI, software and connected devices — turning ideas into technology you can actually use.',
  micro: 'SCROLL TO EXPLORE WHAT WE’RE BUILDING',
  flag: 'BUILDING IN PUBLIC',
  projectLabel: '01 / SELECTED WORK', projectTitle: 'Ideas, made tangible.',
  projectDesc: 'Two different directions. One common ambition: useful technology, thoughtfully engineered.',
  productsAction: 'View all projects',
  approachLabel: '02 / OUR APPROACH', approachTitle: 'Systems thinking. Builder mindset.',
  approachDesc: 'From research to prototype, our focus is on dependable systems and experiences that matter.',
  pillars: [
    ['01', 'Intelligence', 'Purpose-built agents, voice interfaces and systems that make AI more useful.'],
    ['02', 'Engineering', 'Modular, understandable software and systems designed to grow responsibly.'],
    ['03', 'Connected World', 'Bridging software with devices, sensors and interactions in the real world.'],
  ],
  founderLabel: '03 / BEHIND THE WORK', founderTitle: 'Driven by curiosity. Grounded in engineering.',
  founderText: 'An independent product builder exploring AI, software systems and connected hardware. Rather than just describing what could be possible, I focus on making things that actually work.',
  founderKicker: 'FOUNDER / BUILDER',
  ctaLabel: '04 / WHAT’S NEXT', ctaTitle: 'Have an idea worth building?',
  ctaText: 'Always open to thoughtful conversations around AI, digital products and applied technology.'
})
usePageSeo(props.locale,
  props.locale === 'vi' ? 'Xây dựng sản phẩm công nghệ thực tiễn' : 'Intelligent systems. Real-world products.',
  props.locale === 'vi' ? 'Studio công nghệ độc lập phát triển AI Voice Agent, LifeTrail và các trải nghiệm kết nối.' : 'Independent technology studio building AI Voice Agent, LifeTrail and connected experiences.',
  prefixedPath(props.locale, '/'))
</script>
<template>
  <PageFrame :locale="locale">
    <section class="hero">
      <div class="hero-backdrop" aria-hidden="true"><div class="hero-glow hero-glow-one"></div><div class="hero-glow hero-glow-two"></div><div class="hero-grid"></div></div>
      <div class="container hero-content">
        <div class="hero-primary">
          <span class="eyebrow"><span class="eyebrow-line"></span>{{ c.eyebrow }}</span>
          <h1>{{ c.heroTop }}<br />{{ c.heroMain }}<br /><span class="gradient-text">{{ c.heroAccent }}</span></h1>
          <p class="hero-description">{{ c.heroText }}</p>
          <div class="hero-actions">
            <NuxtLink :to="prefixedPath(locale, '/projects')" class="button button-primary">{{ t.explore }} <span aria-hidden="true">↗</span></NuxtLink>
            <NuxtLink :to="prefixedPath(locale, '/about')" class="button button-outline">{{ t.meet }} <span aria-hidden="true">↗</span></NuxtLink>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="hero-system">
            <div class="hero-system-top"><span>PRODUCT ECOSYSTEM</span><span class="system-indicator">● ACTIVE EXPLORATION</span></div>
            <div class="system-canvas">
              <div class="system-halo system-halo-one"></div><div class="system-halo system-halo-two"></div>
              <div class="system-origin"><BrandMark /><span>IDEAS → SYSTEMS</span></div>
              <div class="system-branch branch-voice"><span class="branch-dot purple"></span><strong>VOICE / AI</strong><small>Intelligent interaction</small></div>
              <div class="system-branch branch-map"><span class="branch-dot green"></span><strong>GPS / IoT</strong><small>Connected journeys</small></div>
              <svg class="system-connectors" viewBox="0 0 500 420" preserveAspectRatio="none"><path d="M250 198C190 198 185 124 126 124"/><path d="M250 222C302 222 328 314 385 314"/></svg>
              <span class="system-coordinate coordinate-one">N 10°47'  E 106°42'</span><span class="system-coordinate coordinate-two">&lt;BUILD_MODE /&gt;</span>
            </div>
            <div class="hero-system-bottom"><span>SYS / 001</span><span>MADE TO EXPLORE</span></div>
          </div>
          <span class="hero-visual-corner">RESEARCH / BUILD / ITERATE</span>
        </div>
      </div>
      <div class="container hero-bottom"><span>{{ c.micro }}</span><span class="hero-scroll-indicator" aria-hidden="true">↓</span><span>{{ c.flag }}</span></div>
    </section>

    <section class="section section-projects" id="work">
      <div class="container">
        <div class="section-heading-row"><SectionIntro :eyebrow="c.projectLabel" :title="c.projectTitle" :description="c.projectDesc" /><NuxtLink :to="prefixedPath(locale, '/projects')" class="text-link section-more">{{ c.productsAction }} <span aria-hidden="true">↗</span></NuxtLink></div>
        <div class="project-grid"><ProjectCard v-for="project in projects" :key="project.slug" :project="project" :locale="locale" :featured="true" /></div>
      </div>
    </section>

    <section class="section approach-section">
      <div class="container">
        <SectionIntro :eyebrow="c.approachLabel" :title="c.approachTitle" :description="c.approachDesc" />
        <div class="pillars"><div v-for="pillar in c.pillars" :key="pillar[0]" class="pillar"><span class="pillar-number">{{ pillar[0] }} /</span><div class="pillar-icon" aria-hidden="true"><span class="pillar-spark">✳</span></div><h3>{{ pillar[1] }}</h3><p>{{ pillar[2] }}</p></div></div>
      </div>
    </section>

    <section class="section founder-section">
      <div class="container founder-grid">
        <div class="founder-portrait" aria-hidden="true"><div class="portrait-pattern"></div><div class="portrait-symbol">F<span>/</span>L</div><div class="portrait-bottom"><span>INDEPENDENT STUDIO</span><span>EST. IN CURIOSITY</span></div></div>
        <div class="founder-copy"><span class="eyebrow">{{ c.founderLabel }}</span><h2>{{ c.founderTitle }}</h2><p>{{ c.founderText }}</p><div class="founder-signature"><span class="signature-line"></span>{{ c.founderKicker }} · {{ site.founderName }}</div><NuxtLink :to="prefixedPath(locale, '/about')" class="text-link">{{ t.readStory }} <span aria-hidden="true">↗</span></NuxtLink></div>
      </div>
    </section>

    <section class="section contact-cta"><div class="container"><div class="cta-panel"><div class="cta-orb" aria-hidden="true"></div><span class="eyebrow">{{ c.ctaLabel }}</span><h2>{{ c.ctaTitle }}</h2><p>{{ c.ctaText }}</p><NuxtLink :to="prefixedPath(locale, '/contact')" class="button button-light">{{ t.contact }} <span aria-hidden="true">↗</span></NuxtLink></div></div></section>
  </PageFrame>
</template>
