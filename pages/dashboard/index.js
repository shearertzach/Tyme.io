import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchData } from '../../redux/Dashboard/dashboardActions'
import Loader from '../../components/Loader'
import { useRouter } from 'next/router'
import Timesheets from '../../components/Dashboard/Timesheets/Timesheets'
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'

function Dashboard({ user, data, loading, error }) {
  const dispatch = useDispatch()
  const router = useRouter()

  if (!user) router.push('/')

  useEffect(() => {
    user && dispatch(fetchData(user.account_id))
  }, [])
  return (
    <div className="ml-72">
      {loading && <Loader />}
      <Sidebar />
      <Timesheets user={user} data={data} />
    </div>
  )
}

function mapStateToProps(state) {
  const { dashboard, auth } = state
  const { user } = auth
  const { data, loading, error } = dashboard
  return { user, data, loading, error }
}

export default connect(mapStateToProps)(Dashboard)
