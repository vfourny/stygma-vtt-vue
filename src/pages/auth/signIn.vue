<template>
  <q-page>
    <div class="row items-center window-height window-width justify-center">
      <SignInForm redirect="/parties" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import SignInForm from '../../components/auth/SignInForm.vue';

</script>

<style scoped>
</style>