export default {
  namespaced: true,

  state: {
    processing: false,
    error: null
  },

  getters: {
    getProcessing: state => state.processing,
    getError: state => state.error 
  },

  mutations: {
    setProcessing(state, payload) {
      state.processing = payload
    },

    setError(state, payload) {
      state.error = payload
    },

    clearError(state) {
      state.error = null 
    }
  }
}
