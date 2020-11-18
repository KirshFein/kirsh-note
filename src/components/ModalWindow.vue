<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-col cols="12">
        <v-text-field
          v-model="titleNote"
          label="Title note"
          hide-details="auto"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-textarea
          v-model="contentNote"
          solo
          name="input-7-4"
          label="Note text"
        ></v-textarea>
      </v-col>

      <div class="d-flex justify-space-around mb-5  ">
        <div
          v-for="(item, i) in colorsForPicker"
          :key="i"
          class="picker"
          :style="{
                backgroundColor: item
              }"
          @click="colorNote = item"
          :class="{'picker__active': colorNote === item}"
        ></div>
      </div>

      <div class="modal-footer d-flex justify-space-between pa-3">
        <v-btn color="error" @click="hideModal">
          Close
        </v-btn>

        <v-btn @click="createNote" color="blue">
          Create Note
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'ModalWindow',
  computed: {
    ...mapState(['dialog']),
  },
  data: () => ({
    colorsForPicker: ['#d9be75', '#e34d75', '#7587d9', '#6c36c9'],
    notes: [],
    titleNote: '',
    contentNote: '',
    colorNote: '',
  }),
  methods: {
    createNote() {
      if (this.titleNote === '' && this.colorNote === '' && this.contentNote === '') {
        this.showError();
        setTimeout(() => {
          this.hideError();
        }, 3000);
      } else {
        const noteConstructor = {
          id: new Date().getTime(),
          title: this.titleNote,
          content: this.contentNote,
          colorNote: this.colorNote,
        };
        this.notes.push(noteConstructor);
        this.hideModal();
        console.log(this.notes);
      }
    },
    ...mapMutations(['showModal', 'hideModal', 'showError', 'hideError']),
  },
};
</script>
