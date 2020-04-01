<template>
  <v-container>
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
        <v-card class="blue">
          <v-container>
            <v-row>
              <v-col class="px-sm-5"
                sm="4"
                md="3"
              >
                <v-img
                  height="200"
                  src="http://covertopia.com/wp-content/uploads/2015/05/000227_Alt.jpg"
                ></v-img>
                <div class="mt-4 text-center">
                  <v-btn>Youtube</v-btn>
                </div>
              </v-col>

              <v-col class="white--text">
                <v-card-title class="headline">{{ book.title }}</v-card-title>
                <v-card-text>
                  <div class="my-2">{{ book.description }}</div>
                  <div class="my-2">Level: 
                    {{ getBookLevel(book.level) }},
                    {{ book.parts }} parts
                  </div>
                </v-card-text>

                <v-card-actions>
                  <v-rating
                    :value="book.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                  ></v-rating>
                  <div class="ml-2">
                    <span>{{ book.rating }}</span> 
                    (<span>{{ book.ratingCount }}</span>)
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn>View details</v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
  },

  methods: {
    getBookLevel(level) {
      return level.join('/')
    }
  }
}
</script>