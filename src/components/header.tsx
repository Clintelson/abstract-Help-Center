"use client";
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Header() {
  return (
    <div className='w-full bg-[#dadbf1] flex flex-col justify-center items-center px-8 py-18'>
      <div className='text-4xl sm:text-5xl md:text-6xl'>
        How can we help?
      </div>

        <div className='relative mt-8 w-full sm:w-[50%] group bg-white'>
          <input
              type='text'
              placeholder='Search'
              className='w-full bg-transparent border border-black focus:outline-[#4C5FD5] px-5 py-3 text-xl rounded-sm hover:outline hover:outline-[#4C5FD5]'
          />
          
          <FaArrowRightLong 
          className='cursor-pointer absolute right-5 top-4 group-hover:text-[#4C5FD5] w-6 h-6'
          />
        </div>

    </div>
  )
}

export default Header
