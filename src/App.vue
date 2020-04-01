<template>
  <v-app>
    <app-header></app-header>

    <v-content>
      <router-view></router-view>
    </v-content>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
// import BookList from './components/BookList'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    // BookList
  },

  data: () => ({
    //
  }),
};
</script>
