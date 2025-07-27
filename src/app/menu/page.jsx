import React from 'react'

import Link from 'next/link'
import {menu} from "@/data"


const mymenu = menu;
const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-96px)] md:h-[calc(100vh-110px)] flex flex-col md:flex-row items-center '>
        {
          mymenu.map((category) => (
            <Link href={`/menu/${category.slug}`} className='h-1/3 w-full bg-cover p-5 lg:p-8 md:h-1/2 overflow-hidden '  key={category.id} style={{backgroundImage:`url(${category.img})`}}  >
              <div className= {`text-${category.color} w-1/2`}>
                <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
                <p className='text-sm'>{category.desc}</p>
                <button className={`hidden xl:block bg-${category.color } text-white cursor-pointer ring-1 px-3 py-1 rounded-sm mt-2 ring-white`}>Explore</button>

              </div>

            </Link>
          ) )
        }
    </div>
  )
}

export default MenuPage
