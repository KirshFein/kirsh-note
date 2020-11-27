<template>
  <section>
    <div
      v-for="note in allNotes"
      :key="note.id"
    >
      <Note :note="note"/>
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line import/extensions
import Note from '@/components/Note';

export default {
  name: 'ListsNote',
  components: { Note },
  props: {
    allNotes: {},
  },
};
</script>
