import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
// import api from '../middleware/api'
import rootReducer from '../reducers'
import logger from 'redux-logger'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(promise(), logger)
)

export default configureStore
