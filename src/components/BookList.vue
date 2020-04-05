<template>
  <v-container max-width="900">
    <v-row class="flex-column flex-sm-row">
      <v-col sm="8" xs="12">
        <v-text-field label="Search book"
          v-model="searchTerm"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-select label="level"
          :items="levels"
          v-model="level"
          multiple
        ></v-select>
      </v-col>
    
    </v-row>
    
    <v-row class="flex-column">
      <v-col v-for="book in filteredBooks"
        :key="book.id"
      >
        <book :book="book"></book>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Book from './BookListItem'

export default {
  components: {
    Book
  },

  data() {
    return {
      searchTerm: '',
      level: [],
      levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
    }
  },

  computed: {
    ...mapGetters('bookList', {
      books: 'getBooksList'
    }),

    filteredBooks() {
      let books = this.books,
          searchString = this.searchTerm.toLowerCase()

      if (this.searchTerm) {
        books = books.filter(book => 
          book.title.toLowerCase().indexOf(searchString) >= 0 ||
          book.description.toLowerCase().indexOf(searchString) >= 0
        )
      }

      if (this.level.length) {
        books = books.filter(book => 
          this.level.filter(val => book.level.indexOf(val) !== -1).length > 0
        )
      }

      return books
    }
  }
}
</script>