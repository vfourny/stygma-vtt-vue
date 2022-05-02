      <template>

      <q-card class="text-center col-6">

            <q-tab-panels animated v-model="panel.active" transition-next="slide-right" transition-prev="slide-left"
                  transition-duration="50">
                  <q-tab-panel name="signUp">
                        <q-card-section horizontal>
                              <q-card-section>
                                    <h4>Bienvenue</h4>
                                    <p>Vous souhaitez créer ou rejoindre une table de jeu. Rentrez vos informations et
                                          créez
                                          vous un
                                          compte !</p>
                                    <q-btn @click="swapTab('signIn')">Créer un compte</q-btn>
                              </q-card-section>
                              <q-card-section>
                                    <h4>Créer un compte</h4>
                                    <q-form @submit="register" autofocus class="q-gutter-y-md text-center">
                                          <q-input type="email" placeholder="Adresse mail" v-model="form.email"
                                                lazy-rules :rules="[val => val && val.length > 0 || 'Champs requis']" />
                                          <q-input type="password" placeholder="Mot de passe" v-model="form.password"
                                                lazy-rules :rules="[
                                                      val => val !== null && val !== '' || 'Champs requis',
                                                      val => val.length > 3 && val.length < 20 || 'Le mot de passe doit être compris entre 3 et 30 caractères'
                                                ]" />
                                          <q-input type="password" placeholder="Confirmer le mot de passe"
                                                v-model="form.repeat" lazy-rules :rules="[
                                                      val => val !== null && val !== '' || 'Champs requis',
                                                      val => val === form.password || 'Les mots de passe ne correspondent pas'
                                                ]" />
                                          <q-btn type="submit" class="full-width" unelevated color="positive" size="lg"
                                                label="Créer mon compte">
                                          </q-btn>
                                          <GoogleSignInButton class="full-width" />
                                    </q-form>
                              </q-card-section>
                        </q-card-section>
                  </q-tab-panel>
                  <q-tab-panel name="signIn">
                        <q-card-section horizontal>
                              <q-card-section>
                                    <h4>Connexion</h4>
                                    <q-form @submit="signIn" autofocus class="q-gutter-y-md text-center">
                                          <q-input type="email" placeholder="Adresse mail" v-model="form.email"
                                                lazy-rules :rules="[val => val && val.length > 0 || 'Champs requis']" />
                                          <q-input type="password" placeholder="Mot de passe" v-model="form.password"
                                                lazy-rules :rules="[
                                                      val => val !== null && val !== '' || 'Champs requis',
                                                      val => val.length > 3 && val.length < 20 || 'Le mot de passe doit être compris entre 3 et 30 caractères'
                                                ]" />
                                          <q-btn type="submit" class="full-width" unelevated color="positive" size="lg"
                                                label="Accéder à l'application">
                                          </q-btn>
                                          <GoogleSignInButton class="full-width" />
                                    </q-form>
                              </q-card-section>
                              <q-card-section>
                                    <h4>Bienvenue</h4>
                                    <p>Vous souhaitez créer ou rejoindre une table de jeu. Rentrez vos informations et
                                          créez
                                          vous un
                                          compte !</p>
                                    <q-btn @click="swapTab('signUp')">Créer un compte</q-btn>
                              </q-card-section>

                        </q-card-section>
                  </q-tab-panel>
            </q-tab-panels>

      </q-card>
</template>

<script setup lang="ts">

import { reactive } from "vue";
import { useUserStore } from '../../stores/user';
import { useRouter } from 'vue-router';
import GoogleSignInButton from '../../components/auth/GoogleSignInButton.vue';

const props = defineProps<{ redirect: string }>()

const userStore = useUserStore()
const router = useRouter()

const form = reactive({
      email: '',
      password: '',
      repeat: ''
})

const panel = reactive({ active: 'signUp' })

const register = async (e) => {
      e.preventDefault()
      await userStore.createAccount(form.email, form.password)
      router.push(props.redirect)
};


const signIn = async (e) => {
      e.preventDefault()
      await userStore.signInUser(form.email, form.password)
      router.push(props.redirect)
};

const swapTab = (tab: string) => {
      panel.active = tab
}

</script>

<style scoped>
</style>