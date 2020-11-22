<template>
  <v-app>
    <v-app-bar app color="teal" dark>
      <div class="d-flex align-center">
        <h1 class="logo-name white--text">Kirsh Note</h1>
      </div>

      <v-spacer></v-spacer>
        <v-btn class="black"
               @click.stop="showModal">
        Create note
      </v-btn>
    </v-app-bar>

    <v-main>
      <ModalWindow/>
      <AlertError v-show="this.$store.state.alertNoteError"/>
      <main class="d-flex justify-center mt-8">
        <Note/>
      </main>
    </v-main>
  </v-app>
</template>

<script>
// eslint-disable-next-line import/extensions
import ModalWindow from '@/components/ModalWindow';
// eslint-disable-next-line import/extensions
import AlertError from '@/components/AlertError';
// eslint-disable-next-line import/extensions
import Note from '@/components/Note';
import { mapMutations } from 'vuex';

export default {
  name: 'App',

  components: { ModalWindow, AlertError, Note },

  methods: {
    ...mapMutations(['showModal']),
  },
};
</script>

<style lang="scss">
@import "src/assets/style/styles";
</style>
