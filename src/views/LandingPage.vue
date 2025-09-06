<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <section class="bg-white">
    <!-- HERO -->
    <div class="container py-5">
      <div class="row align-items-center g-4">
        <div class="col-12 col-lg-6">
          <h1 class="display-5 fw-bold lh-tight">{{ t('hero.title') }}</h1>
          <p class="lead text-muted mt-2">{{ t('hero.subtitle') }}</p>
          <div class="d-flex gap-2 mt-3">
            <button class="btn btn-primary btn-lg" @click="router.push({name:'quiz'})">{{ t('hero.cta_primary') }}</button>
            <button class="btn btn-outline-secondary btn-lg" @click="router.push({name:'quiz'})">{{ t('hero.cta_secondary') }}</button>
          </div>

          <div class="d-flex gap-2 mt-4 flex-wrap">
            <span class="badge bg-primary-subtle text-primary border">{{ t('badges.a1b2') }}</span>
            <span class="badge bg-success-subtle text-success border">{{ t('badges.minutes') }}</span>
            <span class="badge bg-info-subtle text-info border">{{ t('badges.practice') }}</span>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <img class="img-fluid rounded shadow-sm"
               alt="Learn English for French speakers"
               src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop">
        </div>
      </div>
    </div>

    <!-- VALUE PROPS -->
    <div class="container py-5">
      <h2 class="h3 fw-bold mb-4">{{ t('value.title') }}</h2>
      <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-3" v-for="(p, i) in t('value.points')" :key="i">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h3 class="h5 fw-semibold">{{ p.title }}</h3>
              <p class="text-muted mb-0">{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- HOW IT WORKS -->
    <div class="bg-light py-5">
      <div class="container">
        <h2 class="h3 fw-bold mb-4">{{ t('how.title') }}</h2>
        <div class="row g-4">
          <div class="col-12 col-md-4" v-for="(s, i) in t('how.steps')" :key="i">
            <div class="card h-100">
              <div class="card-body">
                <div class="badge bg-dark-subtle text-dark mb-2">{{ i + 1 }}</div>
                <h3 class="h5">{{ s.title }}</h3>
                <p class="text-muted mb-0">{{ s.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MINI CURRICULUM -->
    <div class="container py-5">
      <h2 class="h3 fw-bold mb-4">{{ t('curriculum.title') }}</h2>
      <div class="row g-4">
        <div class="col-12 col-lg-4" v-for="(u, i) in t('curriculum.units')" :key="i">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h3 class="h5 fw-semibold">{{ u.title }}</h3>
              <ul class="text-muted mb-0">
                <li v-for="(b, j) in u.bullets" :key="j">{{ b }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BENEFITS -->
    <div class="bg-light py-5">
      <div class="container">
        <h2 class="h3 fw-bold mb-4">{{ t('benefits.title') }}</h2>
        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-3" v-for="(b, i) in t('benefits.items')" :key="i">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="h6 fw-semibold">{{ b.title }}</h3>
                <p class="text-muted mb-0">{{ b.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="container py-5">
      <h2 class="h3 fw-bold mb-4">{{ t('faq.title') }}</h2>
      <div class="accordion" id="faqAcc">
        <div class="accordion-item">
          <h2 class="accordion-header" id="f1">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#c1" aria-expanded="true" aria-controls="c1">
              {{ t('faq.q1') }}
            </button>
          </h2>
          <div id="c1" class="accordion-collapse collapse show" aria-labelledby="f1" data-bs-parent="#faqAcc">
            <div class="accordion-body text-muted">{{ t('faq.a1') }}</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="f2">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c2" aria-expanded="false" aria-controls="c2">
              {{ t('faq.q2') }}
            </button>
          </h2>
          <div id="c2" class="accordion-collapse collapse" aria-labelledby="f2" data-bs-parent="#faqAcc">
            <div class="accordion-body text-muted">{{ t('faq.a2') }}</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="f3">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c3" aria-expanded="false" aria-controls="c3">
              {{ t('faq.q3') }}
            </button>
          </h2>
          <div id="c3" class="accordion-collapse collapse" aria-labelledby="f3" data-bs-parent="#faqAcc">
            <div class="accordion-body text-muted">{{ t('faq.a3') }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA + NEWSLETTER -->
    <div class="bg-dark text-white py-5">
      <div class="container">
        <div class="row g-4 align-items-center">
          <div class="col-12 col-lg-7">
            <h2 class="fw-bold">{{ t('cta_block.title') }}</h2>
            <p class="text-white-50">{{ t('cta_block.desc') }}</p>
            <div class="d-flex gap-2">
              <button class="btn btn-primary" @click="router.push({name:'quiz'})">{{ t('cta_block.primary') }}</button>
              <button class="btn btn-outline-light" @click="router.push({name:'quiz'})">{{ t('cta_block.secondary') }}</button>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <form class="row g-2" @submit.prevent="() => alert('Thanks! / Merci !')">
              <div class="col-12">
                <label class="form-label">{{ t('newsletter.title') }}</label>
                <input class="form-control" :placeholder="t('newsletter.placeholder_email')" type="email" required>
                <div class="form-text text-white-50">{{ t('newsletter.note') }}</div>
              </div>
              <div class="col-12">
                <button class="btn btn-success w-100">{{ t('newsletter.button') }}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>