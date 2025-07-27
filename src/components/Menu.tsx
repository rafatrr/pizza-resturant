"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcone from "./CartIcone";

const links = [
  { id: 1, title: "HomePage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div className="">
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          style={{ width: "20px", height: "20px" }}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          style={{ width: "20px", height: "20px" }}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div
          className="
      absolute flex flex-col bg-red-500 text-white top-24 left-0  w-full h-[calc(100vh-96px)]  items-center justify-around   z-10 sm:flex-row   "
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className=" text-xl font-bold"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link
              href="/login"
              className="text-xl font-bold"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          ) : (
            <Link
              href="/orders"
              className="text-xl font-bold"
              onClick={() => setOpen(false)}
            >
              orders
            </Link>
          )}
          <Link
            href="/cart"
            className="text-xl font-bold flex gap-3"
            onClick={() => setOpen(false)}
          >
            <CartIcone />
          </Link>
        </div>
      )}

      
    </div>
  );
};

export default Menu;
