import {
  SIGN_IN_WITH_PROVIDER_BEGIN,
  SIGN_IN_WITH_PROVIDER_SUCCESS,
  SIGN_IN_WITH_PROVIDER_FAILURE,
  SIGN_OUT_OF_PROVIDER,
  UPDATE_USER_INFO,
} from './authActions'

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_WITH_PROVIDER_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case SIGN_IN_WITH_PROVIDER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
      }
    case SIGN_IN_WITH_PROVIDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case UPDATE_USER_INFO:
      return {
        ...state,
        user: action.payload,
      }
    case SIGN_OUT_OF_PROVIDER:
      return {
        ...state,
        loading: false,
        error: null,
        user: null,
      }
    default:
      return state
  }
}

export default authReducer
