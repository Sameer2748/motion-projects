import React from 'react'
import icon1 from '../../assets/icons/obj1.png'
import icon2 from '../../assets/icons/obj2.png'
import icon3 from '../../assets/icons/obj3.png'
import icon4 from '../../assets/icons/obj4.png'
import { delay } from 'motion'
import { UpdateFollower } from 'react-mouse-follower'
import {motion}  from "motion/react"

export const fade = (delay)=>{
    return {
        hidden:{
            opacity:0,
            y:100
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                duration:0.5,
                delay:delay
            }
        }
    }
}

const ServiceData = [
    {
        id: 1,
        icon: icon1,
        title: 'Free Shipping',
        description: 'Get free shipping on all orders over $50.',
        delay: 0.5
    },
    {
        id: 2,
        icon: icon2,
        title: '24/7 Support',
        description: 'We offer 24/7 customer support.',
        delay: 0.7
    },
    {
        id: 3,
        icon: icon3,
        title: 'Money Back Guarantee',
        description: 'If you are not satisfied, we offer a money back guarantee.',
        delay: 0.9
    },
   
]
const Services = () => {
    return (
        <>
            <section className='bg-gray-100 py-8 '>
                <div className='flex flex-col  items-center justify-center pb-7 pt-14'>
                    <UpdateFollower mouseOptions={{
                        zIndex: 9999,
                        followSpeed: 1.5,
                        backgroundColor: "white",
                        scale: 6,
                        mixBlendMode:"difference"
                    }}>
                    <motion.h1 variants={fade(0.2)} initial="hidden" whileInView="show" className='text-4xl font-semibold pb-10'>Services</motion.h1>
                    </UpdateFollower>
                </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10  '>
                        {ServiceData.map((item) => (
                            <UpdateFollower 
                            mouseOptions={{
                                zIndex: 9999,
                                followSpeed: 1.5,
                                backgroundColor: "white",
                                rotate:-720,
                                scale:3,
                                backgroundElement:(
                                    <div>
                                        <img src={item.icon} alt="" />
                                    </div>
                                )

                            }}>
                            <motion.div variants={fade(item.delay)} initial="hidden" whileInView="show" key={item.id} className='flex flex-col items-center justify-center p-5 max-w-[500px] mx-auto cursor-pointer bg-white shadow-lg rounded-lg  '>
                                <img  src={item.icon} alt={item.title} className='w-[100px] mb-4 ' />
                                <div className='text-center space-y-2'>
                                <h2 className='text-xl font-semibold'>{item.title}</h2>
                                <p className='text-gray-600 text-center'>{item.description}</p>
                                </div>
                            </motion.div>
                            </UpdateFollower>
                        ))}
                    </div>
            </section>
        </>
    )
}

export default Services
