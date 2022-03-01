import { SIGN_IN_WITH_PROVIDER } from './authActions'

const INITIAL_STATE = {
  user: null,
  loading: true,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_WITH_PROVIDER:
      return state
    default:
      return state
  }
}

export default authReducer
