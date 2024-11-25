"use client"
import Image from 'next/image'
import React from 'react'


const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={require("../../../public/bb-mono.png")}
      alt='monogram'
      width={80}
      height={80}
      />
      <span className="ml-3 text-xl">Satrangi </span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 text-bold font-sans hover:text-green-400">Summer Collections</a>
      <a className="mr-5 text-bold font-sans hover:text-green-400">Winter Collections</a>
      <a className="mr-5 text-bold font-sans hover:text-green-400">Azadi Sales</a>
      <a className="mr-5 text-bold font-sans hover:text-green-400">12.12 Sales </a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0">Contact Us 
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
