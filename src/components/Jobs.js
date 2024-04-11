
import React from 'react'
import JobInfo from './JobInfo'

const Jobs = () => {
  return (
    <>
      <div className='w-full bg-pink h-20' id='jobs'></div>
      <div className='w-1/2 mx-auto mb-16'>
        <h1 className='font-links mx-auto text-6xl pt-20 pb-4 mx-auto text-center'>What we do</h1>
        <div className='mx-auto pb-8'>
            <img className='inline-block h-auto w-3/6 align-top ml-5' src='/plastering.png' alt='plastering'></img>
            <JobInfo props={{slide: '100vw', color:'main', title:'Plastering', text:'We are very experienced with plastering and it is the skill that we first learned making us experts able to deliver high quality plastering work. While plastering is our specialty, We’ve picked up a range of other skills that have allowed us to build and repair houses from the ground up.'}}/>
        </div>
        <div className='mx-auto pb-8'>
            <JobInfo props={{slide: '-100vw', color:'darkBlue', textColor:'lighter', title:'Tiling', text:'In addition to those skills, we are also proficient in tiling work, allowing us to create stunning living spaces. This includes both wall and floor tiling, and we use a range of materials, patterns, and designs to add style and durability to homes.'}}/>
            <img className='inline-block h-auto w-3/6 align-top ml-10' src='/tiling.png' alt='tiling'></img>
        </div>
        <div className='mx-auto pb-8'>
            <img className='inline-block h-auto w-3/6 align-top ml-5' src='/painting.jpg' alt='painting'></img>
            <JobInfo props={{slide: '100vw', color:'main', title:'Painting', text:'We have skills in painting and decorating which are vital skills for building and repairing homes. They are required to create beautiful stunning living spaces allowing us to create quality looking homes that satisfy our clients needs.'}}/>
        </div>
        <div className='mx-auto pb-8'>
            <JobInfo props={{slide: '-100vw', color:'darkBlue', textColor:'lighter', title:'Flooring', text:'Flooring is another area of expertise, and we’ve installed a range of different materials, including hardwood, laminate, vinyl, and tile. And, as people with skills in woodwork, We are comfortable creating custom wood features like cabinetry, shelving, and trim work.'}}/>
            <img className='inline-block h-auto w-3/6 align-top ml-10' src='/flooring.jpg' alt='flooring'></img>
        </div>
        <div className='mx-auto pb-8'>
            <img className='inline-block h-auto w-3/6 align-top ml-5' src='/structural.jpg' alt='structural'></img>
            <JobInfo props={{slide: '100vw', color:'main', title:'Structural work', text:'We have skills in external structural steel work. This skill is a vital skill for building and reparing homes giving the home its structure that maintains is shape allowing us to deliver quality homes to our clients.'}}/>
        </div>
      </div>
    </>
    
  )
}

export default Jobs