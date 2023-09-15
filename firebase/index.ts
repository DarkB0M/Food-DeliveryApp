import { initializeApp } from "firebase/app";
//@ts-ignore
import { getAuth,initializeAuth,getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "",
    authDomain: "food-appdelivery.firebaseapp.com",
    projectId: "food-appdelivery",
    storageBucket: "food-appdelivery.appspot.com",
    messagingSenderId: "483913178782",
    appId: "1:483913178782:web:38d1aa485b54b12c2aa58f",
    measurementId: "G-4JGNTHG27C"
  };

  export const app = initializeApp(firebaseConfig)
  const inicialAuth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
  })
  export const Auth = getAuth(app)