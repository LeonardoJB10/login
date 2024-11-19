import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB5YrWjTdPTrE7KaHwn0fC0Bj3334CalU",
  authDomain: "login-d2583.firebaseapp.com",
  projectId: "login-d2583",
  storageBucket: "login-d2583.firebasestorage.app",
  messagingSenderId: "163513968033",
  appId: "1:163513968033:web:927f0fa09f060e283a57e0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')