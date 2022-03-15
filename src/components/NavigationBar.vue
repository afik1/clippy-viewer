<template>
  <div class="sidebar">
    <div class="user"></div>
    <div class="link" v-for="(route, index) in routes" :key="index">
      <img
        class="link-icon"
        :src="require('../assets/images/' + route.routeIcon)"
        alt="icon for link"
      />
      <div class="link-text" @click="navigateTo(route.routeName)">
        {{ route.routeTitle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      routes: [
        {
          routeTitle: 'Your Library',
          routeName: 'Library',
          routeIcon: 'library-icon.svg',
        },
        {
          routeTitle: 'About Page',
          routeName: 'About',
          routeIcon: 'about-icon.svg',
        },
      ],
    }
  },
  methods: {
    navigateTo(routeName: string) {
      this.$router.push({ name: routeName })
    },
  },
})
</script>

<style scoped>
.sidebar {
  height: 100%;
  width: 20rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  overflow-x: hidden;
  padding: 5rem 1rem 1rem;
  background-color: #457b9d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.2);
}

.link {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 2rem;
  border: 3px solid whitesmoke;
  border-radius: 6px;
}

.link-text {
  padding: 1rem;
  font-size: 2rem;
  font-weight: 500;
  display: block;
  cursor: pointer;
  color: whitesmoke;
  text-align: center;
}

.link-text:hover {
  color: black;
}

.link-icon {
  width: 3.2rem;
  fill: whitesmoke;
}
</style>
