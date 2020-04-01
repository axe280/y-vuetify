import firebase from 'firebase'

export default {
  namespaced: true,

  state: {
    user: {
      isAuthenticated: false,
      uid: null
    }
  },

  getters: {
    isUserAuthenticated: state => state.user.isAuthenticated
  },

  mutations: {
    setUser(state, payload) {
      state.user.isAuthenticated = true
      state.user.uid = payload.uid
    },

    unSetUser(state) {
      state.user.isAuthenticated = false
      state.user.uid = null
    }
  },

  actions: {
    signUp({ commit }, payload) {
      commit('generalModule/setProcessing', true, {root: true})
      commit('generalModule/clearError', true, {root: true})
      
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        commit('generalModule/setProcessing', false, {root: true}) 
      })
      .catch(error => {
        commit('generalModule/setProcessing', false, {root: true})
        commit('generalModule/setError', error.message, {root: true})
      });
    },

    signIn({ commit }, payload) {
      commit('generalModule/setProcessing', true, {root: true})
      commit('generalModule/clearError', true, {root: true})
      
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        commit('generalModule/setProcessing', false, {root: true}) 
      })
      .catch(error => {
        commit('generalModule/setProcessing', false, {root: true})
        commit('generalModule/setError', error.message, {root: true})
      });
    },

    signOut() {
      firebase.auth().signOut()
    },

    stateChange({ commit }, user) {
      if (user) {
        commit('setUser', user)
      } else {
        commit('unSetUser')
      }
    }
  }
}
