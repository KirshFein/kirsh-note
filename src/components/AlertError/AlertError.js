import { mapState } from "vuex";

export default {
  name: "AlertError",
  computed: {
    ...mapState(["alertNoteError"])
  }
};
