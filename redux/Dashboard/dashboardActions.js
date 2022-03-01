import { auth, db } from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const FETCH_USER_DATA_BEGIN = 'FETCH_USER_DATA_BEGIN'
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS'
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE'

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
