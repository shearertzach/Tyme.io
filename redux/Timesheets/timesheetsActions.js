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

export const TIMESHEET_FETCH_BEGIN = 'TIMESHEET_FETCH_BEGIN'
export const TIMESHEET_FETCH_SUCCESS = 'TIMESHEET_FETCH_SUCCESS'
export const TIMESHEET_FETCH_FAILURE = 'TIMESHEET_FETCH_FAILURE'

export const fetchTimesheets = (uid) => {
  return async (dispatch) => {
    try {
      dispatch(fetchTimesheetsBegin())
      const sheets = []
      const collectionRef = collection(db, 'timesheets')
      const q = query(collectionRef, where('user_id', '==', uid))
      const snapshot = await getDocs(q)
      snapshot.forEach((doc) => {
        sheets.push(doc.data())
      })
      dispatch(fetchTimesheetsSuccess(sheets))
    } catch (e) {
      dispatch(fetchTimesheetsFailure(e))
    }
  }
}

export const fetchTimesheetsBegin = () => ({
  type: TIMESHEET_FETCH_BEGIN,
})

export const fetchTimesheetsSuccess = (data) => ({
  type: TIMESHEET_FETCH_SUCCESS,
  payload: data,
})

export const fetchTimesheetsFailure = (err) => ({
  type: TIMESHEET_FETCH_FAILURE,
  payload: err,
})
