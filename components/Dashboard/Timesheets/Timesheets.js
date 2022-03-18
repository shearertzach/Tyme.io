import styles from './Timesheets.module.css'
import Dropdown from '../../Dropdown'
import { useState } from 'react'
import { formatTime } from '../../../lib/clock'
import { useEffect } from 'react'

export default function Timesheets({ user, sheets }) {
  const userClockedIn = user.clocked_info.clocked_in
  const [currentClient, setCurrentClient] = useState('None')
  const [filteredSheets, setFilteredSheets] = useState(sheets)

  useEffect(() => {
    let filtered
    if (currentClient !== 'None') {
      filtered = sheets.filter((s) => s.client === currentClient)
    } else {
      filtered = sheets
    }
    setFilteredSheets(filtered)
  }, [currentClient])

  return (
    <div className={styles.main}>
      <div className="mb-10 flex items-center justify-between ">
        <p className="text-lg">
          {currentClient === 'None' ? '[No Client Selected]' : currentClient}
        </p>
        <Dropdown
          setCurrent={setCurrentClient}
          current={currentClient}
          dataset={user.clients}
          disabled={userClockedIn}
        />
      </div>
      <div className={styles.timesheets}>
        {filteredSheets.map((s) => {
          const timeIn = new Date(s.time_clocked_in.seconds * 1000)
          const timeOut = new Date(s.time_clocked_out.seconds * 1000)
          const totalTime = formatTime(s.duration)

          return (
            <div>
              <p>{s.client}</p>
              <p>{timeIn.toLocaleString()}</p>
              <p>{timeOut.toLocaleString()}</p>
              <p className="text-right">
                {totalTime.hours}h {totalTime.minutes}m {totalTime.seconds}s
              </p>
            </div>
          )
        })}
        {filteredSheets.length < 1 && (
          <p className="p-4">You have not submitted a time for this client.</p>
        )}
      </div>
    </div>
  )
}
