"use client"

import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const JobInfo = ({props}) => {
    const [ref, inView] = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if(inView) {
        controls.start({x: 0,
            transition: {
            type: 'spring', duration: 1, bounce: 0.2
            }});
        }
        if(!inView) {
        controls.start({x: props.slide});
        }
    }, [inView]);

    return (
        <div className='mb-8 mt-0 inline-block w-5/12 ml-10' ref={ref}>  
            <motion.div animate={controls} className={`w-full bg-${props.color} rounded-md`}>
                <h1 className={`font-links text-3xl text-${props.textColor} px-4 py-5 font-bold`}>{props.title}</h1>
                <p className={`font-info text-xl text-${props.textColor} px-4 pb-5`}>{props.text}</p>
            </motion.div>
        </div>
        
    )
}

export default JobInfo