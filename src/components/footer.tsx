import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='w-full h-full bg-black text-white p-3 sm:p-16 grid grid-cols-2 lg:grid-cols-5 gap-10'>
      <div className='flex flex-col gap-[2px]'>
        <h1 className='text-xl sm:text-3xl font-bold mb-2'>Abstract</h1>
        <Link className='hover:underline' href='/'>Start Trial</Link>
        <Link className='hover:underline' href='/'>Pricing</Link>
        <Link className='hover:underline' href='/'>Download</Link>
      </div>
      
      <div className='flex flex-col gap-[2px]'>
        <h1 className='text-xl sm:text-3xl font-bold mb-2'>Resources</h1>
        <Link className='hover:underline' href='/'>Blog</Link>
        <Link className='hover:underline' href='/'>Help Center</Link>
        <Link className='hover:underline' href='/'>Release Note</Link>
        <Link className='hover:underline' href='/'>Status</Link>
      </div>

      <div className='flex flex-col gap-[2px]'>
        <h1 className='text-xl sm:text-3xl font-bold mb-2'>Community</h1>
        <Link className='hover:underline' href='/'>Twitter</Link>
        <Link className='hover:underline' href='/'>LinkedIn</Link>
        <Link className='hover:underline' href='/'>Facebook</Link>
        <Link className='hover:underline' href='/'>Dribble</Link>
        <Link className='hover:underline' href='/'>Podcast</Link>
      </div>

      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-[2px]'>
            <h1 className='text-xl sm:text-3xl font-bold mb-2'>Company</h1>
            <Link className='hover:underline' href='/'>About Us</Link>
            <Link className='hover:underline' href='/'>Career</Link>
            <Link className='hover:underline' href='/'>Legal</Link>
        </div>
        <div>
            <h1 className='text-xl sm:text-3xl font-bold mb-2'>Contact Us</h1>
            <Link className='hover:underline' href='/'>info@abstract.com</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
