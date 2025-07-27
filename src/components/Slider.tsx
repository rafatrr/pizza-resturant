"use client"
import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in tr",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];



const Slider = () => {
  const [currentSlide, setCurrentSlide]= useState(2)

  useEffect(() => {
     const interval = setInterval(
      () =>{
        setCurrentSlide((prev) => prev === data.length -1 ? 0 : prev + 1)
     },2000)

     return () => clearInterval(interval)
  },[])


  
  return (
    
    <div className='flex flex-col  h-[calc(100vh-96px)] md:h-[calc(100vh-144px)] lg:flex-row bg-fuchsia-50'>
      {/* text containner */}
      <div className="flex-1 items-center justify-center flex flex-col gap-8 text-red-500 font-bold ">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl-text-7xl">
          {data[currentSlide].title}
        </h1>
        
        <Link href="/menu" className=' mb-4  bg-red-500 text-white px-5 py-3 rounded-sm hover:bg-red-600'>Order Now!</Link>

      </div>
      {/* image container */}
      <div className=" w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image src={data[currentSlide].image} alt='' fill className='object-cover'  />
      </div>
      
    </div>
  )
}

export default Slider
