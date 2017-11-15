import { combineReducers } from 'redux'
import cart from './cartReducers'

const rootReducer = combineReducers({
  cart,
})

export default rootReducer
