<template>
  <v-card class="black pa-2 mr-4 mb-5" elevation="5" rounded max-width="500" :style="{ backgroundColor: note.colorNote + '!important' }">
    <v-card-title class="black--text font-weight-bold">{{ note.title }}</v-card-title>
    <v-card-text class="black--text font-weight-regular">{{ note.content }}</v-card-text>
    <div class="d-flex justify-end">
      <svg @click="showEditModal(note.id)" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          class="note-icon"
          d="M19 8L15 12H18C18 15.31 15.31 18 12 18C10.99 18 10.03 17.75 9.2 17.3L7.74 18.76C8.97 19.54 10.43 20 12 20C16.42 20 20 16.42 20 12H23L19 8ZM6 12C6 8.69 8.69 6 12 6C13.01 6 13.97 6.25 14.8 6.7L16.26 5.24C15.03 4.46 13.57 4 12 4C7.58 4 4 7.58 4 12H1L5 16L9 12H6Z"
          fill="black"
        />
      </svg>
      <svg @click="deleteNote(note.id)" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          class="note-icon"
          d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
          fill="black"
        />
      </svg>
    </div>
  </v-card>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Note",
  props: {
    note: {}
  },
  methods: {
    ...mapActions(["deleteNote", "sendDataToModal"]),
    ...mapMutations(["showModal"]),
    showEditModal(idNote) {
      const dataNote = this.$store.state.notes;
      dataNote.forEach(element => {
        if (element.id === idNote) {
          this.sendDataToModal({
            title: element.title,
            id: element.id,
            content: element.content,
            colorNote: element.colorNote
          });
        }
      });
      this.showModal();
    }
  }
};
</script>
