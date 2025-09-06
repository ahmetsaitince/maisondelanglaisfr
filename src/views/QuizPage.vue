<script setup>
import { onMounted, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuizStore } from '../stores/quiz'
import data from '../data/questions.json'

const { t } = useI18n()
const store = useQuizStore()
const total = data.length
const current = computed(() => data[store.index])

const selected = ref(null)
const answeredIndex = computed(() => store.answers[current.value?.id])

onMounted(() => store.load())

function selectOption(i) {
  if (answeredIndex.value !== undefined) return
  selected.value = i
  store.answer(current.value, i)
}
function next() {
  selected.value = null
  store.next(total)
}
function restart() { store.restart(); selected.value = null }
const progress = computed(() => Math.round(((store.index+1) / total) * 100))
</script>

<template>
  <section class="container">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <h2 class="mb-0">{{ t('quiz.title') }}</h2>
      <div class="badge bg-success fs-6">
        {{ t('quiz.score') }}: {{ store.correctCount }} {{ t('quiz.of') }} {{ total }}
      </div>
    </div>

    <div class="progress mb-3" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar" :style="{width: progress + '%'}">{{ progress }}%</div>
    </div>

    <div v-if="current" class="card shadow-sm">
      <div class="card-body">
        <p class="fw-semibold mb-3">#{{ store.index + 1 }} — {{ current.text }}</p>

        <div class="list-group">
          <button
            v-for="(opt, i) in current.options"
            :key="i"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            :class="{
              'active': answeredIndex !== undefined && i === current.correctIndex,
              'disabled': answeredIndex !== undefined
            }"
            @click="selectOption(i)"
            :aria-pressed="i === selected"
          >
            <span>{{ opt }}</span>
            <span v-if="answeredIndex !== undefined" class="badge rounded-pill"
                  :class="i === current.correctIndex ? 'bg-success' : (answeredIndex === i ? 'bg-danger' : 'bg-secondary')">
              {{ i === current.correctIndex ? t('quiz.correct') : (answeredIndex === i ? t('quiz.incorrect') : '') }}
            </span>
          </button>
        </div>

        <div class="d-flex gap-2 mt-4">
          <button v-if="store.index < total - 1" class="btn btn-primary" @click="next">{{ t('quiz.next') }}</button>
          <button v-else class="btn btn-success" @click="restart">{{ t('quiz.finish') }} → {{ t('quiz.restart') }}</button>
          <button class="btn btn-outline-secondary ms-auto" @click="restart">{{ t('quiz.restart') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>