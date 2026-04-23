import React from 'react';

export default function News( { data } ) {
  // Данные одной новости


  return (
    <div className="w-full gap-5 flex flex-col bg-gradient-to-br from-[#4a2c14] to-[#2e1808] border-amber-500/30 text-white p-5 rounded-xl shadow-2xl">
    <h1 className="text-3xl text-center  md:text-4xl font-bold text-amber-300 mb-4">
      Նորություններ
    </h1>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 lg:w-1/2">
          <div className="flex justify-center  items-center gap-3 mb-4">
            <div className="text-5xl flex transition-transform duration-300 hover:scale-110 hover:rotate-3">
              {data.icon}           <h1 className="text-xl md:text-4xl flex font-bold text-amber-300 mb-4">
             {data.title}
            </h1>
            </div>

          </div>
          <p className="text-gray-200 leading-relaxed text-lg mb-6">
            {data.description}
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="rounded-xl overflow-hidden border-2 border-amber-500/30 shadow-lg transition-all duration-300 hover:shadow-amber-500/20 overflow-hidden ">
            <img 
              src={data.image} 
              alt={data.title}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}