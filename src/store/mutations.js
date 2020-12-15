const create_note = (state, note) => {
  return note !== "" ? state.notes.push(note) : null;
};
const delete_note = (state, id) => {
  state.notes = state.notes.filter(note => note.id !== id);
};
const showModal = state => {
  state.dialog = true;
};
const hideModal = state => {
  state.dialog = false;
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
const sendNote = (state, note) => {
  if (state.singleNote !== null) state.singleNote = null;
  state.singleNote = note;
  console.log(state.singleNote);
};

export default {
  create_note,
  delete_note,
  showModal,
  hideModal,
  showError,
  hideError,
  hideGreetingAlert,
  sendNote
};
