<script setup>
defineProps({
  videoId: { type: String, required: true },
  title: { type: String, default: 'YouTube video' }
})
</script>

<template>
  <div class="ratio ratio-16x9 rounded border">
    <iframe
      :src="`https://www.youtube.com/embed/${videoId}`"
      :title="title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>