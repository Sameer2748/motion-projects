import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {motion} from "motion/react";

const Navbar = ({onClick}) => {
  return (
    <motion.nav initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{type:"spring", stiffness:100, damping:10, delay:1}} className='absolute top-0 left-0 w-full h-[50px] text-white flex items-center justify-between px-10 z-50 mt-7'>
      <div className='w-full h-full bg-gray-800 backdrop-blur-3xl rounded-lg shadow-lg px-4'>
        <div className='flex items-center justify-between w-full h-full' >
            {/* logo section */}
            <h1 className='text-2xl font-semibold text-orange-300  cursor-pointer'>Coders. <span className='text-white'>Cafe</span></h1>
            {/* hamburger section */}
            <div className=' cursor-pointer  ' onClick={onClick}>
                <GiHamburgerMenu className='text-3xl text-white' />
            </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
