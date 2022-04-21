export interface Book {
  bookName: string
  clippings: Array<Clipping>
}

export interface Clipping {
  text: string
  details: ClippingDetails
}

export interface ClippingDetails {
  date: Date
  page: string
  rows: string
}

export enum AlertTypes {
  ERROR,
  SUCCESS,
  WARNING,
}

export interface Alert {
  alertText: string
  alertType: AlertTypes
}

export interface AlertModuleState {
  showAlert: boolean
  alertText: string
  alertType: AlertTypes
}

export interface LibraryModuleState {
  selectedBook: Book
  booksList: Array<Book>
}
