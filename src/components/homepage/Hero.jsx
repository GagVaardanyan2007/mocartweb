import React from 'react'

export default function Hero({ data }) {
  return (
    <div className='w-full h-screen bg-no-repeat bg-cover flex justify-center items-center ' style={{ backgroundImage: data.heroimg }} >
        <div className='w-1/2 '>
            <h1 className='text-6xl text-white font-bold text-center pt-40'>{data.herotitle}</h1>
            <p className='text-center text-white mt-5 text-xl'>{data.herodesc}</p>
            <div className='flex justify-center mt-10'>
            <button className='bg-white/70 px-5 py-2 rounded-lg text-black font-bold'>{data.herobtn}</button>
            </div>
        </div>
        
    </div>
  )
}
