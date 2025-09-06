<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const form = reactive({ name: '', email: '', message: '' })
function submit() {
  // Static for now – can POST to backend later
  if (!form.name || !form.email || !form.message) return alert(t('contact.fillAllFields'))
  alert(t('contact.thankYou'))
}
</script>

<template>
  <section class="container">
    <h2 class="mb-3">{{ t('contact.title') }}</h2>
    <form class="row g-3" @submit.prevent="submit" novalidate>
      <div class="col-md-6">
        <label class="form-label">{{ t('contact.name') }}</label>
        <input v-model="form.name" class="form-control" required />
      </div>
      <div class="col-md-6">
        <label class="form-label">{{ t('contact.email') }}</label>
        <input v-model="form.email" type="email" class="form-control" required />
      </div>
      <div class="col-12">
        <label class="form-label">{{ t('contact.message') }}</label>
        <textarea v-model="form.message" rows="5" class="form-control" required></textarea>
      </div>
      <div class="col-12">
        <button class="btn btn-primary">{{ t('contact.send') }}</button>
      </div>
    </form>
  </section>
</template>