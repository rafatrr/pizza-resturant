import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'
const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between   md:bg-[url(/offerBg.png)] md:h-[70vh]'>


      
      {/* textContainer */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6 md:gap-15 ">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Delious Burger & Fransh Fry</h1>
        <p className="text-white xl:text-xl"> Progressively simplify effective e-toilers and process-centric methods
        of empowerment. Quickly pontificate parallel.</p>
        <CountDown/>
        <button className='text-white bg-red-500 rounded-sm py-3 px-6 cursor-pointer'>Order Now!</button>

      </div>

    {/* imageContainer */}
    <div className="relative flex-1 w-full md:h-full ">
      <Image src="/offerProduct.png" alt=' ' fill className='object-contain'/>

    </div>
    </div>
  )
}

export default Offer
