<template>
  <v-app>
    <Header />
    <v-main>
      <GreetingIcon v-if="allNotes.length === 0" class="greeting-icon" />
      <ModalWindow />
      <AlertError v-if="this.$store.state.alertNoteError" />
      <main class="mt-8 pl-3 pr-3">
        <ListNotes :all-notes="allNotes" />
      </main>
    </v-main>
  </v-app>
</template>

<script>
import ModalWindow from "@/components/ModalWindow";
import AlertError from "@/components/AlertError";
import ListNotes from "@/components/ListNotes";
import GreetingIcon from "@/components/GreetingIcon";
import Header from "@/components/Header";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    ModalWindow,
    AlertError,
    ListNotes,
    GreetingIcon
  },
  computed: {
    ...mapGetters(["allNotes"])
  }
};
</script>

<style lang="scss">
@import "src/assets/style/styles";
</style>
