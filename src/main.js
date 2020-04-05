import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VuetifyConfirm from 'vuetify-confirm'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VuetifyConfirm, { vuetify })
Vue.use(VueYouTubeEmbed)

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
