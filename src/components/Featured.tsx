import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { featuredProducts } from '@/data'
const Featured = () => {
  return (
    <div>
      <div className="w-screen overflow-x-scroll text-red-500  ">
        {/* wrwpper */}
        <div className="w-max flex ">
          {/* sigleItem */}
         {featuredProducts.map((item) => {
          return(
            <Link href="/menu" key={item.id} className='cursor-pointer' >
            <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4  hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw] xl:w-[25vw] xl:h-[90vh]">
            {/* imageContiner */}
            {item.img &&
            <div className="relative flex-1 w-full p-4 hover:scale-120 hover:rotate-50 transition-all duration-300">
              <Image className='object-contain' src={item.img} alt='' fill/>
            </div>
            }  
          {/* textContiner */}
          <div className="flex-1 flex flex-col gap-4 items-center text-center justify-center">
            <h1 className="text-xl font-bold uppercase xl:text-xl">{item.title}</h1>
            <p className="p-4">{item.desc}</p>
            <span className='font-bold text-xl'>${item.price}</span>
            <button className='bg-red-500 text-white p-2 rounded-sm'>Add to cart</button>
           </div>
          </div>
          </Link>
          )


         })}
          




        </div>

      </div>
    </div>
  )
}

export default Featured
