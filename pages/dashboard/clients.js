import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import Loader from '../../components/Loader'
import { useRouter } from 'next/router'
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import { doc, onSnapshot } from 'firebase/firestore'
import { updateUser } from '../../redux/Auth/authActions'
import { db } from '../../firebase'
import ClientList from '../../components/Dashboard/ClientList/ClientList'

function Clients({ user, loading, error }) {
  const dispatch = useDispatch()
  const router = useRouter()

  if (!user) router.push('/')

  useEffect(() => {
    return onSnapshot(doc(db, 'users', user.user_id), (doc) => {
      dispatch(updateUser(doc))
    })
  }, [])

  return (
    <div className="ml-16 p-4 xl:ml-72">
      {loading && <Loader />}
      {!loading && (
        <>
          <ClientList user={user} />
          <Sidebar />
        </>
      )}
    </div>
  )
}

function mapStateToProps(state) {
  const { clients, auth } = state
  const { user } = auth
  const { loading, error } = clients
  return { user, loading, error }
}

export default connect(mapStateToProps)(Clients)
