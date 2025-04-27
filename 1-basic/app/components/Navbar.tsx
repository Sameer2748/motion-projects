import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react";

const Navbar = () => {
  return (
    <motion.div initial={{ opacity: 0  }}
    whileInView={{ opacity: 1 }} transition={{ease:"easeInOut", duration:0.6}} className='w-full px-40 py-10  flex justify-between items-center'>
        <div className='flex justify-center items-center gap-3'>
            <div className='rounded-full bg-cyan-500 flex items-center justify-center'>
                <h1 className='text-white px-3 py-1 text-xl font-bold'>T</h1>
            </div>
            <h1 className='font-semibold text-xl'>Trafalgar</h1>
        </div>
        <div className='flex jsutify-between items-center gap-10'>
            <h1 className='text-white cursor-pointer'>Home</h1>
            <h1 className='text-gray-500 cursor-pointer'>Find a doctor </h1>
            <h1 className='text-gray-500 cursor-pointer'>App</h1>
            <h1 className='text-gray-500 cursor-pointer'>Testimonails</h1>
            <h1 className='text-gray-500 cursor-pointer'>About US</h1>
        </div>
    </motion.div>
  )
}

export default Navbar
