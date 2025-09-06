import { defineStore } from 'pinia'

// Simple local persistence
const persistKey = 'quiz-state-v1'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    index: 0,
    answers: {},     // { questionId: selectedIndex }
    correctCount: 0
  }),
  actions: {
    load() {
      const raw = localStorage.getItem(persistKey)
      if (raw) Object.assign(this.$state, JSON.parse(raw))
    },
    save() {
      localStorage.setItem(persistKey, JSON.stringify(this.$state))
    },
    answer(q, selectedIndex) {
      if (this.answers[q.id] !== undefined) return // Prevent duplicate answers
      this.answers[q.id] = selectedIndex
      if (selectedIndex === q.correctIndex) this.correctCount++
      this.save()
    },
    next(total) {
      this.index = Math.min(this.index + 1, total - 1)
      this.save()
    },
    restart() {
      this.index = 0
      this.answers = {}
      this.correctCount = 0
      this.save()
    }
  }
})