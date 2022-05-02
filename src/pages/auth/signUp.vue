<template>
  <q-page>
    <div class="row items-center window-height window-width justify-center">
      <!-- <SignUpForm redirect="/parties"></SignUpForm> -->
      <AuthCarousel redirect='/parties' />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import SignUpForm from '../../components/auth/SignUpForm.vue';
import AuthCarousel from '../../components/auth/AuthCarousel.vue';

</script>

<style scoped>
</style>