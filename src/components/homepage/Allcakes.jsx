import React from 'react'

export default function Allcakes( {data}) {
  return (
    <div className="w-full bg-gradient-to-br  gap-5 flex flex-col from-[#4a2c14] to-[#2e1808] border-amber-500/30 text-white p-5 rounded-xl shadow-2xl">
      <h1 className="text-3xl text-center md:text-4xl font-bold text-amber-300 mb-4">
        Մեր Տեսականին
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((cake, index) => (
                <div key={index} className="bg-[#3e1f0b] border-amber-500 border-2 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-amber-500/20 hover:scale-[1.02]">
                    <img src={cake.img} alt={cake.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{cake.title}</h2>
                        <p className="text-gray-300 text-sm">{cake.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
