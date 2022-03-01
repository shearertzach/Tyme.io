import { connect } from 'react-redux'

export function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2"></div>
  )
}

function mapStateToProps(state) {
  const { auth } = state
  const { user, loading } = auth
  return { user, loading }
}

export default connect(mapStateToProps)(Home)
