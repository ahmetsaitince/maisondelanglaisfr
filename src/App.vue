<template>
  <NavBar />
  <main class="py-4">
    <router-view />
  </main>
  <footer class="border-top py-4">
    <div class="container text-center text-muted small">© {{ new Date().getFullYear() }} — {{ $t('footer.rights') }}</div>
  </footer>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>