import axios from "axios";

export default {
  GET_DATA: async ({ commit }) => {
    await axios
      .get(`http://localhost:3000/notes/`)
      .then(notes => {
        commit("GET_API_DATA", notes.data);
        return notes;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
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
