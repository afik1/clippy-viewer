<template>
  <button class="btn" @click="showPopup = true">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style>
.btn {
  border-radius: 20px;
  padding: 1rem 3rem 1rem 3rem;
  background-color: #ec9a9a;
  border: 0;
  box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
