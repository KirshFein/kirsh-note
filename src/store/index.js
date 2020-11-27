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
    allNotes: (state) => state.notes,
  },
  actions: {
    createNewNote({ commit }, note) {
      commit('create_note', note);
    },
  },
  mutations: {
    create_note(state, note) {
      // eslint-disable-next-line no-unused-expressions
      note !== '' ? state.notes.push(note) : null;
    },
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
