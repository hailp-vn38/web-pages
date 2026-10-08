<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; statusMessage?: string } }>()
const message = computed(() => props.error.statusCode === 404 ? 'This page does not exist.' : 'Something went wrong.')
</script>
<template>
  <div class="error-page"><NuxtLink to="/" class="logo"><BrandMark />FOUNDER LAB<span class="logo-dot">.</span></NuxtLink><div><span class="eyebrow">ERROR / {{ error.statusCode }}</span><h1>{{ message }}</h1><p>Let’s find our way back.</p><NuxtLink to="/" class="button button-primary">Back home ↗</NuxtLink></div></div>
</template>
