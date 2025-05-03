
import { useState } from 'react'
import headPhone1 from '../../assets/headphone.png'
import headPhone2 from '../../assets/headphone2.png'
import headPhone3 from '../../assets/headphone3.png'
import { FaWhatsapp } from 'react-icons/fa'
import { AnimatePresence, easeInOut, motion } from "motion/react"
import { UpdateFollower } from 'react-mouse-follower'


interface HeadphoneType{
    id: number;
    title: string;
    image: string;
    price: string;
    modal: string;
    bgColor: string;
    subtitle: string;
} 
const headPhoenData : HeadphoneType[] = [
    { id: 1, title: 'Headphone Wireless 1', image: headPhone1, price: "$100", modal: "Modal Brown", bgColor: "#8b5958", subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, title: 'Headphone Wireless 2', image: headPhone2, price: "$100", modal: "Lime Green", bgColor: "#638153", subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Headphone Wireless 3', image: headPhone3, price: "$100", modal: "Ocean Blue", bgColor: "#5d818c", subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
]


// initialize the variants for the animation
const fade = (delay: number) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut
            }
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut
            }
        }
    }
}

const Hero = () => {
    const [active, setActive] = useState(headPhoenData[0]);
    const handleActiveData = (data:HeadphoneType) => {
        setActive(data)
    }
    return (
        <>
            <section className='bg-[#151616] text-white px-10'>
                <div className=" grid grid-cols-1 md:grid-cols-2 min-h-[700px] ">
                    {/* pbrand info  */}
                    <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] '>
                        <div className='space-y-4 text-center md:text-start'>
                            <AnimatePresence mode='wait'>
                                <UpdateFollower mouseOptions={{
                                    zIndex: 9999,
                                    followSpeed: 1.5,
                                    backgroundColor: "white",
                                    scale: 10,
                                    rotate: -720,
                                    mixBlendMode: "difference"
                                }}>
                                    <motion.h1 key={active.id} variants={fade(0.2)} initial="hidden" animate="show" exit="exit" className='text-3xl lg:text-6xl font-bold '>{active.title}</motion.h1>
                                </UpdateFollower>
                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <motion.p key={active.id}  variants={fade(0.3)} initial="hidden" animate="show" exit="exit" className='text-sm leading-loose text-white/80 '>{active.subtitle}</motion.p>
                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                            <UpdateFollower 
                            mouseOptions={{ zIndex: 9999,
                                    followSpeed: 1.5,
                                    backgroundColor: active.bgColor,
                                    scale: 6,
                                    rotate: -720,

                                    backgroundElement:(
                                        <div>
                                            <img src={active.image} alt="" />
                                        </div>
                                    )
                                    
                                }}>
                                <motion.button key={active.id}  variants={fade(0.3)} initial="hidden" animate="show" exit="exit" style={{ backgroundColor: active.bgColor }} className='px-4 py-2 cursor-pointer rounded-lg inline-block  font-normal rounded-sm'>Buy and Listen</motion.button>
                            </UpdateFollower>
                            </AnimatePresence>

                            <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                                <div className='w-20  h-[1px] bg-white  '></div>
                                <p className='uppercase text-sm '>Top Headphones For You</p>
                                <div className='w-20  h-[1px] bg-white  '></div>
                            </div>

                            {/* list seperator  */}
                            <div className='grid grid-cols-3 gap-4'>
                                {
                                    headPhoenData.map((item) => {
                                        return (
                                            <UpdateFollower mouseOptions={{
                                                zIndex: 9999,
                                                followSpeed: 1.5,
                                                backgroundColor: item.bgColor,
                                                scale: 5,
                                                text:"View Details",
                                                textColor:"white",
                                                textFontSize:"3px"
                                            }}>
                                            <div onClick={() => handleActiveData(item)} className='grid grid-cols-2 placed-items-center cursor-pointer'>
                                                <div>
                                                    <img className='w-[200px] ' src={item.image} alt="" />
                                                </div>
                                                <div className='space-y-2 '>
                                                    <p className='text-base font-bold '>{item.price}</p>
                                                    <p className='text-xs font-normal text-nowrap '>{item.modal}</p>
                                                </div>
                                            </div>
                                            </UpdateFollower>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* big imaeg  */}
                    <div className='flex flex-col  justify-end items-center  '>
                        <AnimatePresence mode='wait'>
                        <motion.img key={active.id} variants={fade(0.3)} initial={{opacity:0, scale:0.9 , y:100}} animate={{opacity:1, scale:1, y:0}} transition={{duration:0.4, delay:0.2 , ease:"easeInOut"}} exit={{opacity:0, scale:0.9, y:100, transition:{duration:0.2} }} className='w-[300px] md:w-[400px] xl:w-[550px]    ' src={active.image} alt="" />
                      </AnimatePresence>
                    </div>
                    {/* all products */}
                    <div className=''>
                        <a href="">
                            <FaWhatsapp className='text-3xl text-white fixed bottom-10 right-10 hover:rotate[-360deg] duration:500 z-[0909999] mix-blend-difference    ' />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
