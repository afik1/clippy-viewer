<template>
  <div class="container">
    <div class="tool-bar">
      <div class="header">
        {{ selectedBook.bookName }}
      </div>
      <div class="tool-bar-actions">
        <IconButton
          :color="'whitesmoke'"
          :iconName="iconNames[currentViewIndex]"
          @click="changeGrid()"
        ></IconButton>
      </div>
    </div>
    <div :class="[iconNames[currentViewIndex], 'clippings']">
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
import IconButton from '@/components/IconButton.vue'

export default defineComponent({
  components: {
    Clipping,
    IconButton,
  },
  data() {
    return {
      iconNames: ['grid-1', 'grid-2', 'grid-3'],
      currentViewIndex: 2,
    }
  },
  methods: {
    changeGrid() {
      if (this.currentViewIndex === 2) this.currentViewIndex = 0
      else this.currentViewIndex = this.currentViewIndex + 1
    },
  },
  computed: {
    ...mapState('library', ['selectedBook']),
  },
})
</script>

<style scoped>
.tool-bar {
  display: flex;
  justify-content: space-between;
  height: fit-content;
  padding: 1.5rem 1rem 1.5rem 0;
  background-color: lightgray;
}

.header {
  font-size: 3.2rem;
  font-weight: 700;
  color: #555;
  margin: 0 0 0 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: calc(100vw - 20rem);
  padding: 2rem 2.2rem 2rem 2.2rem;
}

.clippings {
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
  row-gap: 3rem;
  column-gap: 3rem;
  justify-content: space-evenly;
  align-items: center;
}

.grid-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.clippings::-webkit-scrollbar {
  width: 10px;
}

.clippings::-webkit-scrollbar-track {
  background: rgb(122, 122, 122);
}

.clippings::-webkit-scrollbar-thumb {
  background-color: lightgray;
  border-radius: 20px;
  border: 3px solid lightgray;
}

.tool-bar-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
</style>
