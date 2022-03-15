<template>
  <button class="btn" :style="{ 'background-color': color }">
    <slot></slot>
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
  },
})
</script>

<style scoped>
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
