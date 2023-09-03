import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
        <footer className='bg-darker'>
                <div className='flex gap-10 items-center'>
                    <div className='flex mx-auto my-auto h-full py-10'>
                        <Link href="/">
                            <Image className='mx-10' src="/logo.png" width={125} height={40} alt="logo" />
                        </Link>
                        <h1 className='text-lighter mx-10 font-links text-xl font-semibold pl-2 pr-4 py-1 rounded my-auto'>
                            © Copyright Mote Building and Plastering 2023
                        </h1>
                        <h1 className='text-lighter mx-10 font-links text-xl font-semibold pl-2 pr-4 py-1 rounded my-auto'>
                            +44 7921 145948
                        </h1>
                        <Link href='https://www.facebook.com/mote.building.and.plastering' className='text-lighter mx-10 font-links text-xl font-semibold pl-2 pr-4 py-1 rounded my-auto'>
                            Facebook
                        </Link>
                        <Link href='https://www.instagram.com/mote_building/?igshid=OGQ5ZDc2ODk2ZA%3D%3D' className='text-lighter mx-10 font-links text-xl font-semibold pl-2 pr-4 py-1 rounded my-auto'>
                            Instagram
                        </Link>
                    </div>
                </div>
        </footer>
    </>
  )
}

export default Footer