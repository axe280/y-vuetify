import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VuetifyConfirm from 'vuetify-confirm'

Vue.use(VuetifyConfirm, { vuetify })

// sass
import './assets/sass/main.sass'

// firebase
import firebaseConfig from './config/firebase'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),

  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch('userModule/stateChange', user)
    });
  }
}).$mount('#app')
