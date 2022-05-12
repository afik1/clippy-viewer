<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> This is the default header! </slot>
          <IconButton
            class="close-btn"
            :color="'whitesmoke'"
            :iconName="'close'"
            @click="close"
          >
          </IconButton>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body"> This is the default body! </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconButton from '@/components/IconButton.vue'

export default defineComponent({
  components: { IconButton },
  methods: {
    close() {
      this.$emit('close')
    },
  },
})
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  margin-left: 20rem;
  max-width: 60%;
}

.modal-header {
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;
}

.close-btn {
  justify-self: flex-end;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #555;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}

.modal-body {
  position: relative;
  padding: 3rem 2rem 3rem 2rem;
  font-size: 2.8rem;
  line-height: 1.3;
  word-spacing: 0.1rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.4s ease;
}
</style>
