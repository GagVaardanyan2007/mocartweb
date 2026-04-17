import React from 'react';
import { FiAlignJustify } from 'react-icons/fi';

export default function Navbar() {
  return (
    <div className='flex  w-full p-3 items-center justify-between bg-black/80 fixed '>
      <h1 className="text-4xl  text-white sekuya-regular">MOCART</h1> 
      <nav className="flex p-4">
        <ul className="flex gap-15">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
      <FiAlignJustify className='text-3xl text-white'/>

    </div>
  );
}