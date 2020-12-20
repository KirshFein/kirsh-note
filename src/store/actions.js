export default {
  createNewNote({ commit }, note) {
    commit("create_note", note);
  },
  deleteNote({ commit }, id) {
    commit("delete_note", id);
  },
  updateNote({ commit }, note) {
    commit("update_note", note);
  }
};
