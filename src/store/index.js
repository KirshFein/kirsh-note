import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    dialog: false,
    alertNoteError: false,
    greetingAlert: true,
    sendData: []
  },
  getters: {
    allNotes: state => state.notes,
    sendData: state => state.sendData
  },
  actions: {
    createNewNote({ commit }, note) {
      commit("create_note", note);
    },
    deleteNote({ commit }, id) {
      commit("delete_note", id);
    },
    updateNote({ commit }, note) {
      commit("update_note", note);
    },
    sendDataToModal({ commit }, noteData) {
      commit("send_data_to_modal", noteData);
    }
  },
  mutations: {
    create_note(state, note) {
      return note !== "" ? state.notes.push(note) : null;
    },
    delete_note(state, id) {
      state.notes = state.notes.filter(note => note.id !== id);
    },
    showModal(state) {
      state.dialog = true;
    },
    hideModal(state) {
      state.dialog = false;
      if (state.sendData.length !== 0) state.sendData.length = 0;
    },
    showError(state) {
      state.alertNoteError = true;
    },
    hideError(state) {
      state.alertNoteError = false;
    },
    hideGreetingAlert(state) {
      if (state.notes.length === null) {
        state.greetingAlert = false;
      }
    },
    send_data_to_modal(state, noteData) {
      return state.sendData.push(noteData);
    }
    // clean_data_to_modal(state) {
    //   state.sendData = [];
    // }
  }
});
