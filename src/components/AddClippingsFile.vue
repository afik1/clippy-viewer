<template>
  <div class="input-container">
    <div class="input-btn">
      <TextFileReader @file-read="parseFile"><slot></slot></TextFileReader>
    </div>
  </div>
</template>

<script lang="ts">
import { parseClippingsFile, mergeLibrarys } from '../utils'
import { defineComponent } from 'vue'
import { Book } from '@/store/interfaces'
import TextFileReader from '@/components/TextFileReader.vue'
import { mapState, mapActions } from 'vuex'

export default defineComponent({
  name: 'AddClippingsFile',
  props: {
    resetLibrary: Boolean,
  },
  components: {
    TextFileReader,
  },
  computed: {
    ...mapState(['booksList']),
  },
  methods: {
    ...mapActions(['setBooksList']),
    parseFile(fileText: string) {
      let booksList: Array<Book> = []

      if (this.checkFileValidity()) {
        booksList = parseClippingsFile(fileText)

        if (!this.resetLibrary) {
          booksList = mergeLibrarys(this.booksList, booksList)
        }

        this.setBooksList(booksList)
        this.$emit('parseFinished')

        // this.$store.dispatch(
        //   'showErrorMessage',
        //   'Sorry error while parsing file :))'
        // )
      }
    },
    checkFileValidity() {
      return true
    },
  },
})
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-btn {
  display: block;
  position: relative;
  width: 180px;
  height: 40px;
  border-radius: 25px;
  background: linear-gradient(40deg, #f0727c, #f3a846);
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d3557;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}

.input-btn:hover,
.input-btn:focus {
  transform: scale(1.02);
}

.input-btn:focus {
  outline: 1px solid #000;
  outline: -webkit-focus-ring-color auto 2px;
}
</style>
