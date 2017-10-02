import { FETCH_TITLES, FETCH_MOVIE } from './actions';

export default function(state={ titles: [] }, action) {
  switch(action.type) {
    case FETCH_TITLES:
      if (action.payload.status === 200) {
        return Object.assign({}, {
          titles: action.payload.data
        })
      }
      return state;
      break;

    case FETCH_MOVIE:
      if (action.payload.status === 200) {
        return Object.assign({}, {
          locations: action.payload.data
        })
      }
      break;

    default:
      return state
  }
}
