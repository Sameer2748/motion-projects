import React from 'react'
import WorldMap from '../../assets/world-map.png'

import {motion} from "motion/react"
const WhereToBuy = () => {
  return (
    <div className='w-full h-[600px] flex justify-center items-center my-10 mx-[13px] md:mx-20 '>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center '>
        {/* formsection */}
        <div className='space-y-8'>
            <motion.h1 initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{type:"spring",stiffness:100, damping:10, delay:0.2}} className='text-3xl font-bold  text-gray-600'>
                Buy our products from anywhere in the world
            </motion.h1>
            <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{type:"spring",stiffness:100, damping:10, delay:0.4}} className='flex items-center gap-4'>
                <input type="text" placeholder='Name' className='input-style w-full  lg:w-[150px] '  />                
                <input type="email" placeholder='Email'  className='input-style w-full   ' />                
            </motion.div>
            <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{type:"spring",stiffness:100, damping:10, delay:0.6}} className='flex items-center gap-4'>
                <input type="text" placeholder='Country' className='input-style w-full  '  />                
                <input type="text" placeholder='ZipCode'  className='input-style w-full  lg:w-[150px] ' />                
            </motion.div>
            <motion.button initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{type:"spring",stiffness:100, damping:10, delay:0.8}} className='w-full px-4 py-2 rounded-md text-white bg-amber-500 hover:bg-orange-500 duration-200 '>Order Now</motion.button>
        </div>
        {/* world map  */}
        <div className='col-span-2 '>
            <motion.img initial={{opacity:0, scale:0.5}} whileInView={{opacity:1, scale:1}} transition={{type:"spring",stiffness:100, damping:10, delay:1}}  src={WorldMap} alt="" className='w-full sm:w-[500px] mx-auto  ' />
        </div>
      </div>
    </div>
  )
}

export default WhereToBuy
