const initialState = {
  products: [],
  fetching: false,
  fetched: false,
  error: null,
}
export default function reducer (state = initialState, actions) {
//  console.log('reducer', actions.payload)
  switch (actions.type) {
    case "FETCH_PRODUCTS_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_PRODUCTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        products: actions.payload
      }
    }
    case "FETCH_PRODUCTS_REJECTED": {
      return {...state,
        fetching: false,
        error: actions.payload}
    }
    default:
      return state
  }
};
