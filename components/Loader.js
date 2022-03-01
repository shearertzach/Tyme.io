import React from 'react'

export default function Loader() {
  return (
    <div className="fixed z-50 top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center text-slate-200">
      <p className='text-xl'>Loading...</p>
    </div>
  )
}
