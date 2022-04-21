<template>
  <div class="book-container">
    <div class="book-header">{{ book.bookName }}</div>
    <div class="divider"></div>
    <div class="book-stats">
      <div class="book-stat">{{ book.clippings.length }} Clippings</div>
      <div class="book-stat">Last updated - {{ latestClipping }}</div>
      <!-- <div class="book-stat">Get from api?</div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '@/store/interfaces'

export default defineComponent({
  props: {
    book: {
      type: Object as () => Book,
      required: true,
    },
  },
  computed: {
    latestClipping(): string {
      let sortedClippings = this.book.clippings

      sortedClippings = sortedClippings
        .sort((a, b) => a.details.date.valueOf() - b.details.date.valueOf())
        .reverse()

      return sortedClippings[0].details.date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    },
  },
})
</script>

<style scoped>
.book-container {
  background-color: #fff;
  box-shadow: 1px 2px 10px 1px #99a3b340;
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.4s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
}

.book-container:hover {
  transform: translate(0, -4px);
}

.divider {
  border-top: 2px solid #555;
  width: 95%;
  margin: 1rem 0 1rem 0;
}

.book-stat {
  color: #555;
  font-weight: 400;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: rgb(160, 177, 188);
  border: 1px solid #555;
}

.book-header {
  font-weight: 700;
  font-size: 2rem;
  color: #555;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 1.8em;
  line-height: 1.8em;
}

.book-stats {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
}
</style>
