import { User as fbUser } from "firebase/auth";
import { defineStore } from "pinia";
import { fbCreateAccount, fbSignIn, fbSignInWithGoogle, fbSignOut } from '../composables/useFirebase';

interface IUserState {
  user: fbUser | null;
  error: null;
}

export const useUserStore = defineStore("userStore", {
  state: (): IUserState => ({
    user: null,
    error: null,
  }),
  getters: {
    isLoggedIn: (state) => state.user !== null,
    userError: (state) => state.error,
  },
  actions: {
     async createAccount(email: string, password: string) {
        try {
          const user = await fbCreateAccount(email, password);
          this.user = user ? user : null;
          this.error = null;
          return true;
        } catch (e: any) {
          this.user = null;
          this.error = e;
          return false;
        }
      },
    async signInUser(email: string, password: string) {
      try {
        const response = await fbSignIn(email, password);
        this.user = response.user ? response.user : null;
        this.error = null;
        return true;
      } catch (e: any) {
        this.user = null;
        this.error = e;
        return false;
      }
    },
    async signInUserWithGoogle(){
      try {
        const response = await fbSignInWithGoogle();
        this.user = response.user ? response.user : null;
        this.error = null;
        return true;
      } catch (e: any) {
        this.user = null;
        this.error = e;
        return false;
      }
    },
    async signOutUser() {
      try {
        await fbSignOut();
        this.user = null;
        this.error = null;
        return true;
      } catch (e: any) {
        this.error = e;
        return false;
      }
    },
  },
});