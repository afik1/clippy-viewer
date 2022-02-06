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
    ...mapActions(['library/setBooksList']),
    parseFile(fileText: string) {
      let booksList: Array<Book> = []

      if (this.checkFileValidity()) {
        booksList = parseClippingsFile(fileText)

        if (!this.resetLibrary) {
          booksList = mergeLibrarys(this.booksList, booksList)
        }

        this['library/setBooksList'](booksList)
        this.$emit('parseFinished')
      } else {
        // this.showErrorMessage('Sorry file format not valid...  :(')
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
  border-radius: 20px;
  padding: 1rem 3rem 1rem 3rem;
  background-color: #ec9a9a;
  border: 0;
  box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  height: fit-content;
  transition: transform 0.2s ease-out;
  font-size: 2.4rem;
  color: rgb(49, 49, 49);
}

.input-btn:hover,
.input-btn:focus {
  transform: scale(1.02);
}
</style>
