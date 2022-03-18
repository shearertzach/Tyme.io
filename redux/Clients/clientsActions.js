import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore'
import { auth, db } from '../../firebase'

export const ADD_CLIENT_BEGIN = 'ADD_CLIENT_BEGIN'
export const ADD_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS'
export const ADD_CLIENT_FAILURE = 'ADD_CLIENT_FAILURE'

export const REMOVE_CLIENT_BEGIN = 'REMOVE_CLIENT_BEGIN'
export const REMOVE_CLIENT_SUCCESS = 'REMOVE_CLIENT_SUCCESS'
export const REMOVE_CLIENT_FAILURE = 'REMOVE_CLIENT_FAILURE'

export const addClient = (clientName, uid, prevClients) => {
  return async (dispatch) => {
    try {
      dispatch(addClientBegin())
      if (prevClients.length >= 10) {
        dispatch(addClientFailure('Max amount of clients reached.'))
      } else {
        const userDocRef = doc(db, 'users', uid)
        await updateDoc(userDocRef, {
          clients: [...prevClients, clientName],
        })
        dispatch(addClientSuccess())
      }
    } catch (e) {
      console.log(e)
      dispatch(addClientFailure(e))
    }
  }
}

export const removeClient = (clientName, uid, prevClients) => {
  return async (dispatch) => {
    try {
      dispatch(addClientBegin())
      const newClients = prevClients.filter((c) => c !== clientName)
      const userDocRef = doc(db, 'users', uid)
      await updateDoc(userDocRef, {
        clients: newClients,
      })
      dispatch(addClientSuccess())
    } catch (e) {
      console.log(e)
      dispatch(addClientFailure(e))
    }
  }
}

export const addClientBegin = () => ({
  type: ADD_CLIENT_BEGIN,
})

export const addClientSuccess = () => ({
  type: ADD_CLIENT_SUCCESS,
})

export const addClientFailure = (err) => ({
  type: ADD_CLIENT_FAILURE,
  payload: err,
})

export const removeClientBegin = () => ({
  type: REMOVE_CLIENT_BEGIN,
})

export const removeClientSuccess = () => ({
  type: REMOVE_CLIENT_SUCCESS,
})

export const removeClientFailure = (err) => ({
  type: REMOVE_CLIENT_FAILURE,
  payload: err,
})
