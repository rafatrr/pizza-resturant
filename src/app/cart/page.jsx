import React from 'react'
import Image from 'next/image'

const CartPage = () => {
  return (
    <div className=' h-[calc(100vh-96px)] md:h-[ calc(100vh-96px)] text-red-500 flex flex-col lg:flex-row     '>
      {/* productContainer */}
      <div className="h-1/2 p-4 flex flex-col justify-around overflow-y-scroll   lg:h-full lg:w-2/3 xl:w-1/2 lg-px-20 xl:px-40 ">
        {/* single Item */}
        <div className="flex items-center justify-between mb-4  ">
          <Image src="/temporary/m1.png" width={100} height={100} alt="" />
          <div className="">
            <h1 className=" uppercase text-xl font-bold "  >title</h1>
            <span>large</span>
          </div>
          <h2 className='font-bold'>$89.90</h2>
          <span className=' font-bold text-xl cursor-pointer'>x</span>
        </div>

        <div className="flex items-center justify-between mb-4  ">
          <Image src="/temporary/m1.png" width={100} height={100} alt="" />
          <div className="">
            <h1 className=" uppercase text-xl font-bold "  >title</h1>
            <span>large</span>
          </div>
          <h2 classNamb-4e='font-bold'>$89.90</h2>
          <span className=' font-bold text-xl cursor-pointer'>x</span>
        </div>


        <div className="flex items-center justify-between mb-4  ">
          <Image src="/temporary/m1.png" width={100} height={100} alt="" />
          <div className="">
            <h1 className=" uppercase text-xl font-bold "  >title</h1>
            <span>large</span>
          </div>
          <h2 classNamb-4e='font-bold'>$89.90</h2>
          <span className=' font-bold text-xl cursor-pointer'>x</span>
        </div>


          <div className="flex items-center justify-between mb-4  ">
          <Image src="/temporary/m1.png" width={100} height={100} alt="" />
          <div className="">
            <h1 className=" uppercase text-xl font-bold "  >title</h1>
            <span>large</span>
          </div>
          <h2 classNamb-4e='font-bold'>$89.90</h2>
          <span className=' font-bold text-xl cursor-pointer'>x</span>
        </div>



          <div className="flex items-center justify-between mb-4  ">
          <Image src="/temporary/m1.png" width={100} height={100} alt="" />
          <div className="">
            <h1 className=" uppercase text-xl font-bold "  >title</h1>
            <span>large</span>
          </div>
          <h2 classNamb-4e='font-bold'>$89.90</h2>
          <span className=' font-bold text-xl cursor-pointer'>x</span>
        </div>


        <div className="flex items-center justify-between mb-4  ">
          <Image src="/temporary/m1.png" width={100} height={100} alt="" />
          <div className="">
            <h1 className=" uppercase text-xl font-bold "  >title</h1>
            <span>large</span>
          </div>
          <h2 className='font-bold'>$89.90</h2>
          <span className=' font-bold text-xl cursor-pointer'>x</span>
        </div>
        
      </div>

      {/* PaymentContainer */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 lg:justify-around xl:w-1/2 lg-px-20 xl:px-40 ">
        <div className="flex justify-between ">
          <span className=''>Suptotal (3 items)</span>
          <span className=''>$81.70</span>
        </div>

        <div className="flex justify-between ">
          <span className=''> Service Cost  </span>
          <span className=''>$0.00</span>
        </div>

        <div className="flex justify-between ">
          <span className=''> Delivery Cost  </span>
          <span className='text-green-500'>Free!</span>
        </div>
       
       <hr className='my-2' />

       <div className="flex justify-between ">
          <span className=''>Totl (Incl.Vat)</span>
          <span className='font-bold'>$81.70</span>
        </div>
        
        <hr className='' />
        <button className='bg-red-500 text-white p-3 rounded-sm w-1/2 self-end' >CheckOut</button>

      </div>
      
    </div>
  )
}

export default CartPage
