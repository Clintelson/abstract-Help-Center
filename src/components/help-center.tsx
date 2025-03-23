import React from 'react'
import Link from 'next/link'

function HelpCenter() {
  return (
    <Link href={'/'} className='text-xl hover:underline' passHref>
      Help Center
    </Link>
  )
}

export default HelpCenter
