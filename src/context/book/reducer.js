// TODO: import actions and implement reducer for each action
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS
} from './actions'

export default function reducer(prevState, {action, payload}) {
  switch(action) {
    case ADD_BOOK:
      const addFaveBook = [...prevState.favoriteBooks, payload]
      saveToLocalStorage(addFaveBook)
      return {...prevState, favoriteBooks: [...prevState.favoriteBooks, payload]}
    case REMOVE_BOOK:
      const removeFaveBook = prevState.favoriteBooks.filter(favebook => favebook.id !== payload)
      saveToLocalStorage(removeFaveBook)
      return {...prevState, favoriteBooks: removeFaveBook}
    case SEARCH_BOOKS:
      return {...prevState, bookSearchResults: payload}
    default: 
      return prevState
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}