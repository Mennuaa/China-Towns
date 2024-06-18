<script setup>

import { RouterView } from 'vue-router'
import HeaderPage from './pages/Header/HeaderPage.vue';
import FooterPage from './pages/Footer/FooterPage.vue';
</script>

<template>

  <HeaderPage />
  <RouterView />
  <FooterPage />
</template>
<script>
if(localStorage.getItem('isLightMode') === 'false') {
    document.body.classList.add('dark-mode');
}
</script>