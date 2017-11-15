import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import App from '../App'
import Checkout from '../Checkout'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/checkout" component={Checkout} />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root
