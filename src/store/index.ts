import { createStore } from 'vuex'
import AlertModule from './modules/alertModule'
import LibraryModule from './modules/libraryModule'

export default createStore({
  modules: {
    alert: AlertModule,
    library: LibraryModule,
  },
})
