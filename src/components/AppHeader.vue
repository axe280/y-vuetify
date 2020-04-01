<template>
  <div class="header-wrapp">
    <v-navigation-drawer app 
      temporary
      v-model="drawer"
      class="hidden-md-and-up"
    >
      <v-list-item-group>
        <v-list-item v-for="(menuItem, index) in menuItems"
          :key="`navDrawer${index}`"
          :to="menuItem.route"
        >
          <v-list-item-icon>
            <v-icon v-html="menuItem.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="isUserAuthenticated"
          @click="signOut"
        >
          <v-list-item-icon>
            <v-icon left>mdi-exit-to-app</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>

    <v-app-bar app
      class="primary"
      dark
    >
      <v-app-bar-nav-icon class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <router-link to="/"
        tag="span"
        class="logo"
      >
        <v-toolbar-title v-text="'Logoname'"></v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(menuItem, index) in menuItems"
          :key="`menuItem${index}`"
          :to="menuItem.route"
          text
        >
          <v-icon left v-html="menuItem.icon"></v-icon>
          {{ menuItem.title }}
        </v-btn>
        <v-btn v-if="isUserAuthenticated"
          text
          @click="signOut"
        >
          <v-icon left>mdi-exit-to-app</v-icon>
          Log out
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      drawer: false
    }
  },

  computed: {
    ...mapGetters('userModule', {
      isUserAuthenticated: 'isUserAuthenticated'
    }),

    menuItems() {
      if (this.isUserAuthenticated) {
        return [
          {
            icon: 'mdi-bookshelf',
            title: 'Read',
            route: '/books'
          },
          {
            icon: 'mdi-desk-lamp',
            title: 'Learn words',
            route: '/words'
          },
          {
            icon: 'mdi-account',
            title: 'Account',
            route: '/profile'
          }
        ]
      } else {
        return [
          {
            icon: 'mdi-bookshelf',
            title: 'Read',
            route: '/books'
          },
          {
            icon: 'mdi-desk-lamp',
            title: 'Learn words',
            route: '/words'
          },
          {
            icon: 'mdi-location-enter',
            title: 'Sign in',
            route: '/signin'
          },
          {
            icon: 'mdi-emoticon-kiss-outline',
            title: 'Sign up',
            route: '/signup'
          }
        ]
      }
    }
  },

  methods: {
    signOut() {
      this.$confirm('Do you really want to exit?')
        .then(res => {
          if (res) {
            this.$store.dispatch('userModule/signOut')
          }
        })
    }
  }
}
</script>
