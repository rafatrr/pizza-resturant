import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4  h-[calc(100v-96px)] flex items-center justify-center md:p-20 xl:p-40  ">
        {/* box */}
      <div className="w-full p-2 md:h-[calc(100vh-30vh)] xl:h-[calc(100vh-40vh)] h-[calc(100vh-96px)] lg-px-20 xl:px-40 md:flex-row shadow-2xl rounded-sm flex flex-col  md:w-full   ">
        {/* Image container */}
        <div className="relative w-full h-1/3 md:w-1/2 md:h-full  md:flex-1 ">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />

           </div>
        {/* Form Container */}
        <div className="flex gap-6 flex-col justify-around p-4 md:w-1/2 md:justify-center ">
          <h1 className="font-bold text-xl">Welcome</h1>
          <p className=""> Account or creat a new one uing scial buttons </p>
          <button  className="flex gap-2 p-2 py-2 ring-1 ring-gray-200">
            <Image src="/google.png" alt="" width={25} height={25} className="object-contain" />
            <span>sign in with google</span>
          </button>
          <button  className="flex gap-2 p-2 py-2 ring-1 ring-gray-200">
            <Image src="/faceBook.png" alt="" width={25} height={25} className="object-contain" />
            <span> sign in with facebook </span>  
          </button>
          <p> a problem? <Link href="/" className="text-blue-500" > Contact us  </Link>  </p>


        </div>
      </div>

    </div>
  );
};

export default LoginPage;
