import React from 'react'
import Image from 'next/image' // if you're using Next.js
import { motion } from 'motion/react'


const Providers = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-20 px-6 md:pr-30 md:pl-20 py-20">
      
      {/* Left Side Image */}
      <motion.div initial={{opacity:0, x:-300, y:0}} whileInView={{opacity:1, x:0, y:0}} transition={{duration:0.4}} className="w-full md:w-[55%] flex justify-center">
        <Image 
          src="/provider-illut.png" // Replace with your image path
          alt="Healthcare illustration"
          width={600}
          height={400}
          className="object-contain"
        />
      </motion.div>

      {/* Right Side Text */}
      <motion.div initial={{opacity:0, x:300}} whileInView={{opacity:1, x:0}} transition={{duration:0.3, ease:"easeInOut"}} className="w-full md:w-[35%] flex flex-col items-start ">
        <motion.h2 initial={{opacity:0, x:300}} whileInView={{opacity:1, x:0}} transition={{duration:0.2, ease:"easeInOut"}} className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
          Leading healthcare<br />providers
        </motion.h2>
        <motion.div initial={{opacity:0, x:300}} whileInView={{opacity:1, x:0}} transition={{duration:0.2, ease:"easeInOut"}} className="w-[30%] bg-white h-[1px] mb-8"></motion.div>
        <motion.p initial={{opacity:0, x:300}} whileInView={{opacity:1, x:0}} transition={{duration:0.3, ease:"easeInOut"}} className="text-gray-400 mb-8 max-w-md">
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. 
          To us, it’s not just work. We take pride in the solutions we deliver.
        </motion.p>
        <motion.button initial={{opacity:0, x:300}} whileInView={{opacity:1, x:0}} transition={{duration:0.3, ease:"easeInOut"}} className="px-6 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition">
          Learn more
        </motion.button>
      </motion.div>

    </div>
  )
}

export default Providers
