import React from 'react'

export default function AboutInfo( { data } ) {
  return (
    <div className='w-full bg-[#40240b] border-amber-500 text-white flex p-5 border-3 rounded-xl shadow-2xl flex-col '>
      <h1 className='text-center text-4xl'>About Us</h1>
      <div className='flex mt-10 gap-25'>
        <div className='border rounded-2xl  overflow-hidden border-gray-300 w-100  shadow-lg'>
            <img src={data.image} alt="" className='hover:scale-105 transition-transform duration-300' />
        </div>
        <div className="w-full text-justify">{data.description}</div>
      </div>
      <div className='flex justify-between'>
        {data.card.map((item, index) => (
          <div key={index} className='flex items-center gap-5 mt-10'>
            <i className='text-2xl'>{item.icon}</i>
            <div>
              <h2 className='text-2xl font-bold'>{item.title}</h2>
                <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


