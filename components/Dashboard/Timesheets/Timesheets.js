import styles from './Timesheets.module.css'

export default function Timesheets({ user, data }) {
  return (
    <div className={styles.main}>
      <p className='text-center'>
        {user.clients.length < 1
          ? "It appears you haven't created a client to log time for. Get started."
          : user.clients[0]}
      </p>
    </div>
  )
}
