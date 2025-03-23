import React from 'react'
import Link from 'next/link'

function Logo() {
  return (
    <Link href={'/'} className='text-xl hover:text-gray-300' passHref>
      Abstract
    </Link>
  )
}

export default Logo
