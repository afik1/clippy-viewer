<template>
  <div class="app-container">
    <NavigationBar v-if="showNavigation()"></NavigationBar>
    <main :class="[showNavigation() ? 'navigation-displayed' : '', 'app-main']">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from '../src/components/NavigationBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar,
  },
  data() {
    return {
      routesBlackList: ['Opening'] as Array<string>,
    }
  },
  methods: {
    showNavigation(): boolean {
      return !this.routesBlackList.includes(this.currentRoute)
    },
  },
  computed: {
    currentRoute() {
      return this.$route.name as string
    },
  },
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  background-color: #b6fbfd;
}

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');

body {
  font-family: 'Rubik', sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #555;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-main {
  font-size: 18px;
  height: 100%;
}

.app-container {
  height: 100%;
}

.navigation-displayed {
  margin-left: 20rem;
}
</style>
