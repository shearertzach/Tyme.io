import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addClient, removeClient } from '../../../redux/Clients/clientsActions'
import styles from './ClientList.module.css'

export default function Clients({ user }) {
  const [addModal, setAddModal] = useState(false)
  const [clientName, setClientName] = useState('')
  const dispatch = useDispatch()

  return (
    <div className={styles.main}>
      <div className="mb-5 flex items-center justify-between px-0.5">
        <p className="text-xl">Clients</p>
        <button
          onClick={() => setAddModal(!addModal)}
          className={styles.add_button}
        >
          +
        </button>
      </div>

      <div className={styles.client_list + ''}>
        {user.clients.map((c) => (
          <div key={c}>
            <p>{c}</p>
            <button
              onClick={() =>
                dispatch(removeClient(c, user.user_id, user.clients))
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {addModal && (
        <>
          <div className={styles.add_client}>
            <p className="mb-2 font-medium text-slate-700">
              What is your clients name?
            </p>
            <input
              maxLength={30}
              placeholder="Ex: Tyme.io"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
            <button
              onClick={() =>
                dispatch(addClient(clientName, user.user_id, user.clients))
              }
            >
              Add Client
            </button>
          </div>
          <div
            onClick={() => setAddModal(!addModal)}
            className={styles.backdrop}
          />
        </>
      )}
    </div>
  )
}
