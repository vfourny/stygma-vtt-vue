<template>
  <q-card class="text-center col-4">
    <q-card-section>
      <h5>Vérification de mail nécessaire</h5>
      <p> Afin d'activer votre compte nous devons vérifier votre mail. Vous devriez l'avoir reçu sur l'adresse mail
        associée
        à votre compte.</p>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn @click="resend" type="button" label="Renvoyer l'email de vérification" size="lg" unelevated
        color="positive" />
    </q-card-actions>
  </q-card>
  <div v-if="errMsg">
    {{ errMsg }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../../stores';
import { fbSendEmailVerification } from '../../composables/useFirebase'

const errMsg = ref('');
const userStore = useUserStore()

const resend = async () => {
  if (userStore.user) { await fbSendEmailVerification(userStore.user) }
}

</script>