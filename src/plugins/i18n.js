import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import fr from '../locales/fr.json'

// Default to FR (target audience is French speakers)
const saved = localStorage.getItem('lang')
const fallback = 'fr'
const initial = saved || (navigator.language?.slice(0,2) ?? fallback)
const supported = ['fr','en']
const use = supported.includes(initial) ? initial : fallback

export default createI18n({
  legacy: false,
  locale: use,
  fallbackLocale: fallback,
  messages: { en, fr }
})