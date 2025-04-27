import Image from 'next/image' 
import React from 'react' 
import { motion } from "motion/react";  // Make sure this is the correct import

const Hero = () => {
  return (
    <>
      <Image className='absolute left-0 top-25' src="/element.svg" alt="" width={50} height={50} />
      <div className='w-full h-[70vh] flex justify-center items-center px-35 py-20 gap-6'>
        <div className='flex justify-center items-center w-1/2'>
          <div className='relative w-full h-full flex flex-col gap-6 items-start p-5'>
            <motion.h1 
              initial={{x:-600, opacity:0}} 
              animate={{x:0, opacity:1}} 
              transition={{duration:0.3, ease:"easeInOut"}} 
              className='font-bold text-5xl'>
              Virtual healthcare for you
            </motion.h1>
            <motion.p  
              initial={{x:-600, opacity:0}} 
              animate={{x:0, opacity:1}} 
              transition={{duration:0.5, ease:"easeInOut"}} 
              className='text-gray-400 text-lg'>
              Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
            </motion.p>
            <motion.button 
              initial={{x:-600, opacity:0}} 
              animate={{x:0, opacity:1}} 
              transition={{duration:0.7, ease:"easeInOut"}}  
              className='bg-cyan-500 px-6 py-3 rounded-2xl'>
              consult today
            </motion.button>
          </div>
        </div>
        <motion.div 
          initial={{y:-600, opacity:0}} 
          animate={{y:0, opacity:1}} 
          transition={{duration:0.5, ease:"easeInOut"}} 
          className='w-1/2 h-full'>
          <Image src="/hero-illust.png" alt="hero image" width={500} height={400} className='absolute top-[150px]' />
        </motion.div>
      </div>
    </>
  )
}

export default Hero