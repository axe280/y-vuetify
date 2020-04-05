<template>
  <v-card>
    <v-card-title>{{ part.bookTitle }}</v-card-title>
    <v-card-subtitle>{{ part.partTitle }}</v-card-subtitle>

    <div class="youtube-wrapper">
      <youtube :video-id="part.youtube_id"></youtube>
    </div>

    <v-container>
      <v-row>
        <v-col>
          <v-slider v-model="fontSize"
            :label="`Font size ${fontSize}`"
            step="1"
            min="10" max="30"
            tick-size="5"
            ></v-slider>
        </v-col>
      </v-row>
    </v-container>

    <v-col>
      <v-tabs v-model="tab"
        class="mb-3"
      >
        <v-tab key="tabHints">Translate with hints</v-tab>
        <v-tab key="tabShowT">Show translate</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab"
        class="px-4"
      >
        <v-tab-item key="tabHints">
          <div v-for="(paragraph, i) in part.content"
            :key="`par1${i}`"
          >
            <div v-for="(sentence, y) in paragraph.sentences"
              :key="`par1${i}sen1${y}`"
            >
              <p :style="textStyle">
                {{ sentence.origText }}
                <v-icon @click="toggleVisibility(i, y)"
                  :size="fontSize"
                >mdi-help-circle-outline</v-icon>
                <br>
                <span v-show="getVisibilityFlag(i, y).value"
                  class="green--text"
                >
                  {{ sentence.transText }}
                </span>
              </p>
            </div>
          </div>
        </v-tab-item>

        <v-tab-item key="tabShowT">
          <div v-for="(paragraph, i) in part.content"
            :key="`par2${i}`"
          >
            <div v-for="(sentence, y) in paragraph.sentences"
              :key="`par2${i}sen1${y}`"
            >
             <v-row :style="textStyle">
                <v-col xs="6">
                  {{ sentence.origText }}
                </v-col>

                <v-col xs="6">
                  {{ sentence.transText }}
                </v-col>
             </v-row>
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-col>

    <book-words :words="part.words"></book-words>
  </v-card>

  
</template>

<script>
import BookWords from './Words'

export default {
  components: {
    BookWords
  },

  props: {
    'part': {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      tab: null,
      visibilityKeys: [],
      fontSize: 18
    }
  },

  computed: {
    textStyle() {
      return {fontSize: this.fontSize + 'px'}
    }
  },
  
  created() {
    this.part.content.forEach((content, i) => {
      content.sentences.forEach((sentence, y) => {
        this.visibilityKeys.push({
          key: `${i}${y}`,
          value: false
        })
      })
    })
  },

  methods: {
    getVisibilityFlag(i, y) {
      return this.visibilityKeys.find(k => k.key === `${i}${y}`)
    },

    toggleVisibility(i, y) {
      let flag = this.getVisibilityFlag(i, y)
      flag.value = !flag.value
    }
  }
}
</script>