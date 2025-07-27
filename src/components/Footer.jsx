import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 text-red-500 px-4 flex justify-between items-center border-b-2 border-red-500 md:h-24 lg:px-20 xl:px-40'>
        <Link  className='text-xl font-bold flex-1 ' href="/">RAFAT</Link>
        <p>© ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer;