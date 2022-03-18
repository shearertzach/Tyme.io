import {
  ADD_CLIENT_BEGIN,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAILURE,
  REMOVE_CLIENT_BEGIN,
  REMOVE_CLIENT_SUCCESS,
  REMOVE_CLIENT_FAILURE,
} from './clientsActions'

const INITIAL_STATE = {
  loading: false,
  error: null,
}

const clientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CLIENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case ADD_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      }
    case ADD_CLIENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case REMOVE_CLIENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case REMOVE_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      }
    case REMOVE_CLIENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default clientsReducer
