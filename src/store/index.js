import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
  // create_note(state, note) {
  //   return note !== "" ? state.notes.push(note) : null;
  // },
  // delete_note(state, id) {
  //   state.notes = state.notes.filter(note => note.id !== id);
  // },
  // showModal(state) {
  //   state.dialog = true;
  // },
  // hideModal(state) {
  //   state.dialog = false;
  // },
  // showError(state) {
  //   state.alertNoteError = true;
  // },
  // hideError(state) {
  //   state.alertNoteError = false;
  // },
  // hideGreetingAlert(state) {
  //   if (state.notes.length === null) state.greetingAlert = false;
  // }
  // sendNote(state, note) {
  //   state.singleNote = note;
  //   console.log(state.singleNote);
  // }
});
