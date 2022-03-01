import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <>
      <div className={styles.layer + " " + styles.flip} />
      <div className="bg-slate-800">
        <div className="mx-auto grid max-w-7xl p-5 lg:grid-cols-3">
          <div className="col-span-2 text-center lg:text-left">
            <h2 className="text-4xl text-slate-100">
              Introducing <span className="text-red-400">Tyme.</span>
            </h2>
            <p className="mt-5 text-2xl text-slate-300">
              A new way to manage and keep track of your time.
            </p>
            <ul className={styles.hero_list}>
              <li>+ User Friendly Experience</li>
              <li>+ Timesheet Management</li>
              <li>+ Incredibly Quick and Smooth UI</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.layer} />
    </>
  )
}
