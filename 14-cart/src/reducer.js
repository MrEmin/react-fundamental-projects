import {
  CLEAR_ITEMS,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions'
const reducer = (state, action) => {
  if (action.type === CLEAR_ITEMS) {
    return { ...state, cart: new Map() }
  }
  throw new Error(`no matching action type : ${action.type}`)
}

export default reducer
