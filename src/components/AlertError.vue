<template>
  <v-card
    class="alert__note-error mx-auto"
    max-width="340"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="alert__note-title overline mb-4">
          YOUR NOTE IS EMPTY
        </div>
        <v-list-item-subtitle class="alert__note-subtitle mb-1">
          Please fill in your note and choose its color
        </v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AlertError',
  computed: {
    ...mapState(['alertNoteError']),
  },
};
</script>

<style scoped>

</style>
