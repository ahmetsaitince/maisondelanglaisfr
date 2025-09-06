<script setup>
import { useI18n } from 'vue-i18n'
import YouTubeEmbed from '../components/YouTubeEmbed.vue'

const { t } = useI18n()

// You can add as many videos as you want:
const videos = [
  { id: 'fGPPfZIvtCw', title: 'Alphabet en français' },
  { id: 'HfS0n7W4aG4', title: 'Salutations en français' }
]
</script>

<template>
  <section class="container">
    <h2 class="mb-3">{{ t('videos.title') }}</h2>
    <p class="text-muted mb-4">{{ t('videos.desc') }}</p>

    <div class="row g-4">
      <div class="col-12 col-md-6" v-for="v in videos" :key="v.id">
        <YouTubeEmbed :video-id="v.id" :title="v.title" />
        <div class="mt-2 fw-medium">{{ v.title }}</div>
      </div>
    </div>
  </section>
</template>