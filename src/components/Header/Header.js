import { mapMutations } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapMutations(["editorModal"])
  }
};
