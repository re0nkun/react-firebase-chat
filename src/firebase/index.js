import firebase from 'firebase/app'
import 'firebase/database'
import { firebaseConfig } from './config.js'

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const firebaseDb = firebaseApp.database()