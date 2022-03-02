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
          <div className={styles.clock}>
            <p>2 hours</p>
            <p>30 minutes</p>
            <p>52 seconds</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-end">
          <p className="text-lg">Clients</p>
          <div className="relative w-full max-w-[250px]">
            <div
              className={styles.clients}
              onClick={() => setDropdown(!dropdown)}
            >
              {currentClient}
              <ChevronDownIcon className="h-6 w-6" />
            </div>
            <div
              className={
                styles.clients_dropdown +
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
