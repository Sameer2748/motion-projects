import React, { useState } from 'react'
import Image from 'next/image'
import {motion} from "motion/react";

const testimonialsData = [
  {
    name: 'Edward Newgate',
    title: 'Founder Circle',
    image: '/avatar.jpg', // replace with real image
    text: `Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely`
  },
  {
    name: 'Sarah Johnson',
    title: 'CEO of Healthify',
    image: '/avatar2.jpg',
    text: `Healthify made it so easy for us to manage our clients securely without any paperwork headache. Highly recommend!`
  },
  {
    name: 'Michael Chen',
    title: 'CTO at MedTech',
    image: '/avatar3.jpg',
    text: `The app integration and real-time updates improved our operational speed by 60%. Great experience!`
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length)
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  const { name, title, image, text } = testimonialsData[current]

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-20 py-20 bg-black">

      {/* Heading */}
      <motion.h2 initial={{opacity:0, filter:"blur(10px)"}} whileInView={{opacity:1, filter:"blur(0px)"}} transition={{duration:0.4, ease:"easeInOut"}} className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
        What our customers are saying
      </motion.h2>
      <motion.div initial={{opacity:0, filter:"blur(10px)"}} whileInView={{opacity:1, filter:"blur(0px)"}} transition={{duration:0.4, ease:"easeInOut"}} className="w-24 h-1 bg-blue-500 rounded-full mb-12"></motion.div>

      {/* Testimonial Card */}
      <motion.div initial={{opacity:0, filter:"blur(10px)"}} whileInView={{opacity:1, filter:"blur(0px)"}} transition={{duration:0.5, ease:"easeInOut"}} className="bg-[#121212] border border-[#333] rounded-2xl p-10 w-full md:w-[70%] flex flex-col md:flex-row items-center gap-10 shadow-lg">

        {/* Left: Image and Info */}
        <div className="flex flex-col items-center text-center md:text-left">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-500">
            <Image 
              src={image}
              alt={name}
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>

        {/* Right: Testimonial Text */}
        <p className="text-gray-300 text-lg leading-relaxed md:pr-10 text-center md:text-left">
          "{text}"
        </p>

      </motion.div>

      {/* Dots and Arrows */}
      <div className="flex items-center justify-center gap-6 mt-10">
        {/* Left Arrow */}
        <button 
          onClick={prevTestimonial} 
          className="text-blue-400 hover:text-blue-600 text-2xl"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonialsData.map((_, idx) => (
            <div 
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-400' : 'bg-gray-600'}`}
            ></div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextTestimonial} 
          className="text-blue-400 hover:text-blue-600 text-2xl"
        >
          →
        </button>
      </div>

    </div>
  )
}

export default Testimonials
