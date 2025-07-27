

import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import CartIcone from "./CartIcone";
import Image from "next/image";



const Navbar = () => {
  const user= false
  return (
    <div className="h-12 text-red-500  flex justify-between items-center border-b-2 border-red-500 p-4 lg:px-20 xl:px-40">
      {/* leftLinks */}
      <div className="hidden md:flex items-center gap-4 flex-1">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>  
      </div>
      {/* logo */}
      <div className="text-xl font-bold flex-1 md:text-center">
        <Link href="/">RAFAT</Link>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <Menu/>
      </div>
{/* rightLinks */}
      <div className="hidden md:flex items-center gap-4 flex-1 justify-end ">
        <div className=" flex items-center gap-2  cursor-pointer bg-red-300 px-1  hover:bg-red-400 transition-all duration-300 rounded-sm md:absolute top-3 r-2 lg:static">
          <Image  src="/phone.png" width={20} height={20} alt="" />
          <span>05340873406</span>
        </div>
        { !user ?(
            <Link href="/login">Login</Link>
          ):(
            <Link href="/orders">Orders</Link>
          )}
         <CartIcone/> 
        
      </div>
      
    </div>
  );
};

export default Navbar;
