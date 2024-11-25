"use client"
import Image from 'next/image';
import React from 'react'
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <div className='bg-gray-100'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Bumper Offer 
        <br className="hidden lg:inline-block"/> 
     <Typewriter
  options={{
    strings: ['Unstitched Sale Online in Pakistan', 'Ready Made Winter Clothes Sale'],
    autoStart: true,
    loop: true,
     }}
/> 
      </h1>
      <p className="mb-8 leading-relaxed">Unstitched fabric is truly one of the top preference of women in Pakistan. It gives them freedom to create suits according to their own fit & style.

Keeping this in mind, Zeen is offering best sale on unstitched collection. Here you find a wide range of fabrics in discounted price. Whether you're looking for lawn, jacquard, silk, cotton, or cambric, Zeen has it all in unstitched sale collection.</p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image src={require("../../../public/hero image.webp")} 
      alt='sale'
      width={400}
      height={200}
      className='justify-center flex mr-2 items-center'/>
    </div>
  </div>
</section> 
</div>
  )
}

export default Hero
