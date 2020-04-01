<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Sign in</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert type="warning"
              v-show="singInError"
            >
              {{ singInError }}
            </v-alert>
            <v-form v-model="valid">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="email"
                required
              />

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                required
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary"
              :disabled="processing || !valid"
              @click.prevent="signIn"
            >Sign in</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      email: null,
      password: null,
      valid: false,
      emailRules: [
        (v) => !!v || 'Enter your email',
        (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || 'Неправильный email'
      ],
      passwordRules: [
        (v) => !!v || 'Enter your password'
      ]
    }
  },

  computed: {
    ...mapGetters('generalModule', {
      singInError: 'getError',
      processing: 'getProcessing',
    }),

    ...mapGetters('userModule', {
      isUserAuthenticated: 'isUserAuthenticated'
    })
  },

  methods: {    
    signIn() {
      this.$store.dispatch('userModule/signIn', {
        email: this.email,
        password: this.password
      })
    }
  },

  watch: {
    isUserAuthenticated(status) {
      if (status === true) {
        this.$router.push('/')
      }
    }
  }
}
</script>
