import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    dialog: false,
    alertNoteError: false,
  },
  getters: {
  },
  actions: {
  },
  mutations: {
    showModal(state) {
      state.dialog = true;
    },
    hideModal(state) {
      state.dialog = false;
    },
    showError(state) {
      state.alertNoteError = true;
    },
    hideError(state) {
      state.alertNoteError = false;
    },
  },
});
