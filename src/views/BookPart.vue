<template>
  <v-container>
    <v-row>
      <v-col>
        <book-part-content :part="part"></book-part-content>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookPartContent from '../components/BookPartContent'
import { mapGetters } from 'vuex'

export default {
  components: {
    BookPartContent
  },

  props: {
    'bookId': {
      type: String,
      required: true
    },

    'partId': {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters('bookList', {
      parts: 'getBookParts'
    }),

    part() {
      let part = this.parts.find(bPart => bPart.bookPartId === this.partId)
      return part;
    }
  }
}
</script>