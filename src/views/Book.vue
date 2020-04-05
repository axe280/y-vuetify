<template>
  <v-container v-if="book">
    <v-row>
      <v-col>
        <book-details :book="book"></book-details>
      </v-col>
    </v-row>

    <v-row class="flex-column flex-md-row">
      <v-col v-for="part in book.parts"
        :key="part.id"
      >
        <book-part-list-item :part="part" :bookId="id"></book-part-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import BookDetails from '../components/BookDetails'
import BookPartListItem from '../components/BookPartListItem'

export default {
  components: {
    BookDetails,
    BookPartListItem
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters('bookList', {
      books: 'getBooksList'
    }),

    book() {
      return this.books.find(book => book.id === this.id)
    }
  }
}
</script>