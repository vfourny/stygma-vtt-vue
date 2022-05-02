<template>
  <q-btn color="primary" @click="signInWithGoogle" label="Connexion avec Google" icon="fa-brands fa-google" outline
    size="lg" />
</template>

<script setup lang="ts">
import { useUserStore } from '../../stores/user';


const userStore = useUserStore()
const signInWithGoogle = async () => {
  await userStore.signInUserWithGoogle()
}
</script>

<style scoped>
</style>