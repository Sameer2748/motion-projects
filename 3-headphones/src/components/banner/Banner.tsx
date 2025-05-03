import { UpdateFollower } from 'react-mouse-follower'
import  headphone4 from '../../assets/headphone4.png'
import {motion} from "motion/react"
import {fade} from "../services/Services"

const Banner = () => {
  return (
    <>
     <section>
        <div className='py-14 px-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12'>
            <div>
                <motion.img initial={{opacity:0, x: -100 , rotate: -180}} whileInView={{opacity:1, x:0, rotate:0}} transition={{ duration:0.8 , ease:"easeInOut", delay:0.2}}  src={headphone4} alt="" className='w-[300px] md:w-[400px]   ' />
            </div>
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                    <motion.h1 variants={fade(0.7)} initial="hidden" whileInView="show" className='text-3xl lg:text-4xl font-semibold '>The Latest Headphone With Latest Technology</motion.h1>
                    <motion.p variants={fade(0.9)} initial="hidden" whileInView="show" className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eveniet sit quibusdam, saepe iusto eum quos possimus a nostrum dolorem maiores reiciendis totam magni rem accusantium doloremque, deserunt, odio expedita!</motion.p>
                    <UpdateFollower mouseOptions={{
                        zIndex:9999,
                        followSpeed:1.5,
                        backgroundColor:"white",
                        scale:6,
                        mixBlendMode:"difference",

                    }}>
                    <motion.button variants={fade(1.1)} initial="hidden" whileInView="show" className='border cursor-pointer border-[#e33343] text-[#e33343] hover:bg-[#e33343] hover:text-white  text-xl rounded-xl px-6 py-2'>Shop Now</motion.button>
                    </UpdateFollower>
                </div>
            </div>
        </div>
        </section> 
    </>
  )
}

export default Banner
