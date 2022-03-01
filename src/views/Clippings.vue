<template>
  <div class="container">
    <div class="header">{{ selectedBook.bookName }}</div>
    <div class="tool-bar"></div>
    <div class="clippings">
      <Clipping
        v-for="(clipping, key) in selectedBook.clippings"
        :key="key"
        :clipping="clipping"
      ></Clipping>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import Clipping from '@/components/Clipping.vue'

export default defineComponent({
  components: {
    Clipping,
  },
  computed: {
    ...mapState('library', ['selectedBook']),
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
  padding: 5rem 4rem 1rem 4rem;
}

.clippings {
  background-color: lightslategray;
  width: auto;
  height: auto;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  justify-content: space-evenly;
  align-items: center;
}

.tool-bar {
  width: auto;
  height: 2rem;
  margin: 5rem 0 0 0;
  background-color: whitesmoke;
}
</style>
