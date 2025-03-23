"use client";
import React, { useState } from 'react'
import Logo from './logo'
import HelpCenter from './help-center'
import { Button } from './ui/button'

function NavigationBar() {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={`w-full text-white py-5 px-8 sm:px-20 flex flex-row justify-between items-center ${isOpen ? 'bg-[#2c2b2b]' : 'bg-black'}`}>
          <div className='flex flex-row gap-5 items-center'>
              <Logo />
              <div className='text-xl'>|</div>
              <HelpCenter />
          </div>
          <div className='hidden md:flex flex-row gap-5 items-center'>
              <Button className='bg-transparent border border-gray-600 text-lg'>Submit Request</Button>
              <Button className='bg-[#4C5FD5] text-lg'>Sign In</Button>
          </div>

          <button onClick={handleToggle} className='block md:hidden'>
            o
          </button>
      </div>

      {isOpen && (
        <div className={`w-full bg-[#2c2b2b] text-white py-5 px-20 z-100 border-t-[1px] absolute md:hidden`}>
              <div className='flex flex-col gap-5 items-center'>
                  <button className='text-lg'>Submit Request</button>
                  <button className='text-lg'>Sign In</button>
              </div>
        </div>
       )}
    </>
  )
}

export default NavigationBar