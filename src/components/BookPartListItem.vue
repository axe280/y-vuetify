<template>
  <v-card class="purple lighten-4">
    <v-card-title>{{ part.title }}</v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :to="{name: 'bookPart', params: {bookId: bookId, partId: part.id} }">Open</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    'part': {
      type: Object,
      required: true
    },
    'bookId': {
      required: true
    }
  }
}
</script>