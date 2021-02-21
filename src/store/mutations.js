import Vue from "vue";
import axios from "axios";

const GET_API_DATA = (state, notes) => {
  state.notes = notes;
};
const create_note = (state, note) => {
  const { id, title, content, colorNote } = note;
  axios
    .post("http://localhost:3000/notes/", {
      id: id,
      title: title,
      content: content,
      colorNote: colorNote
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
  return note !== "" ? state.notes.push(note) : null;
};
const delete_note = (state, note) => {
  const { id } = note;
  state.notes = state.notes.filter(note => note.id !== id);
  axios
    .delete(`http://localhost:3000/notes/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
};
const editorModal = (state, note) => {
  state.dialog = true;
  return (state.singleNote = note);
};
const hideModal = state => {
  state.dialog = false;
  return (state.singleNote = null);
};
const showError = state => {
  state.alertNoteError = true;
};
const hideError = state => {
  state.alertNoteError = false;
};
const hideGreetingAlert = state => {
  if (state.notes.length === null) state.greetingAlert = false;
};
const update_note = (state, note) => {
  const { id, title, content, colorNote } = note;
  state.notes.forEach((noteArr, index) => {
    if (noteArr.id === note.id) {
      Vue.set(state.notes, index, note);
      axios
        .patch(`http://localhost:3000/notes/${id}`, {
          id: id,
          title: title,
          content: content,
          colorNote: colorNote
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  });
  state.dialog = false;
};

export default {
  GET_API_DATA,
  create_note,
  delete_note,
  hideModal,
  showError,
  hideError,
  hideGreetingAlert,
  editorModal,
  update_note
};
