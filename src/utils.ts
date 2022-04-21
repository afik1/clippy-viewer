import { Book, ClippingDetails, Clipping } from '@/store/interfaces'

const compareNames = (
  firstObject: Array<string>,
  secondObject: Array<string>
) => {
  const firstName = firstObject[0].toUpperCase()
  const secondName = secondObject[0].toUpperCase()

  if (firstName < secondName) {
    return -1
  }
  if (firstName > secondName) {
    return 1
  }

  return 0
}

const parseDetails = (details: string): ClippingDetails => {
  const detailsArray: Array<string> = details.split('|')
  detailsArray[0] = detailsArray[0].replace('- Your Highlight on page ', '')
  detailsArray[0] = detailsArray[0].slice(0, -1)
  detailsArray[1] = detailsArray[1].replace(' Location ', '')
  detailsArray[1] = detailsArray[1].slice(0, -1)
  detailsArray[2] = detailsArray[2].replace(' Added on ', '')

  return {
    date: new Date(detailsArray[2]),
    page: detailsArray[0],
    rows: detailsArray[1],
  } as ClippingDetails
}

const removeEmpty = (clippingsArray: Array<string>) => {
  // Creating array from clippings file and sorting it
  let parsedClippingsArrray = clippingsArray.map((clipping: string) => {
    const parsedClipping = clipping.split('\r\n') as Array<string>
    return parsedClipping.filter((detail) => detail != '')
  })

  parsedClippingsArrray.pop()
  parsedClippingsArrray = parsedClippingsArrray.filter(
    (clipping) =>
      !clipping[0].includes('Your Clippings') &&
      typeof clipping[2] !== 'undefined'
  )
  parsedClippingsArrray.sort(compareNames)

  return parsedClippingsArrray
}

export function parseClippingsFile(text: string): Array<Book> {
  const parsedText = removeEmpty(text.split('=========='))
  const booksArray = [] as Array<Book>
  let book = {} as Book
  let currBookName = ''
  let currentDetails = {} as ClippingDetails

  if (parsedText.length >= 1) {
    // Selecting first book in list
    currBookName = parsedText[0][0]
    book.bookName = currBookName
    book.clippings = []
    currentDetails = parseDetails(parsedText[0][1])
    book.clippings.push({
      details: currentDetails,
      text: parsedText[0][2],
    })

    // Iterating over array and saving all the clippings in order
    for (let index = 1; index < parsedText.length; index++) {
      if (parsedText[index][0] !== currBookName) {
        booksArray.push(book)
        currBookName = parsedText[index][0]
        book = {} as Book
        book.bookName = currBookName
        book.clippings = []
      }

      try {
        currentDetails = parseDetails(parsedText[index][1])

        book.clippings.push({
          details: currentDetails,
          text: parsedText[index][2],
        } as Clipping)
      } catch (exception) {
        console.log('an error occured in parse detail')
      }
    }

    booksArray.push(book)
  }

  return booksArray
}

export function createClippingsFile(clippingsParsed: Array<Book>): void {
  console.log(clippingsParsed)
}

export function mergeLibrarys(
  originalLibrary: Array<Book>,
  newLibrary: Array<Book>
): Array<Book> {
  let foundBook: Book
  let foundClipping

  newLibrary.forEach((book: Book) => {
    foundBook = originalLibrary.find(
      (originalBook: Book) => originalBook.bookName === book.bookName
    ) as Book

    if (foundBook === undefined) {
      originalLibrary.push(book)
    } else {
      book.clippings.forEach((clipping) => {
        foundClipping = foundBook.clippings.find(
          (originalClipping) => clipping.text === originalClipping.text
        )

        if (foundClipping === undefined) {
          foundBook.clippings.push(clipping)
        }
      })
    }
  })

  return originalLibrary
}
