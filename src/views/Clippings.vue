<template>
  <div class="container">
    <div class="tool-bar">
      <div class="header">
        {{ selectedBook.bookName }}
      </div>
      <div class="tool-bar-actions">
        <IconButton
          :color="'whitesmoke'"
          :iconName="isSortAscending ? 'up-arrow' : 'down-arrow'"
          @click="isSortAscending = !isSortAscending"
        ></IconButton>
        <IconButton
          :color="'whitesmoke'"
          :iconName="gridIconNames[currentViewIndex]"
          @click="changeGrid()"
        ></IconButton>
        <!-- <select class="form-control" @change="changeJobTitle($event)">
          <option :value="sortTypes.DATE" selected disabled>Date</option>
        </select> -->
      </div>
    </div>
    <div :class="[gridIconNames[currentViewIndex], 'clippings']">
      <Clipping
        v-for="(clipping, key) in sortedClippings"
        :key="key"
        :clipping="clipping"
        @click="displayClipping(clipping.text)"
      ></Clipping>
    </div>
    <Popup class="popup" v-show="isModalVisible" @close="closePopup">
      <template v-slot:header>{{ selectedBook.bookName }}</template>
      <template v-slot:body> {{ currentClipping }} </template>
    </Popup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import Clipping from '@/components/Clipping.vue'
import IconButton from '@/components/IconButton.vue'
import Popup from '@/components/Popup.vue'
import { Clipping as ClippingInterface, SortTypes } from '@/store/interfaces'

export default defineComponent({
  components: {
    Clipping,
    IconButton,
    Popup,
  },
  data() {
    return {
      gridIconNames: ['grid-1', 'grid-2', 'grid-3'],
      currentViewIndex: 2,
      isModalVisible: false,
      currentClipping: '',
      isSortAscending: true,
      // sortType: SortTypes,
    }
  },
  methods: {
    changeGrid() {
      if (this.currentViewIndex === 2) this.currentViewIndex = 0
      else this.currentViewIndex = this.currentViewIndex + 1
    },
    // changeSortType(event: any) {
    //   this.sortType = event.target.options[event.target.options.selectedIndex].text
    // },
    displayClipping(text: string) {
      this.currentClipping = text
      this.showPopup()
    },
    showPopup() {
      this.isModalVisible = true
    },
    closePopup() {
      this.isModalVisible = false
    },
  },
  computed: {
    ...mapState('library', ['selectedBook']),
    sortedClippings(): ClippingInterface[] {
      let sortedClippings = this.selectedBook.clippings

      // currently only by date so no select menu
      // switch (this.sortType) {
      //   case sortTypes.DATE:
      //     sortedClippings = sortedClippings.sort(
      //       (a: ClippingInterface, b: ClippingInterface) =>
      //         a.details.date.valueOf() - b.details.date.valueOf()
      //     )
      //     break
      // }

      if (this.isSortAscending) {
        return sortedClippings.sort(
          (a: ClippingInterface, b: ClippingInterface) =>
            a.details.date.valueOf() - b.details.date.valueOf()
        )
      } else {
        return sortedClippings
          .sort(
            (a: ClippingInterface, b: ClippingInterface) =>
              a.details.date.valueOf() - b.details.date.valueOf()
          )
          .reverse()
      }
    },
  },
})
</script>

<style scoped>
.tool-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding: 1.5rem 2rem 1.5rem 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: lightgray;
}

.header {
  display: flex;
  align-items: center;
  font-size: 3.2rem;
  font-weight: 700;
  color: #555;
  margin: 0 0 0 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 4rem;
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
  background-color: #ebecf0;
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
  border-bottom-right-radius: 6px;
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
