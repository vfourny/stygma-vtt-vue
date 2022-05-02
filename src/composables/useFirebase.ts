import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, User } from 'firebase/auth';
import { auth } from '../utils/firebase';

export const fbCreateAccount = async (
  email: string,
  password: string
) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log(response);
  await fbSendEmailVerification(response.user)
  if (response) return response.user
    else return  null
};

export const fbSendEmailVerification = async (user:User)=>{
  await sendEmailVerification(user)
}

export const fbSignIn = async (email: string, password: string) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  console.log(response);
  return response;
};

export const fbSignInWithGoogle = async() => {
	const provider = new GoogleAuthProvider()
	const response = await signInWithPopup(auth, provider)
  return response
}

export const fbSignOut = async () => {
  await signOut(auth);
  return true;
};