import React from 'react'

export default function AboutInfo( { data } ) {
  return (
    <div className='w-full bg-[#593312] border-amber-500 text-white flex p-5 border-3 rounded-xl shadow-2xl flex-col '>
      <h1 className='text-center text-4xl'>About Us</h1>
      <div className='flex mt-10 gap-5'>
        <div className='border rounded-2xl  overflow-hidden border-gray-300 w-100  shadow-lg'>
            <img src={data.image} alt="" className='hover:scale-105 transition-transform duration-300' />
        </div>
        <div className="w-full">{data.description}</div>
      </div>
    </div>
  )
}