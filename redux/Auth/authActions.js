import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { auth, db } from '../../firebase'

export const SIGN_IN_WITH_PROVIDER_BEGIN = 'SIGN_IN_WITH_PROVIDER_BEGIN'
export const SIGN_IN_WITH_PROVIDER_SUCCESS = 'SIGN_IN_WITH_PROVIDER_SUCCESS'
export const SIGN_IN_WITH_PROVIDER_FAILURE = 'SIGN_IN_WITH_PROVIDER_FAILURE'
export const SIGN_OUT_OF_PROVIDER = 'SIGN_OUT_OF_PROVIDER'

export const signIn = () => {
  return (dispatch) => {
    dispatch(signInWithProviderBegin())
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        const ref = collection(db, 'users')
        const q = query(ref, where('account_id', '==', res.user.uid))
        getDocs(q)
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              dispatch(signInWithProviderSuccess(doc.data()))
            })
          })
          .catch((err) => dispatch(signInWithProviderFailure(err)))
      })
      .catch((err) => dispatch(signInWithProviderFailure(err)))
  }
}

export const signInWithProviderBegin = () => ({
  type: SIGN_IN_WITH_PROVIDER_BEGIN,
})

export const signInWithProviderSuccess = (userInfo) => ({
  type: SIGN_IN_WITH_PROVIDER_SUCCESS,
  payload: userInfo,
})

export const signInWithProviderFailure = (err) => ({
  type: SIGN_IN_WITH_PROVIDER_FAILURE,
  payload: err,
})

export const signOut = () => ({
  type: SIGN_OUT_OF_PROVIDER,
})
