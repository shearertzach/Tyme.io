import {
  FETCH_USER_DATA_BEGIN,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE,
} from './dashboardActions'

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default dashboardReducer
