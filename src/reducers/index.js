import { combineReducers } from 'redux'
import productsReducers from './productsReducers'

const rootReducer = combineReducers({
  products: productsReducers,
})

export default rootReducer
