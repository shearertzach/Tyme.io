import React from 'react'
import styles from './Header.module.css'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../redux/Auth/authActions'
import { connect } from 'react-redux'
import Loader from '../../Loader'

export function Header({ user, loading }) {
  const dispatch = useDispatch()

  console.log(user, loading)

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <p>Tyme.io</p>
        <div className={styles.actions}>
          <button
            className={styles.authButton}
            onClick={() => dispatch(signIn())}
          >
            {user ? 'Dashboard' : 'Sign In'}
          </button>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  )
}

function mapStateToProps(state) {
  const { auth } = state
  const { user, loading } = auth
  return { user, loading }
}

export default connect(mapStateToProps)(Header)
