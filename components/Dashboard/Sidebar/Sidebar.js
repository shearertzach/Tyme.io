import React from 'react'
import styles from './Sidebar.module.css'
import {
  HomeIcon,
  BriefcaseIcon,
  DocumentReportIcon,
  CogIcon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const router = useRouter()
  const currentPath = router.asPath

  return (
    <div className={styles.main}>
      <p className={styles.header}>Tyme.io</p>
      <div className="mx-auto my-8 hidden w-48 rounded-lg border-2  opacity-25 xl:block" />
      <div className={styles.actions}>
        <button className={styles.action_button}>
          <HomeIcon className="text-red-400" />
          <p className={(currentPath === '/dashboard' && 'text-red-400') || ''}>
            Home
          </p>
        </button>
        <button className={styles.action_button}>
          <BriefcaseIcon className="text-red-400" />
          <p className={(currentPath === '/clients' && 'text-red-400') || ''}>
            Clients
          </p>
        </button>
        <button className={styles.action_button}>
          <DocumentReportIcon className="text-red-400" />
          <p className={(currentPath === '/reports' && 'text-red-400') || ''}>
            Reports
          </p>
        </button>
        <button className={styles.action_button}>
          <CogIcon className="text-red-400" />
          <p className={(currentPath === '/settings' && 'text-red-400') || ''}>
            Settings
          </p>
        </button>
      </div>
    </div>
  )
}
