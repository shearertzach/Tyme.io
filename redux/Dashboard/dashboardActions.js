import { db } from '../../firebase'
import {
  collection,
  doc,
  getDocs,
  query,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore'

export const FETCH_USER_DATA_BEGIN = 'FETCH_USER_DATA_BEGIN'
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS'
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE'

export const CLOCK_IN_BEGIN = 'CLOCK_IN_BEGIN'
export const CLOCK_IN_SUCCESS = 'CLOCK_IN_SUCCESS'
export const CLOCK_IN_FAILURE = 'CLOCK_IN_FAILURE'

export const fetchData = (uid) => {
  return (dispatch) => {
    dispatch(fetchUserDataBegin())
    const ref = collection(db, 'timesheets')
    const q = query(ref, where('account_id', '==', uid))
    let timesheets = []
    getDocs(q)
      .then((snapshot) => {
        snapshot.forEach((doc) => (timesheets = [...timesheets, doc.data()]))
        dispatch(fetchUserDataSuccess(timesheets))
      })
      .catch((err) => dispatch(fetchUserDataFailure(err)))
  }
}

export const clockIn = (uid, client) => {
  return (dispatch) => {
    dispatch(clockInBegin())
    updateDoc(doc(db, 'users', uid), {
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

export const fetchUserDataBegin = () => ({
  type: FETCH_USER_DATA_BEGIN,
})
export const fetchUserDataSuccess = (data) => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: data,
})
export const fetchUserDataFailure = (err) => ({
  type: FETCH_USER_DATA_FAILURE,
  payload: err,
})

export const clockInBegin = () => ({
  type: CLOCK_IN_BEGIN,
})
export const clockInSuccess = () => ({
  type: CLOCK_IN_SUCCESS,
})
export const clockInFailure = () => ({
  type: CLOCK_IN_FAILURE,
})
