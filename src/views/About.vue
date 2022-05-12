<template>
  <div class="container">
    <div class="tool-bar">
      <div class="header">About Page</div>
    </div>
    <div class="about-paragraph">
      This project was made to help View your clippings<br />
      in an orgenized library and enjoy the same <br />highlights again and
      again on mobile and pc
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
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

.about-paragraph {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebecf0;
  line-height: 1.2;
  width: auto;
  height: 100%;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 5rem;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
}
</style>
