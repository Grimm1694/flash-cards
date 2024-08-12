"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <nav className={`w-full flex  p-1  bg-black text-white shadow-md sticky top-0 z-20`}>
      <div className='container mx-auto flex items-center justify-between px-'>
      <div className='flex items-center space-x-[1px]'>
        <h1 className="text-[25px] font-bold text-red-600">TUF</h1>
      </div>
        <Link className="px-4 py-2 text-white rounded-xl shadow hover:bg-gray-800" href="/">
           HOME
          </Link>
        </div>
        <Link className="px-4 py-2 bg-gray-900 text-white rounded-xl shadow hover:bg-gray-800 " href="/dashboard">
           Dashboard
          </Link>
    </nav>
  );
}
