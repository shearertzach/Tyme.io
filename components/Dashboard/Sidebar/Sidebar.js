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
        <button
          className={styles.action_button}
          onClick={() => router.push('/dashboard')}
        >
          <HomeIcon className="text-red-400" />
          <p className={(currentPath === '/dashboard' && 'text-red-400') || ''}>
            Home
          </p>
        </button>
        <button
          className={styles.action_button}
          onClick={() => router.push('/dashboard/clients')}
        >
          <BriefcaseIcon className="text-red-400" />
          <p
            className={
              (currentPath === '/dashboard/clients' && 'text-red-400') || ''
            }
          >
            Clients
          </p>
        </button>
        <button
          onClick={() => router.push('/dashboard/reports')}
          className={styles.action_button}
        >
          <DocumentReportIcon className="text-red-400" />
          <p
            className={
              (currentPath === '/dashboard/reports' && 'text-red-400') || ''
            }
          >
            Reports
          </p>
        </button>
      </div>
    </div>
  )
}
