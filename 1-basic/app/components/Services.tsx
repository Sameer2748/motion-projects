import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react";

const Services = () => {
  const cards = [
    {
      title: "Search doctor",
      description: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      image: "/Frame.svg",
      initalx:335,
      initialy:150,
      animatex:0,
      animaty:0,
      duration:0.1
    },
    {
      title: "Online pharmacy",
      description: "Buy your medicines with our mobile application with a simple delivery system",
      image: "/Frame1.svg",
      initalx:0,
      initialy:150,
      animatex:0,
      animaty:0,
      duration:0.2
    },
    {
      title: "Consultation",
      description: "Free consultation with our trusted doctors and get the best recommendations",
      image: "/Frame2.svg",
      initalx:-335,
      initialy:150,
      animatex:0,
      animaty:0,
      duration:0.3

    },
    {
      title: "Details info",
      description: "Free consultation with our trusted doctors and get the best recommendations",
      image: "/Frame3.svg",
      initalx:335,
      initialy:-150,
      animatex:0,
      animaty:0,
      duration:0.4

    },
    {
      title: "Emergency care",
      description: "You can get 24/7 urgent care for yourself or your children and your lovely family",
      image: "/Frame4.svg",
      initalx:0,
      initialy:-150,
      animatex:0,
      animaty:0,
      duration:0.5

    },
    {
      title: "Tracking",
      description: "Track and save your medical history and health data",
      image: "/Frame5.svg",
      initalx:-335,
      initialy:-150,
      animatex:0,
      animaty:0,
      duration:0.6
    },
  ];
  const getValByIndex= (index)=>{

  }

  return (
    <div className='w-full flex flex-col items-center px-6 md:px-20 lg:px-40 my-20 pt-10 gap-6'>
      <motion.h1 initial={{opacity:0, filter:'blur(10px)'}} transition={{duration:0.3, ease:"easeInOut"}} whileInView={{opacity:1,scale:0.98, filter:'blur(0px)'}}  className='font-semibold text-3xl text-white'>Our services</motion.h1>
      <motion.div  initial={{opacity:0, filter:'blur(10px)'}} transition={{duration:0.4, ease:"easeInOut"}} whileInView={{opacity:1,scale:0.98, filter:'blur(0px)'}} className='w-14 h-[2px] bg-white'></motion.div>

      <motion.p  initial={{opacity:0, filter:'blur(10px)'}} transition={{duration:0.5, ease:"easeInOut"}} whileInView={{opacity:1,scale:0.98, filter:'blur(0px)'}} className='text-center text-gray-400 max-w-3xl leading-7'>
        We provide to you the best choices. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors. You can consult with us to see which type of service is suitable for your health.
      </motion.p>

      <motion.div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
      {cards.map((card, index) => (
  <motion.div initial={{x:card.initalx, y:card.initialy, opacity:1, filter:"blur(10px)"}} whileInView={{x:card.animatex, y:card.animaty, opacity:1,filter:"blur(0px)"}} transition={{duration:card.duration,ease:'easeInOut'}} key={index} className='flex bg-zinc-900 flex-col justify-start items-start p-8 rounded-2xl shadow-md hover:shadow-lg transition'>
    <div className='w-16 h-16 flex items-center justify-center mb-6'>
      <Image src={card.image} alt={card.title} width={40} height={40} />
    </div>
    <h2 className='text-xl font-semibold text-white'>{card.title}</h2>
    <p className='text-gray-400 mt-4'>{card.description}</p>
  </motion.div>
))}

      </motion.div>

      <button className='mt-10 border-2 border-cyan-500 text-cyan-500 px-8 py-3 rounded-full hover:bg-cyan-500 hover:text-white transition'>
        Learn more
      </button>
    </div>
  )
}

export default Services
