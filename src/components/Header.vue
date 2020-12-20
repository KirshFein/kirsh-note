<template>
  <v-app-bar app color="purple darken-4">
    <div class="d-flex align-center">
      <h2 class="logo-name white--text">Kirsh Note</h2>
    </div>

    <v-spacer> </v-spacer>
    <v-btn class="purple lighten-5" @click.stop="editorModal(null)">
      Create note
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapMutations(["editorModal"])
  }
};
</script>
