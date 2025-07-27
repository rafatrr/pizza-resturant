"use client"

import React, { useEffect, useState } from 'react'



type TypeProps = {
    price: number,
    id: number,
    options?: {title: string, additionalPrice: number}[];
}



const Price = ( { price , id, options }:TypeProps ) => {
    const [totalPrice, setTotalPrice] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected ] = useState(0);

     useEffect(() => {
        setTotalPrice(quantity * (options ? price + options[selected].additionalPrice : price  ))


    }, [quantity,selected,options , price])

  return (
    <div className='flex flex-col gap-4 '>
        <h2 className="text-2xl font-bold  ">${totalPrice}</h2>
        {/* optionsContainer */}
        <div className="flex gap-4">
            {
                options?.map((option,index) => (
                    <button onClick={() => setSelected(index)} key={option.title} className='ring-1 ring-red-500 p-2 w-30 cursor-pointer  rounded-sm  font-bold flex flex-row justify-around '
                    style={{background: selected === index ? "red": "white", color: selected === index ? "white" : "red" }}
                     
                    >
                        {option.title}
                    </button>
                ))

            }
        </div>
        {/* QuantityContainer */}
        <div className="flex justify-between items-center ring-1 ring-red-500 rounded-sm ">
            {/* Quantity */}
            <div className="flex flex-1  justify-between items-center ">
                <span className="">Quantity</span>
                <div className=" text-xl flex gap-4 px-2 ">
                    <button className=' cursor-pointer ' onClick={ () => quantity > 1 ? setQuantity(quantity - 1) : quantity } >-</button>
                    <span>{quantity}</span>
                    <button className=' cursor-pointer' onClick={ () => quantity < 10 ? setQuantity( quantity + 1): quantity } >+</button>
                </div>
            </div>
            {/* cartbutton */}
            <button className='bg-red-500 p-2 w-30 cursor-pointer  rounded-sm text-white font-bold '>
            Add to cart
            </button>
        </div>

    </div>
    
  )
 }    
export default Price
