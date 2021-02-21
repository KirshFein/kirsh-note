<template>
  <v-app>
    <Header />
    <v-main>
      <ModalWindow v-if="this.$store.state.dialog" />
      <GreetingIcon v-if="allNotes.length === 0" class="greeting-icon" />
      <AlertError v-if="this.$store.state.alertNoteError" />
      <main class="mt-8 pl-3 pr-3">
        <ListNotes :all-notes="allNotes" />
      </main>
    </v-main>
  </v-app>
</template>

<script>
import ModalWindow from "@/components/ModalWindow/ModalWindow.vue";
import AlertError from "@/components/AlertError/AlertError.vue";
import ListNotes from "@/components/ListNotes/ListNotes.vue";
import GreetingIcon from "@/components/GreetingIcon/GreetingIcon.vue";
import Header from "@/components/Header/Header.vue";
import { mapGetters, mapActions } from "vuex";

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
    ...mapGetters(["allNotes"]),
    ...mapActions(["GET_DATA"])
  },
  mounted() {
    this.GET_DATA;
  }
};
</script>

<style lang="scss">
@import "src/assets/style/styles";
</style>
