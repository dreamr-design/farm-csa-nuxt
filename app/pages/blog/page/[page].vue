<script setup>
definePageMeta({ slug: 'blog' });
const number = Number(useRoute().params.page);
</script>

<template>
<BlogList :number="number" />
</template>
