import React from 'react'
import Image from 'next/image' // if you're using Next.js
import {motion} from "motion/react"
const DownloadDiv = () => {
  return (
    <>
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-20 px-6 md:pl-30 md:pr-20 py-20">
      
      <motion.div initial={{opacity:0, x:-300}} whileInView={{opacity:1, x:0}} transition={{duration:0.3, ease:"easeInOut"}} className="w-full md:w-[35%] flex flex-col items-start   ">
        <motion.h2 initial={{opacity:0, x:-300}} whileInView={{opacity:1, x:0}} transition={{duration:0.2, ease:"easeInOut"}} className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
        Download our mobile apps
        </motion.h2>
        <motion.div initial={{opacity:0, x:-300}} whileInView={{opacity:1, x:0}} transition={{duration:0.2, ease:"easeInOut"}} className="w-[30%] bg-white h-[1px] mb-8"></motion.div>
        <motion.p initial={{opacity:0, x:-300}} whileInView={{opacity:1, x:0}} transition={{duration:0.3, ease:"easeInOut"}} className="text-gray-400 mb-8 max-w-md">
        Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely
        </motion.p>
        <motion.button initial={{opacity:0, x:-300}} whileInView={{opacity:1, x:0}} transition={{duration:0.3, ease:"easeInOut"}}  className="px-6 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition">
          Learn more
        </motion.button>
      </motion.div>
      <motion.div initial={{opacity:0, x:300}} whileInView={{opacity:1, x:0}} transition={{duration:0.4, ease:"easeInOut"}} className="w-full md:w-[55%] flex justify-center">
        <Image 
          src="/app-illut.png" // Replace with your image path
          alt="Healthcare illustration"
          width={600}
          height={600}
          className="object-contain"
          />
      </motion.div>

    </div>
          </>
  )
}

export default DownloadDiv
