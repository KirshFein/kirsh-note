<template>
  <v-dialog persistent v-model="dialog" max-width="500">
    <v-card>
      <v-col cols="12">
        <v-text-field v-model="titleNote" label="Title note" hide-details="auto"></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-textarea v-model="contentNote" solo name="input-7-4" label="Note text"></v-textarea>
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

        <v-btn @click="createNote" color="blue">
          Create
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "ModalWindow",
  // mounted() {
  //   this.checkStore();
  // },
  computed: {
    ...mapState(["dialog"])
  },
  data: () => ({
    colorsForPicker: ["#d9be75", "#e34d75", "#7587d9", "#6c36c9"],
    notes: [],
    titleNote: "",
    contentNote: "",
    colorNote: ""
  }),
  methods: {
    ...mapActions(["createNewNote"]),
    ...mapMutations(["showModal", "hideModal", "showError", "hideError"]),
    // checkStore() {
    //   if (this.singleNote !== null) {
    //     let copyNote = { ...this.singleNote };
    //     this.titleNote = copyNote.title;
    //     this.contentNote = copyNote.content;
    //     this.colorNote = copyNote.colorNote;
    //   }
    // },
    createNote() {
      if (this.titleNote !== "" && this.colorNote !== "" && this.contentNote !== "") {
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
        return;
      } else {
        this.showError();
        setTimeout(() => {
          this.hideError();
        }, 2000);
      }
    }
  }
};
</script>
