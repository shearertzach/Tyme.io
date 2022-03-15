import React, { useState } from 'react'
import styles from './Clock.module.css'
import { ChevronDownIcon } from '@heroicons/react/outline'

export default function Clock({ user }) {
  const [currentClient, setCurrentClient] = useState(
    user.clocked_info.client_name || 'None'
  )
  const [dropdown, setDropdown] = useState(false)

  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div className="flex items-center justify-center">
          <div className={styles.clock + ` ${user.clocked_info.clocked_in ? 'border-green-300' : 'border-red-300'}`}>
            {user.clocked_info.clocked_in &&
              <div className='flex flex-col items-center justify-center'>
                <p>2 hours</p>
                <p>30 minutes</p>
                <p>52 seconds</p>
              </div>
            }
            {!user.clocked_info.clocked_in && <p>Clocked Out</p>}
          </div>
        </div>
        <div className="col-span-2 flex flex-col lg:items-end mt-10 lg:mt-0">
          <p className="text-lg">Client</p>
          <div className="relative w-full lg:max-w-[250px]">
            <div
              className={styles.clients}
              onClick={() => setDropdown(!dropdown)}
            >
              {currentClient}
              <ChevronDownIcon className={`h-6 w-6 transition-all duration-300 ${dropdown && 'rotate-180'}`} />
            </div>
            <div
              className={
                styles.dropdown +
                ' ' +
                (dropdown ? 'scale-y-100' : 'scale-y-0')
              }
            >
              {user.clients.map((c) => (
                <button
                  onClick={() => {
                    setCurrentClient(c)
                    setDropdown(!dropdown)
                  }}
                >
                  {c}
                </button>
              ))}
              {user.clients.length === 0 && <p>No Clients Available</p>}
            </div>
          </div>
          <button className={styles.clock_action_button + ` ${user.clocked_info.clocked_in ? 'bg-red-300 border-red-400' : 'bg-green-300 border-green-400'}`}>
            {user.clocked_info.clocked_in ? 'Clock Out' : 'Clock In'}
          </button>
        </div>
      </div>
    </div>
  )
}
