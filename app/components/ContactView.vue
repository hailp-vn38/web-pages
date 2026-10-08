<script setup lang="ts">
import { site, prefixedPath, type Locale } from '../data/site'
const props = defineProps<{ locale: Locale }>()
const c = computed(() => props.locale === 'vi' ? {
  eyebrow: 'LIÊN HỆ / HỢP TÁC', title: 'Bắt đầu từ một cuộc trò chuyện.',
  intro: 'Bạn quan tâm đến AI Agents, IoT hoặc hợp tác phát triển sản phẩm? Hãy kết nối và chia sẻ ý tưởng.',
  interested: 'Những chủ đề tôi quan tâm', lines: ['Hợp tác phát triển AI và thiết bị', 'Trao đổi kỹ thuật & nghiên cứu', 'Đối tác sản phẩm & startup'],
  emailLabel: 'EMAIL LIÊN HỆ', emailUnavailable: 'Địa chỉ liên hệ sẽ được cập nhật.',
  profileLabel: 'KÊNH KẾT NỐI', reply: 'Tôi ưu tiên các cuộc trao đổi có mục tiêu rõ ràng và phù hợp với định hướng sản phẩm.'
} : {
  eyebrow: 'CONTACT / COLLABORATE', title: 'It starts with a conversation.',
  intro: 'Exploring AI agents, IoT or a product collaboration? I’d be glad to connect and exchange ideas.',
  interested: 'Open to conversations about', lines: ['AI and connected-device collaborations', 'Engineering and research exchanges', 'Product and startup partnerships'],
  emailLabel: 'CONTACT EMAIL', emailUnavailable: 'Contact details will be published soon.',
  profileLabel: 'FIND ME ONLINE', reply: 'I prioritize thoughtful conversations with a clear purpose and an interest in building real products.'
})
usePageSeo(props.locale, props.locale === 'vi' ? 'Liên hệ' : 'Contact', c.value.intro, prefixedPath(props.locale, '/contact'))
</script>
<template>
  <PageFrame :locale="locale"><div class="inner-page contact-page"><div class="container"><div class="contact-layout"><div><span class="eyebrow">{{ c.eyebrow }}</span><h1>{{ c.title }}</h1><p class="contact-intro">{{ c.intro }}</p><div class="contact-topics"><h2>{{ c.interested }}</h2><p v-for="line in c.lines" :key="line"><span aria-hidden="true">↗</span>{{ line }}</p></div></div><div class="contact-info-panel"><div class="contact-glow" aria-hidden="true"></div><div><span class="eyebrow">{{ c.emailLabel }}</span><a v-if="site.contactEmail" class="contact-email" :href="`mailto:${site.contactEmail}?subject=${encodeURIComponent('Hello from ' + site.brand)}`">{{ site.contactEmail }} ↗</a><span v-else class="contact-placeholder">{{ c.emailUnavailable }}</span></div><div class="contact-profiles"><span class="eyebrow">{{ c.profileLabel }}</span><a v-if="site.githubUrl" :href="site.githubUrl" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a><a v-if="site.linkedinUrl" :href="site.linkedinUrl" target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a><span v-if="!site.githubUrl && !site.linkedinUrl" class="contact-muted">{{ locale === 'vi' ? 'Chưa công bố liên kết mạng xã hội.' : 'Social profiles coming soon.' }}</span></div><p>{{ c.reply }}</p></div></div></div></div></PageFrame>
</template>
