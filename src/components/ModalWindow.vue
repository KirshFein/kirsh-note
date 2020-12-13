<template>
  <v-dialog persistent v-model="dialog" max-width="500">
    <v-card>
      <v-col cols="12">
        <v-text-field v-if="sendData.length !== 0" v-model="validateTitleNote" label="Title note" hide-details="auto"></v-text-field>
        <v-text-field v-else v-model="titleNote" label="Title note" hide-details="auto"></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-textarea v-if="sendData.length !== 0" v-model="validateContentNote" solo name="input-7-4" label="Note text"></v-textarea>
        <v-textarea v-else v-model="contentNote" solo name="input-7-4" label="Note text"></v-textarea>
      </v-col>

      <div class="d-flex justify-space-around mb-5" v-if="sendData.length === 0">
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

      <div class="d-flex justify-space-around mb-5" v-else>
        <div
          v-for="(item, i) in colorsForPicker"
          :key="i"
          class="picker"
          :style="{
            backgroundColor: item
          }"
          @click="validateColorNote = item"
          :class="{ picker__active: validateColorNote === item }"
        ></div>
      </div>

      <div class="modal-footer d-flex justify-space-between pa-3">
        <v-btn color="error" @click="hideModal">
          Close
        </v-btn>

        <v-btn @click="createNote" color="blue">
          {{ this.sendData.length !== 0 ? "Update note" : "Create Note" }}
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "ModalWindow",
  computed: {
    ...mapState(["dialog"]),
    ...mapGetters(["sendData"])
  },
  watch: {
    sendData() {
      if (this.sendData.length !== 0) {
        for (let element of this.sendData) {
          this.validateTitleNote = element.title;
          this.validateContentNote = element.content;
          this.validateColorNote = element.colorNote;
        }
      }
      console.log(this.sendData);
    }
  },
  data: () => ({
    colorsForPicker: ["#d9be75", "#e34d75", "#7587d9", "#6c36c9"],
    notes: [],
    titleNote: "",
    contentNote: "",
    colorNote: "",
    validateTitleNote: "",
    validateContentNote: "",
    validateColorNote: ""
  }),
  methods: {
    ...mapActions(["createNewNote"]),
    ...mapMutations(["showModal", "hideModal", "showError", "hideError"]),
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
