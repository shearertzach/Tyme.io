import { ChevronDownIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'

export default function Dropdown({ dataset, current, setCurrent, disabled }) {
  const [dropdown, setDropdown] = useState(false)
  return (
    <div className="relative w-full lg:max-w-[250px] min-w-[250px]">
      <div
        className={`relative rounded-lg border-2 px-4 py-2.5 my-3 flex justify-between items-center transition-all ${disabled ? "cursor-default opacity-50" : "cursor-pointer hover:bg-slate-700"}`}
        onClick={() => !disabled && setDropdown(!dropdown)}
      >
        {current}
        <ChevronDownIcon className={`h-6 w-6 transition-all duration-300 ${dropdown && 'rotate-180'}`} />
      </div>
      <div className={`origin-top transition-all absolute top-16 right-0 rounded-lg w-full p-2 bg-slate-200 border-2 border-slate-300 text-slate-700 ${dropdown ? 'scale-y-100' : 'scale-y-0'}`}>
        {dataset.map((d) => (
          <button
            key={d}
            className='rounded-md hover:bg-slate-300 p-2 pl-2 w-full text-left '
            onClick={() => {
              setCurrent(d)
              setDropdown(!dropdown)
            }}
          >
            {d}
          </button>
        ))}
        <button
          className='rounded-md hover:bg-slate-300 p-2 pl-2 w-full text-left '
          onClick={() => {
            setCurrent("None")
            setDropdown(!dropdown)
          }}
        >
          None
        </button>
      </div>
    </div>
  )
}
