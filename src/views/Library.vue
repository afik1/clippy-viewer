<template>
  <div class="container">
    <div class="header">Your Library</div>
    <div class="books">
      <div class="grid-item" v-for="(book, key) in booksList" :key="key">
        <Book :book="book"></Book>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import Book from '@/components/Book.vue'

export default defineComponent({
  components: {
    Book,
  },
  computed: {
    ...mapState('library', ['booksList']),
  },
})
</script>

<style scoped>
.header {
  font-size: 4.8rem;
  font-weight: 700;
  color: #555;
  margin: 0 0 0 2rem;
}

.container {
  padding: 5rem 1rem 0 1rem;
  width: 150rem;
}

.books {
  background-color: lightslategray;
  width: auto;
  height: auto;
  border-radius: 6px;
  padding: 3rem;
  margin: 5rem 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3rem;
  justify-content: space-evenly;
  align-items: center;
}
.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
