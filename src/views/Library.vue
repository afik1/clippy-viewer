<template>
  <div class="container">
    <div class="tool-bar"><div class="header">Your Library</div></div>
    <div class="books">
      <Book
        v-for="(book, key) in booksList"
        :key="key"
        :book="book"
        @click="viewClipping(book)"
      ></Book>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'vuex'
import Book from '@/components/Book.vue'
import { Book as BookInterface } from '@/store/interfaces'

export default defineComponent({
  components: {
    Book,
  },
  computed: {
    ...mapState('library', ['booksList']),
  },
  methods: {
    ...mapActions(['library/setCurrentBook']),
    viewClipping(book: BookInterface): void {
      this['library/setCurrentBook'](book)
      this.$router.push({ name: 'ViewClippings' })
    },
  },
})
</script>

<style scoped>
.tool-bar {
  width: 100%;
  height: fit-content;
  padding: 1.5rem 0 1.5rem 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: lightgray;
}

.header {
  font-size: 3.2rem;
  font-weight: 700;
  color: #555;
  margin: 0 0 0 2rem;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  padding: 2rem 2.2rem 2rem 2.2rem;
}

.books {
  background-color: lightslategray;
  width: auto;
  height: 100%;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3rem;
  column-gap: 3rem;
  justify-content: space-evenly;
  align-items: center;
}

.books::-webkit-scrollbar {
  width: 10px;
}

.books::-webkit-scrollbar-track {
  background: rgb(122, 122, 122);
}

.books::-webkit-scrollbar-thumb {
  background-color: lightgray;
  border-radius: 20px;
  border: 3px solid lightgray;
}
</style>
