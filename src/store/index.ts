import { createStore } from 'vuex'
// import {  Book } from './interfaces'
import AlertModule from './modules/alertModule'
import LibraryModule from './modules/libraryModule'

export default createStore({
  modules: {
    alert: AlertModule,
    library: LibraryModule,
  },
})
