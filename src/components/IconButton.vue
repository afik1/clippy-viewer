<template>
  <button class="icon-btn" :style="{ 'background-color': color }">
    <img
      class="link-icon"
      :src="require('../assets/images/' + iconName + '.svg')"
      alt="icon for toolbar action"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String,
      default: '#ffffff',
    },
    iconName: {
      type: String,
    },
  },
})
</script>

<style scoped>
.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: rgb(49, 49, 49);
  font-family: 'Rubik', sans-serif;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0.2rem 1rem 0.1rem rgba(80, 80, 80, 0.2);
  cursor: pointer;
  height: fit-content;
  transition: 0.5s;
}

.icon-btn:hover {
  background-color: aquamarine;
}

.link-icon {
  width: 2rem;
  fill: whitesmoke;
  transition: transform 0.4s ease-out;
}
</style>
