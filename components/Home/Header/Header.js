import React from 'react'
import styles from './Header.module.css'
import { useDispatch } from 'react-redux'
import { signIn, signOut } from '../../../redux/Auth/authActions'
import { connect } from 'react-redux'
import Loader from '../../Loader'
import { useRouter } from 'next/router'

export function Header({ user, loading, error }) {
  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <p>Tyme.io</p>
        <div className={styles.actions}>
          <button
            className={styles.authButton}
            onClick={
              user ? () => router.push('/dashboard') : () => dispatch(signIn())
            }
          >
            {user ? 'Dashboard' : 'Sign In'}
          </button>
          {user && (
            <button
              className={styles.authButton}
              onClick={() => dispatch(signOut())}
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
      {loading && <Loader />}
    </div>
  )
}

function mapStateToProps(state) {
  const { auth } = state
  const { user, loading, error } = auth
  return { user, loading, error }
}

export default connect(mapStateToProps)(Header)
