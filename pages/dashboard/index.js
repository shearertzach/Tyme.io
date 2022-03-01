import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchData } from '../../redux/Dashboard/dashboardActions'

function Dashboard({ user, data, loading, error }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData(user.account_id))
  }, [])
  return <div className="min-h-screen"></div>
}

function mapStateToProps(state) {
  const { dashboard, auth } = state
  const { user } = auth
  const { data, loading, error } = dashboard
  return { user, data, loading, error }
}

export default connect(mapStateToProps)(Dashboard)
