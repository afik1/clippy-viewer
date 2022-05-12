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
  background-color: #fff;
  box-shadow: 1px 2px 10px 1px #99a3b340;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.4s ease-out;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 2rem;
  justify-content: flex-start;
}

.clipping-container:hover {
  transform: translate(0, -4px);
}

.clipping-text {
  font-size: 2.2rem;
  line-height: 1.3;
  word-spacing: 0.1rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
