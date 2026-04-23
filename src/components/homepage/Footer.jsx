import React from 'react'

export default function Footer({data}) {
  return (
     <div className="w-full gap-5 flex flex-col bg-gradient-to-br from-[#4a2c14] to-[#2e1808] border-amber-500/30 text-white p-5 rounded-t-xl shadow-2xl">
        <h1 className="text-center text-lg text-amber-300">
            {data.text}
        </h1>
        <div className="flex justify-center gap-5">
            {data.links.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-300 hover:text-amber-300 transition-colors duration-300">
                    {link.name}
                </a>
            ))}
        </div>
        <div className="flex justify-center gap-5">
            {data.social.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-300 hover:text-amber-300 transition-colors duration-300 text-2xl">
                    {social.icon}
                </a>
            ))}
        </div>
     </div>
  )
}
