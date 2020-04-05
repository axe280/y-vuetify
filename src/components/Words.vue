<template>
  <v-data-iterator
    :items="words"
    hide-default-footer
  >
    <template v-slot:default="props">
      <v-container>
        <v-row>
          <v-col
            v-for="(item, index) in props.items"
            :key="`itemW${index}`"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-list dense>
                <v-list-item>
                  <v-list-item-content>{{ item.origWord }}</v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-content>{{ item.transWord }}</v-list-item-content>
                  <v-card-actions>
                    <v-btn class="blue" dark small fab>+</v-btn>
                  </v-card-actions>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-data-iterator>
</template>

<script>
export default {
  props: {
    'words': {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      
    }
  }
}
</script>