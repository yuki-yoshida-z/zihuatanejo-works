import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import vuetify from './plugins/vuetify'
import 'ress'
import 'animate.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCSYRmbKnUd-4HGbD0gqYfLir5uJoFmNGI",
  authDomain: "zihuatanejo-works.firebaseapp.com",
  databaseURL: "https://zihuatanejo-works.firebaseio.com",
  projectId: "zihuatanejo-works",
  storageBucket: "zihuatanejo-works.appspot.com",
  messagingSenderId: "686832512305",
  appId: "1:686832512305:web:5dace4c6195b2fcd7dd410",
  measurementId: "G-WVEM8DE0N8"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
