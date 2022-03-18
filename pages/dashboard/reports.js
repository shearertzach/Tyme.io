import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Loader from '../../components/Loader'
import { useRouter } from 'next/router'
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import { doc, onSnapshot } from 'firebase/firestore'
import { updateUser } from '../../redux/Auth/authActions'
import { db } from '../../firebase'
import Timesheets from '../../components/Dashboard/Timesheets/Timesheets'
import { fetchTimesheets } from '../../redux/Timesheets/timesheetsActions'

function Reports({ user, loading, error, sheets }) {
  const dispatch = useDispatch()
  const router = useRouter()

  if (!user) router.push('/')

  console.log(sheets)

  useEffect(() => {
    dispatch(fetchTimesheets(user.user_id))
  }, [])

  return (
    <div className="ml-16 p-4 xl:ml-72">
      {loading && <Loader />}
      {!loading && (
        <>
          <Timesheets user={user} sheets={sheets} />
          <Sidebar />
        </>
      )}
    </div>
  )
}

function mapStateToProps(state) {
  const { timesheets, auth } = state
  const { user } = auth
  const { loading, error, sheets } = timesheets
  return { user, loading, error, sheets }
}

export default connect(mapStateToProps)(Reports)
