import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import QuizPage from '../views/QuizPage.vue'
import VideosPage from '../views/VideosPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  { path: '/', name: 'home', component: LandingPage },
  { path: '/quiz', name: 'quiz', component: QuizPage },
  { path: '/videos', name: 'videos', component: VideosPage },
  { path: '/contact', name: 'contact', component: ContactPage }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})
