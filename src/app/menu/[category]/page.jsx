import React from 'react'
import {pizzas} from '@/data'
import Link from 'next/link'
import Image from 'next/image'
const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map((item) => (
          <Link href={`/product/${item.id}`} key={item.id}  className=' even:bg-fuchsia-50 group flex flex-col justify-between p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-[60vh] border-r-1 border-b-1 border-red-500'>
            {/* imageContainer */}
            {item.img &&
            <div className="relative h-[80%]  " >
              <Image src={item.img} alt='' fill className='object-contain'/>

            </div>
            }

            {/* textContainer */}
            <div className=" flex items-center justify-between font-bold mb-2"> 
              <h1 className='w-1/2 font-bold text-xl'>{item.title}</h1>
              <h2 className='text-red-500 font-bold block group-hover:hidden p-2'>${item.price}</h2>
              <button className='uppercase bg-red-500 text-white p-2 rounded  hidden group-hover:block'>Add to cart</button>


            </div>


          </Link>
          

        
      ))
      }
      
    </div>
  )
}

export default CategoryPage
