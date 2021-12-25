import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import OpeningScreen from '../views/OpeningScreen.vue'
// import About from '../views/About.vue'
// import Library from '../views/Library.vue'
// import ViewClippings from '../views/ViewClippings.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Opening',
    component: OpeningScreen,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About,
  // },
  // {
  //   path: '/library',
  //   name: 'Library',
  //   component: Library,
  // },
  // {
  //   path: '/clippings',
  //   name: 'ViewClippings',
  //   component: ViewClippings,
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
