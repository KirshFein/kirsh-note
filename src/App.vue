<template>
  <v-app>
    <v-app-bar app color="purple darken-4">
      <div class="d-flex align-center">
        <h2 class="logo-name white--text">Kirsh Note</h2>
      </div>

      <v-spacer></v-spacer>
        <v-btn class="purple lighten-5" @click.stop="showModal">
        Create note
      </v-btn>
    </v-app-bar>

    <v-main>
      <GreetingIcon v-if="allNotes.length === 0" class="greeting-icon"/>
      <ModalWindow/>
      <AlertError v-show="this.$store.state.alertNoteError"/>
      <main class="mt-8 pl-3 pr-3">
        <ListNotes :all-notes="allNotes"/>
      </main>
    </v-main>
  </v-app>
</template>

<script>
import ModalWindow from '@/components/ModalWindow';
import AlertError from '@/components/AlertError';
import ListNotes from '@/components/ListNotes';
import GreetingIcon from '@/components/GreetingIcon';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    ModalWindow, AlertError, ListNotes, GreetingIcon,
  },
  computed: {
    ...mapGetters(['allNotes']),
  },
  methods: {
    ...mapMutations(['showModal', 'hideGreetingAlert']),
  },
};
</script>

<style lang="scss">
@import "src/assets/style/styles";
</style>
