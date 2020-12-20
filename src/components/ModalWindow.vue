<template>
  <v-dialog persistent v-model="dialog" max-width="500">
    <v-card>
      <v-col cols="12">
        <v-text-field v-model="titleNote" label="Title note" hide-details="auto"></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-textarea v-model="contentNote" solo label="Note text"></v-textarea>
      </v-col>

      <div class="d-flex justify-space-around mb-5">
        <div
          v-for="(item, i) in colorsForPicker"
          :key="i"
          class="picker"
          :style="{
            backgroundColor: item
          }"
          @click="colorNote = item"
          :class="{ picker__active: colorNote === item }"
        ></div>
      </div>

      <div class="modal-footer d-flex justify-space-between pa-3">
        <v-btn color="error" @click="hideModal">
          Close
        </v-btn>

        <v-btn @click="createNote" color="blue"> {{ this.singleNote !== null ? "Update note" : "Create" }} </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "ModalWindow",
  computed: {
    ...mapState(["dialog", "singleNote"])
  },
  mounted() {
    if (this.singleNote !== null) {
      this.updateValue();
    }
  },
  destroyed() {
    this.titleNote = "";
    this.contentNote = "";
    this.colorNote = "";
  },
  data: () => ({
    colorsForPicker: ["#d9be75", "#e34d75", "#7587d9", "#6c36c9"],
    notes: [],
    titleNote: "",
    contentNote: "",
    colorNote: ""
  }),
  methods: {
    ...mapActions(["createNewNote", "updateNote"]),
    ...mapMutations(["editorModal", "hideModal", "showError", "hideError"]),
    createNote() {
      if (this.titleNote !== "" && this.colorNote !== "" && this.contentNote !== "" && this.singleNote === null) {
        this.createNewNote({
          id: new Date().getTime(),
          title: this.titleNote,
          content: this.contentNote,
          colorNote: this.colorNote
        });
        this.hideModal();
        this.titleNote = "";
        this.contentNote = "";
        this.colorNote = "";
      } else if (this.singleNote !== null) {
        this.updateNote({
          id: this.singleNote.id,
          title: this.titleNote,
          content: this.contentNote,
          colorNote: this.colorNote
        });
      } else {
        this.showError();
        setTimeout(() => {
          this.hideError();
        }, 2000);
      }
    },
    updateValue() {
      if (this.singleNote !== null) {
        const { title, content, colorNote } = this.singleNote;
        this.titleNote = title;
        this.contentNote = content;
        this.colorNote = colorNote;
      }
    }
  }
};
</script>
