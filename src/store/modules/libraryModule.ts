import { LibraryModuleState, Book } from '../interfaces'

const LibraryModule = {
  namespaced: true,
  state: {
    booksList: [] as Array<Book>,
    selectedBook: {} as Book,
  } as LibraryModuleState,
  mutations: {
    SET_BOOKS(state: LibraryModuleState, books: Array<Book>) {
      state.booksList = books
    },
    SET_CURRENT_BOOK(state: LibraryModuleState, book: Book) {
      console.log(book)
      state.selectedBook = book
    },
    RESET_LIBRARY(state: LibraryModuleState) {
      state.booksList = [] as Array<Book>
      state.selectedBook = {} as Book
    },
  },
  actions: {
    setBooksList(context: any, booksList: Array<Book>) {
      context.commit('SET_BOOKS', booksList)
    },
    setCurrentBook(context: any, currentBook: Book) {
      context.commit('SET_CURRENT_BOOK', currentBook)
    },
  },
}

export default LibraryModule
