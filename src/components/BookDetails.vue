<template>
  <v-card class="blue lighten-5">
    <v-container>
      <v-row>
        <v-col class="px-sm-5"
          sm="4"
          md="3"
        >
          <v-img
            height="240"
            src="http://covertopia.com/wp-content/uploads/2015/05/000227_Alt.jpg"
          ></v-img>
        </v-col>

        <v-col>
          <v-card-title class="headline">{{ book.title }}</v-card-title>
          <v-card-text class="book-desc">
            <div class="my-2">{{ book.description }}</div>
            <div class="my-2">Level: 
              {{ getBookLevel(book.level) }},
              {{ book.parts.length }} parts
            </div>
          </v-card-text>

          <v-card-actions class="flex-column flex-sm-row">
            <v-rating
              :value="book.rating"
              color="amber"
              dense
              half-increments
              readonly
            ></v-rating>
            <div class="my-3 my-sm-0 ml-sm-2">
              <span>{{ book.rating }}</span> 
              (<span>{{ book.ratingCount }}</span>)
            </div>
            <v-spacer></v-spacer>
            <v-btn>Save book</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import * as bookHelper from '../helpers/book'

export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },

  methods: {
    getBookLevel: bookHelper.getBookLevel
  }
}
</script>