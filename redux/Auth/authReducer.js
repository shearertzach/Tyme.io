import {
  SIGN_IN_WITH_PROVIDER_BEGIN,
  SIGN_IN_WITH_PROVIDER_SUCCESS,
  SIGN_IN_WITH_PROVIDER_FAILURE,
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
        loading: action.payload.loading,
      }
    case SIGN_IN_WITH_PROVIDER_SUCCESS:
      return {
        ...state,
        user: action.payload.userInfo,
        loading: action.payload.loading,
      }
    case SIGN_IN_WITH_PROVIDER_FAILURE:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      }
    default:
      return state
  }
}

export default authReducer
