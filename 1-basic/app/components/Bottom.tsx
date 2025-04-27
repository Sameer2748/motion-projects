import React from 'react';
import {motion} from "motion/react"
const Bottom = () => {
  return (
    <motion.div initial={{opacity:0, filter:"blur(10px)"}} whileInView={{opacity:1, filter:"blur(0px)"}} transition={{duration:0.5, ease:"easeInOut"}}  className="w-full flex justify-between px-40 py-10 ">
         <div className="bg-gray-800 text-white p-6 rounded-lg max-w-xs">
        <h2 className="text-lg mb-4">Company Name: Trafalgar</h2>
        <p className="text-sm leading-relaxed">
          Trafalgar is a leading provider of world-class services and solutions. 
          We are committed to delivering excellence and providing innovative products to our clients.
        </p>
      </div>
      {/* Lists Container */}
      <div className=" w-full flex   justify-center py-10 gap-12">
        <div>
<h1 className='font-bold text-xl mb-2 '>Company</h1>
        <ul className="flex flex-col list-none gap-2">
          <li>About us</li>
          <li>Testimonials </li>
          <li>Find a doctor </li>
        </ul>
        </div>
        <div>
        <h1 className='font-bold text-xl mb-2 '>Region</h1>

        <ul className=" flex flex-col list-none gap-2">
          <li>Indonasia </li>
          <li>Singapore </li>
          <li>Hawaii</li>

        </ul>
        </div>
        <div>
        <h1 className='font-bold text-xl mb-2 '>Help</h1>

        <ul className="flex flex-col list-none gap-2">
          <li>Help Center</li>
          <li>Contact Support</li>
          <li>Instructions</li>
        </ul>
        </div>
      </div>

      {/* Info Container */}
     
    </motion.div>
  );
};

export default Bottom;
