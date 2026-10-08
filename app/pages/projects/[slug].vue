<script setup lang="ts">
const route = useRoute()
const slug = String(route.params.slug)
</script>
<template><ProjectDetailView locale="en" :slug="slug" /></template>
