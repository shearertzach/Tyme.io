import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import Loader from '../../components/Loader'
import { useRouter } from 'next/router'
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import Clock from '../../components/Dashboard/Clock/Clock'
import { doc, onSnapshot } from 'firebase/firestore'
import { updateUser } from '../../redux/Auth/authActions'
import { db } from '../../firebase'

function Dashboard({ user, loading, error }) {
  const dispatch = useDispatch()
  const router = useRouter()

  if (!user) router.push('/')

  useEffect(() => {
    return onSnapshot(doc(db, 'users', user.doc_id), (doc) => {
      dispatch(updateUser(doc))
    })
  }, [])

  return (
    <div className="ml-16 p-4 xl:ml-72">
      {loading && <Loader />}
      {!loading && !error && (
        <>
          <Clock user={user} />
          <Sidebar />
        </>
      )}
    </div>
  )
}

function mapStateToProps(state) {
  const { dashboard, auth } = state
  const { user } = auth
  const { loading, error } = dashboard
  return { user, loading, error }
}

export default connect(mapStateToProps)(Dashboard)
