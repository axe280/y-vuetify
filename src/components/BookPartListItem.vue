<template>
  <v-card class="purple lighten-4">
    <v-card-title>{{ part.title }}</v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn>Open</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    part: {
      type: Object,
      required: true
    }
  }
}
</script>