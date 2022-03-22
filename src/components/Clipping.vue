<template>
  <div class="clipping-container">
    <div class="clipping-text">
      {{ clipping.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Clipping } from '@/store/interfaces'

export default defineComponent({
  props: {
    clipping: {
      type: Object as () => Clipping,
      required: true,
    },
  },
})
</script>

<style scoped>
.clipping-container {
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;
  transition: transform 0.4s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.clipping-container:hover {
  transform: translate(0, -4px);
}

.clipping-text {
  font-size: 2.2rem;
  line-height: 1.15;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
