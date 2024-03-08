import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase.config.ts'
import {getAuth, GoogleAuthProvider } from 'firebase/auth'

export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const Providers = { google: new GoogleAuthProvider() }