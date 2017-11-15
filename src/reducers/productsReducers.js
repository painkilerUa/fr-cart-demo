export default function reducer (state={}, actions) {
  switch (actions.type) {
    case "FETCH_USERS_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: actions.payload
      }
    }
    case "FETCH_USERS_REJECTED": {
      return {...state, fetching: false, error: actions.payload}
    }
    default:
      return state
  }
};
