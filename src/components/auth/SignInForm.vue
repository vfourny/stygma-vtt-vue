<template>
  <q-card class="text-center col-6">
    <q-card-section horizontal>
      <q-img class="col-6" src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-card-section>
        <h4>Connexion</h4>
        <q-form @submit="signIn" autofocus class="q-gutter-y-md text-center">
          <q-input type="email" placeholder="Adresse mail" v-model="form.email" lazy-rules
            :rules="[val => val && val.length > 0 || 'Champs requis']" />
          <q-input type="password" placeholder="Mot de passe" v-model="form.password" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Champs requis',
            val => val.length > 3 && val.length < 20 || 'Le mot de passe doit être compris entre 3 et 30 caractères'
          ]" />
          <q-btn type="submit" class="full-width" unelevated color="positive" size="lg" label="Accéder à l'application">
          </q-btn>
          <GoogleSignInButton class="full-width" />
        </q-form>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useUserStore } from '../../stores';
import { useRouter } from 'vue-router';
import GoogleSignInButton from '../../components/auth/GoogleSignInButton.vue';

const props = defineProps<{ redirect: string }>()

const userStore = useUserStore()
const router = useRouter()

const form = reactive({
  email: '',
  password: ''
})

const signIn = async (e) => {
  e.preventDefault()
  await userStore.signInUser(form.email, form.password)
  router.push(props.redirect)
};
</script>

<style scoped>
</style>