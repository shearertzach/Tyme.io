import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import { auth, db } from '../../firebase'

export const SIGN_IN_WITH_PROVIDER_BEGIN = 'SIGN_IN_WITH_PROVIDER_BEGIN'
export const SIGN_IN_WITH_PROVIDER_SUCCESS = 'SIGN_IN_WITH_PROVIDER_SUCCESS'
export const SIGN_IN_WITH_PROVIDER_FAILURE = 'SIGN_IN_WITH_PROVIDER_FAILURE'
export const SIGN_OUT_OF_PROVIDER = 'SIGN_OUT_OF_PROVIDER'
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

export const signIn = () => {
  return async (dispatch) => {
    try {
      dispatch(signInWithProviderBegin())
      const signInRef = await signInWithPopup(auth, new GoogleAuthProvider())
      const user = signInRef.user
      const userDocumentRef = doc(db, 'users', user.uid)
      const userDocument = await getDoc(userDocumentRef)
      const userData = userDocument.data()
      if (userDocument.exists()) {
        dispatch(signInWithProviderSuccess(userData))
      } else {
        const data = {
          user_id: user.uid,
          clients: [],
          clocked_info: {
            client_name: null,
            clocked_in: false,
            time_clocked_in: null,
          },
          email: user.email,
          name: user.displayName,
        }
        await setDoc(doc(db, 'users', user.uid), data)
        dispatch(signInWithProviderSuccess(data))
      }
    } catch (e) {
      dispatch(signInWithProviderFailure(e))
    }
  }
}

export const updateUser = (doc) => {
  return (dispatch) => {
    dispatch(updateUserInfo(doc.data()))
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

export const updateUserInfo = (userInfo) => ({
  type: UPDATE_USER_INFO,
  payload: userInfo,
})

export const signOut = () => ({
  type: SIGN_OUT_OF_PROVIDER,
})
