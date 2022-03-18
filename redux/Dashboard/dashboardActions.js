import { db } from '../../firebase'
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore'

export const CLOCK_IN_BEGIN = 'CLOCK_IN_BEGIN'
export const CLOCK_IN_SUCCESS = 'CLOCK_IN_SUCCESS'
export const CLOCK_IN_FAILURE = 'CLOCK_IN_FAILURE'

export const CLOCK_OUT_BEGIN = 'CLOCK_OUT_BEGIN'
export const CLOCK_OUT_SUCCESS = 'CLOCK_OUT_SUCCESS'
export const CLOCK_OUT_FAILURE = 'CLOCK_OUT_FAILURE'

export const clockIn = (userId, client) => {
  return (dispatch) => {
    dispatch(clockInBegin())
    updateDoc(doc(db, 'users', userId), {
      clocked_info: {
        client_name: client,
        clocked_in: true,
        time_clocked_in: Timestamp.fromDate(new Date()),
      },
    })
      .then(() => dispatch(clockInSuccess()))
      .catch(() => dispatch(clockInFailure()))
  }
}

export const clockOut = (userId, client, timeIn) => {
  return (dispatch) => {
    dispatch(clockOutBegin())
    updateDoc(doc(db, 'users', userId), {
      clocked_info: {
        client_name: null,
        clocked_in: false,
        time_clocked_in: false,
      },
    })
      .then(() => {
        addDoc(collection(db, 'timesheets'), {
          user_id: userId,
          client: client,
          time_clocked_in: timeIn,
          time_clocked_out: Timestamp.fromDate(new Date()),
          duration:
            (Timestamp.fromDate(new Date()).seconds - timeIn.seconds) * 1000,
        })
          .then(() => dispatch(clockOutSuccess()))
          .catch(() => dispatch(clockOutFailure()))
      })
      .catch(() => dispatch(clockOutFailure()))
  }
}

export const clockInBegin = () => ({
  type: CLOCK_IN_BEGIN,
})
export const clockInSuccess = () => ({
  type: CLOCK_IN_SUCCESS,
})
export const clockInFailure = () => ({
  type: CLOCK_IN_FAILURE,
})

export const clockOutBegin = () => ({
  type: CLOCK_OUT_BEGIN,
})
export const clockOutSuccess = () => ({
  type: CLOCK_OUT_SUCCESS,
})
export const clockOutFailure = () => ({
  type: CLOCK_OUT_FAILURE,
})
