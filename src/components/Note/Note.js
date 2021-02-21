import { mapActions, mapMutations } from "vuex";

export default {
  name: "Note",
  props: {
    note: {}
  },
  methods: {
    ...mapActions(["deleteNote"]),
    ...mapMutations(["editorModal"]),
    showEditModal(note) {
      this.editorModal(note);
    }
  }
};
