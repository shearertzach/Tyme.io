import {
  TIMESHEET_FETCH_BEGIN,
  TIMESHEET_FETCH_SUCCESS,
  TIMESHEET_FETCH_FAILURE,
} from './timesheetsActions'

const INITIAL_STATE = {
  sheets: [],
  loading: false,
  error: null,
}

const timesheetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIMESHEET_FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case TIMESHEET_FETCH_SUCCESS:
      return {
        ...state,
        sheets: action.payload,
        loading: false,
        error: null,
      }
    case TIMESHEET_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default timesheetsReducer
