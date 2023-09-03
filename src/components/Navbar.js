'use client'



import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    return (
        <>
            <div className ='flex items-center bg-light m-0'>
                <div className='mx-auto my-1.5'>
                        <p className='text-lighter mx-40 font-links text-base font-medium inline-block'>+44 7921 145948</p>
                        <Link href='https://www.facebook.com/mote.building.and.plastering' className='text-lighter mx-40 font-links text-base font-medium inline-block'>Facebook</Link>
                        <Link href='https://www.instagram.com/mote_building/?igshid=OGQ5ZDc2ODk2ZA%3D%3D' className='text-lighter mx-40 font-links text-base font-medium inline-block'>Instagram</Link>
                </div>
            </div>
            <header className= 'bg-darker px-2 h-96px'>
                <div className='flex gap-10 items-center'>
                    <Link href="/">
                        <Image src="/logo.png" width={300} height={96} alt="logo" />
                    </Link>
                    <div className='flex ml-auto my-auto mr-10 h-full'>
                        <Link href='#jobs' className='text-lighter mx-10 font-links text-xl font-semibold italic hover:bg-light pl-2 pr-4 py-1 rounded'>
                            What we do
                        </Link>
                        <Link href='#about' className='text-lighter mx-10 font-links text-xl font-semibold italic hover:bg-light pl-2 pr-4 py-1 rounded'>
                            About us
                        </Link>
                        <Link href='#contact' className='text-lighter mx-10 font-links text-xl font-semibold italic hover:bg-light pl-2 pr-4 py-1 rounded'>
                            Contact us
                        </Link>
                    </div>
                </div>
                
            </header>
        </>
    )
}

export default Navbar