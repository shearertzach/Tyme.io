import React, { useEffect, useState } from 'react'
import styles from './Clock.module.css'
import { useDispatch } from 'react-redux'
import { clockIn, clockOut } from '../../../redux/Dashboard/dashboardActions'
import Dropdown from '../../Dropdown'
import { formatTime } from '../../../lib/clock'

export default function Clock({ user }) {
  const [currentClient, setCurrentClient] = useState(
    user.clocked_info.client_name || 'None'
  )
  const [clockDisplayInfo, setClockDisplayInfo] = useState(null)
  const dispatch = useDispatch()
  const userClockedIn = user.clocked_info.clocked_in

  useEffect(() => {
    if (userClockedIn) {
      const now = Date.now()
      const difference = now - user.clocked_info.time_clocked_in.seconds * 1000
      const interval = setInterval(() => {
        setClockDisplayInfo(formatTime(difference))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [clockDisplayInfo])

  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div className="flex items-center justify-center">
          <div
            className={
              styles.clock +
              ` ${userClockedIn ? 'border-green-300' : 'border-red-300'}`
            }
          >
            {userClockedIn && (
              <>
                {!clockDisplayInfo && <p>Loading...</p>}
                {clockDisplayInfo && clockDisplayInfo.days > 0 && (
                  <p>{clockDisplayInfo.days} day(s)</p>
                )}
                {clockDisplayInfo && clockDisplayInfo.hours % 24 > 0 && (
                  <p>{clockDisplayInfo.hours % 24} hours(s)</p>
                )}
                {clockDisplayInfo && clockDisplayInfo.minutes % 60 > 0 && (
                  <p>{clockDisplayInfo.minutes % 60} minute(s)</p>
                )}
                {clockDisplayInfo && (
                  <p>{clockDisplayInfo.seconds % 60} second(s)</p>
                )}
              </>
            )}
            {!userClockedIn && <p>Clocked Out</p>}
          </div>
        </div>
        <div className="col-span-2 mt-10 flex flex-col lg:mt-0 lg:items-end">
          <p className="text-lg">Client</p>
          <Dropdown
            setCurrent={setCurrentClient}
            current={currentClient}
            dataset={user.clients}
            disabled={userClockedIn}
          />
          <button
            className={
              styles.clock_action_button +
              ` ${
                userClockedIn
                  ? 'border-red-400 bg-red-300'
                  : 'border-green-400 bg-green-300'
              } ${
                currentClient === 'None' &&
                'cursor-default border-slate-400 bg-slate-300'
              }`
            }
            onClick={() =>
              currentClient !== 'None' &&
              (userClockedIn
                ? dispatch(
                    clockOut(
                      user.user_id,
                      user.clocked_info.client_name,
                      user.clocked_info.time_clocked_in
                    )
                  )
                : dispatch(clockIn(user.user_id, currentClient)))
            }
          >
            {userClockedIn ? 'Clock Out' : 'Clock In'}
          </button>
        </div>
      </div>
    </div>
  )
}
