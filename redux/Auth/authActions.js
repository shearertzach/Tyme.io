import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase'

export const SIGN_IN_WITH_PROVIDER_BEGIN = 'SIGN_IN_WITH_PROVIDER_BEGIN'
export const SIGN_IN_WITH_PROVIDER_SUCCESS = 'SIGN_IN_WITH_PROVIDER_SUCCESS'
export const SIGN_IN_WITH_PROVIDER_FAILURE = 'SIGN_IN_WITH_PROVIDER_FAILURE'

export const signIn = () => {
  return (dispatch) => {
    dispatch(signInWithProviderBegin())
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => dispatch(signInWithProviderSuccess(res.user)))
      .catch((err) => dispatch(signInWithProviderFailure(err)))
  }
}

export const signInWithProviderBegin = () => ({
  type: SIGN_IN_WITH_PROVIDER_BEGIN,
  payload: { loading: true },
})

export const signInWithProviderSuccess = (userInfo) => ({
  type: SIGN_IN_WITH_PROVIDER_SUCCESS,
  payload: { userInfo: userInfo, loading: false },
})

export const signInWithProviderFailure = (err) => ({
  type: SIGN_IN_WITH_PROVIDER_FAILURE,
  payload: { error: err, loading: false },
})
