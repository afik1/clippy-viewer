import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import OpeningScreen from '@/views/OpeningScreen.vue'
import Library from '@/views/Library.vue'
import ViewClippings from '@/views/Clippings.vue'
import store from '@/store/index'
// import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Opening',
    component: OpeningScreen,
  },
  {
    path: '/library',
    name: 'Library',
    component: Library,
  },
  {
    path: '/clippings',
    name: 'ViewClippings',
    component: ViewClippings,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About,
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  const state: any = store.state

  if (state.library.booksList.length === 0 && to.path != '/') return '/'
})

export default router
