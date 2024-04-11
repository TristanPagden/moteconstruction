"use client"

import React from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
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
        <div className='w-full bg-main h-20' id='about'></div>
        <div ref={ref}>
          <motion.div animate={controls} className='w-1/2 mx-auto'>
              <h1 className='font-links mx-auto text-6xl pt-20 pb-4'>About us</h1>
              <p className='font-info w-50px text-xl'>We are a dedicated, family run building a plastering company based in southeast England. We have been in the industry for over 30 years and have developed a range of skills allowing us to deliver high quality service to our customers.</p>
              <img className='h-auto w-full py-10' src='/2.jpg' alt='2'></img>
              <div className='rounded-md bg-darkBlue mb-8 w-4/6 inline-block'>
                  <h1 className='font-links text-3xl text-lighter p-5 font-bold'>Our journey:</h1>
                  <p className='font-info text-xl px-5 pb-5 text-lighter'>We’ve been in the building and plastering industry for over 30 years now, and during that time, we’ve developed a range of skills that extend far beyond just plastering walls. While plastering is our specialty, we’ve picked up a range of other skills that have allowed me to build and repair houses from the ground up. We have a competent team that can deliver quality work to clients in southeast England.</p>
                  <p className='font-info text-xl px-5 pb-5 text-lighter'></p>
              </div>
              <div className='mb-8 mt-0 inline-block w-1/3 p-5 ml-0 align-top'>
                  <h1 className='font-links text-3xl pl-8 pb-5 font-bold'>Our team:</h1>
                  <p className='font-info text-xl pl-8 py-5'>• Raymond Mote</p>
                  <p className='font-info text-xl pl-8 py-5'>• Archie Differ-mote</p>
              </div>
              <div className='rounded-md bg-maroon mb-16 w-1/2 mx-auto'>
                <h1 className='px-5 pt-5 text-4xl font-links text-lighter text-center mb-1'>Want to see what we do?</h1>
                <div className='mx-auto text-center'>
                  <Link href='#jobs' className='text-lighter text-2xl font-links rounded-md hover:bg-light text-center pl-2 py-1 pr-3 inline-block mb-2 italic'>Our work</Link>
                </div>
              </div>
          </motion.div>
        </div>
        
        
    </>
    
  )
}

export default About