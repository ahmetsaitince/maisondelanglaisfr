<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { t, locale } = useI18n()
const router = useRouter()
function changeLang(l) {
  locale.value = l
  localStorage.setItem('lang', l)
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light border-bottom" aria-label="Main">
    <div class="container">
      <a class="navbar-brand fw-semibold" @click.prevent="router.push('/')">{{ t('brand') }}</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
              aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="mainNav" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="nav-link" :to="{name:'home'}">{{ t('nav.home') }}</router-link></li>
          <li class="nav-item"><router-link class="nav-link" :to="{name:'videos'}">{{ t('nav.videos') }}</router-link></li>
          <li class="nav-item"><router-link class="nav-link" :to="{name:'quiz'}">{{ t('nav.quiz') }}</router-link></li>
          <li class="nav-item"><router-link class="nav-link" :to="{name:'contact'}">{{ t('nav.contact') }}</router-link></li>
        </ul>

        <div class="d-flex align-items-center gap-2">
          <label class="form-label mb-0 me-2">{{ t('lang') }}</label>
          <select class="form-select form-select-sm" :value="$i18n.locale" @change="changeLang($event.target.value)" aria-label="Language">
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>