import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4 lg-px-20 xl:px-40  '>
      <table className='w-full border-separate border-spacing-2'>
        <thead className=''>
          <tr className='text-left'>
            <th className='hidden md:block'>Order Id </th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody  >
          <tr className='text-sm md:text-base bg-red-50 '>
            <td className='hidden md:block  py-6 px-1' >126767533432</td>
            <td  className='py-6 px-1'>27.07.2025</td>
            <td  className='py-6 px-1'>$81.90</td>
            <td className='hidden md:block py-6 px-1' >Big burger menu (3), veggie pizza (2), Coca cola 1L (2)</td>
            <td  className='py-6 px-1'>on the way (approx. 10min)...</td>
            
          </tr>

            <tr className='text-sm md:text-base odd:bg-gray-100 '>
            <td className='hidden md:block  py-6 px-1' >126767533432</td>
            <td  className='py-6 px-1'>27.07.2025</td>
            <td  className='py-6 px-1'>$81.90</td>
            <td className='hidden md:block py-6 px-1' >Big burger menu (3), veggie pizza (2), Coca cola 1L (2)</td>
            <td  className='py-6 px-1'>on the way (approx. 10min)...</td>
            
          </tr>


            <tr className='text-sm md:text-base odd:bg-gray-100 '>
            <td className='hidden md:block  py-6 px-1' >126767533432</td>
            <td  className='py-6 px-1'>27.07.2025</td>
            <td  className='py-6 px-1'>$81.90</td>
            <td className='hidden md:block py-6 px-1' >Big burger menu (3), veggie pizza (2), Coca cola 1L (2)</td>
            <td  className='py-6 px-1'>on the way (approx. 10min)...</td>
            
          </tr>

        </tbody>
      </table>
        
      
    </div>
  )
}

export default OrdersPage
