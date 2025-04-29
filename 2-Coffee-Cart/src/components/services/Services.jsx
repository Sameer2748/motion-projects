import React from 'react'

import {motion} from "motion/react"
import Coffee1 from "../../assets/coffee/coffee1.png"
import Coffee3 from "../../assets/coffee/coffee3.png"
const Services = () => {
    const servicesdata = [  
{
        id:1,
        title:"Black Coffee",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        image: Coffee1
},
{
        id:2,
        title:"Hot Coffee",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        image: Coffee3
},
{
        id:3,
        title:"Cold Coffee",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        image: Coffee1
}
    ]

    const carVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition:{
                // duration: 0.5,
                ease: "easeInOut",
                type:"spring",
                stiffness: 150,
                damping: 10
            }
            
        }
    }

    const containerVariants = {
        hidden: {
            opacity: 0,
            
        },
        visible: {
            opacity: 1,
            transition: {
                delay:0.2,
                staggerChildren: 0.4,
            }
        }
    }
  return (
    <div className=' w-full  my-16 space-y-4'>
      <motion.div  className=' text-center max-w-lg mx-auto space-y-2'>
        <motion.h1 initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{type:"spring", stiffness:100, damping:10, delay:0.2}} className=' font-bold text-2xl '>
            Fresh and <span className='text-orange-300'>Tasty Coffee</span>
        </motion.h1>
        <motion.p initial={{opacity:0, scale:0.5 }} whileInView={{opacity:1, scale:1 }} transition={{type:"spring", stiffness:100, damping:10, delay:0.3}} className='text-sm  opacity-50 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis magni temporibus iste molestiae illo ut aspernatur voluptatum laborum. Similique, officia vel ea quod quam sequi aliquam! Vitae, dolorum. Accusamus, ut.</motion.p>
      </motion.div>
      {/* card section */}
      <motion.div variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{amount:0.6}} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8'>
        {
            servicesdata.map((item) => (
               <motion.div variants={carVariants}   className='text-center p-4 space-y-6'>
                <img  src={item.image} alt="" className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer " />
                <div className='p-4 sapace-y-2'>
                    <h1 className='text-2xl font-bold text-orange-300'>{item.title}</h1>
                    <p className='text-sm opacity-50'>{item.desc}</p>
                    </div>
               </motion.div>
            ))
        }
        
      </motion.div>      
    </div> 
  )
}

export default Services
