import React from 'react'

const About = () => {
  return (
    <>
        <div className='w-full bg-main h-20' id='about'></div>
        <div className='w-1/2 mx-auto'>
            <h1 className='font-links mx-auto text-6xl pt-20 pb-4'>About us</h1>
            <p className='font-info w-50px text-lg'>We are a dedicated, family run building a plastering company based in southeast England. We have been in the industry for over 30 years and have developed a range of skills allowing us to deliver high quality service to our customers.</p>
            <img className='h-auto w-full py-8' src='/2.jpg'></img>
            <div className='rounded-md bg-darker mb-8'>
                <h1 className='font-info text-xl text-lighter p-5'>Our journey:</h1>
                <p className='font-info text-lg px-5 pb-5 text-lighter'>Lorem ipsum</p>
            </div>
        </div>
        
    </>
    
  )
}

export default About