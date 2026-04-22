import React from 'react';

export default function AboutInfo({ data }) {
  return (
    <div className="w-full bg-gradient-to-br from-[#4a2c14] to-[#2e1808] border-amber-500/30 text-white p-5 rounded-xl shadow-2xl">
      <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
        {data.title}
      </h1>

      <div className="flex w-full mt-10 justify-around flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="border-2 border-amber-500/30 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-amber-500/20 group">
          <img
            src={data.image}
            alt=""
            className="hover:scale-105 w-100 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <p className="w-full lg:w-1/2 text-gray-200 leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="flex flex-wrap justify-around gap-6 mt-10">
        {data.card.map((item, index) => (
          <div
            key={index}
            className="flex items-center w-80 gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-white/5 hover:scale-105 hover:shadow-xl border border-transparent hover:border-amber-500/50"
          >
            <i className="text-4xl text-amber-400 transition-transform duration-300 hover:scale-110 hover:rotate-3">
              {item.icon}
            </i>
            <div>
              <h2 className="text-2xl font-bold text-amber-300">{item.title}</h2>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}