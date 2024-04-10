"use client"

import React from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const [ref, inView] = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if(inView) {
          controls.start({opacity: 1, scale: 1,
            transition: {
              duration: 0.5 
            }});
        }
        if(!inView) {
          controls.start({ opacity: 0, scale: 0.5 });
        }
    }, [inView]);

    return (
        <>
            <div className='w-full bg-darkBlue h-20' id='contact'></div>
            <div ref={ref} className='my-16 w-1/2 mx-auto'>
                <h1 className='font-links text-6xl p-5 text-center mb-8'>Contact Us</h1>
                <motion.div animate={controls} className='rounded-md bg-pink w-4/6 mx-auto'>
                    <h1 className='font-info text-2xl text-lighter p-5 font-bold'>Phone number: +44 7921 145948</h1>
                    <h1 className='font-info text-2xl text-lighter p-5 font-bold'>Location: Southeast England</h1>
                    <Link href='https://www.facebook.com/mote.building.and.plastering' className='font-info text-2xl text-lighter p-5 font-bold block'>Facebook: @mote.building.and.plastering</Link>
                    <Link href='https://www.instagram.com/mote_building/?igshid=OGQ5ZDc2ODk2ZA%3D%3D' className='font-info text-2xl text-lighter p-5 font-bold block'>Instagram: @mote_building</Link>
                </motion.div>
            </div>
                
        </>
    )
}

export default Contact