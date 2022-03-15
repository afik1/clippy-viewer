<template>
  <div class="input-container">
    <button class="btn" @click="trigger">
      <TextFileReader @file-read="parseFile"><slot></slot></TextFileReader>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'vuex'
import { parseClippingsFile, mergeLibrarys } from '../utils'
import { Book } from '@/store/interfaces'
import TextFileReader from '@/components/TextFileReader.vue'

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
    ...mapActions(['library/setBooksList', 'alert/showErrorMessage']),
    parseFile(fileText: string) {
      let booksList: Array<Book> = []
      booksList = parseClippingsFile(fileText)

      if (Array.isArray(booksList) && booksList.length > 0) {
        if (!this.resetLibrary) {
          booksList = mergeLibrarys(this.booksList, booksList)
        }

        this['library/setBooksList'](booksList)
        this.$emit('parseFinished')
      } else {
        this['alert/showErrorMessage']('file is empty :(')
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

.btn {
  border-radius: 20px;
  padding: 1rem 3rem 1rem 3rem;
  color: rgb(49, 49, 49);
  font-family: 'Rubik', sans-serif;
  border: 0;
  box-shadow: 0 0.2rem 1rem 0.1rem rgba(80, 80, 80, 0.2);
  cursor: pointer;
  height: fit-content;
  transition: 0.5s;
}

.btn:hover {
  transform: translateY(-2px);
}
</style>
