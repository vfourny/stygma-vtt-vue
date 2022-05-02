import {createRouter, createWebHistory} from 'vue-router'
import SignIn from './pages/auth/signIn.vue'
import SignUp from './pages/auth/signUp.vue'
import Verify from './pages/auth/verify.vue'
import Parties from './pages/parties.vue'
import DefaultLayout from './layouts/default.vue'
import { useUserStore } from './stores'

const routes = [
  { path: '/', redirect:'/auth/sign-in' },
  {
    path: '/auth',
    name:'auth',
    component: DefaultLayout,
    children: [
      { name:'signIn', path: 'sign-in', component: SignIn,meta: { requiresAuth: false } },
      { name:'signUp', path: 'sign-up', component: SignUp,meta: { requiresAuth: false } },
      { name:'verify', path: 'verify', component: Verify,meta: { requiresAuth: true }}
    ]
  },
  { name:'parties', path: '/parties', component: Parties,meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  const store = useUserStore()
  if (to.meta.requiresAuth){
    if(store.isLoggedIn) {
     if(!store.user?.emailVerified && to.name !=='verify') return '/auth/verify'
     else if(store.user?.emailVerified && to.name ==='verify') return '/parties'
    }
    else return '/auth/sign-in' 
  }
})

export default router