import {
  CLOCK_IN_BEGIN,
  CLOCK_IN_FAILURE,
  CLOCK_IN_SUCCESS,
  CLOCK_OUT_BEGIN,
  CLOCK_OUT_SUCCESS,
  CLOCK_OUT_FAILURE
} from './dashboardActions'

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLOCK_IN_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case CLOCK_IN_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case CLOCK_IN_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case CLOCK_OUT_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case CLOCK_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case CLOCK_OUT_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default dashboardReducer
