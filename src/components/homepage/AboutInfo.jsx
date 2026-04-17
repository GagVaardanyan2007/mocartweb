import React from 'react'

export default function AboutInfo( { data } ) {
  return (
    <div className='w-full bg-black/70 text-white flex p-5 border-2 rounded-xl shadow-2xl flex-col border-white'>
      <h1 className='text-center text-4xl'>About Us</h1>
      <div className='flex justify-between items-center mt-10 gap-5'>
        <img src={data.image} alt="" className='w-100' />
        <div className="w-1/2">{data.description}</div>
      </div>
    </div>
  )
}