import React from 'react'
import BgImage from '../../assets/bg-slate.png'
import CoffeeMain from '../../assets/black.png'
import Navbar from '../navbar/Navbar'
import {motion} from "motion/react"
import { FaTwitter, FaInstagram, FaPinterest, FaLinkedin, FaFacebookF, FaGithub} from 'react-icons/fa'
const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroudSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}
const Hero = () => {

    const [hide, setHide] = React.useState(false);
    const handleClick = () => {
        setHide(!hide);
    }
  return (
    <main  style={bgImage}>
      <section className='realtive min-h-[750px] w-full '>
        <div className='flex items-center justify-center '>
            {/* navbar section */}
            <Navbar onClick={handleClick}/>
            {/* hero seection */}
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
                {/* text seclighttion */}
                <div className='text-orange-300 mt-[100px] md:mt-0 lg:mt-0 p-4  space-y-28'>
                    <motion.h1 initial={{opacity:0, y:-100}} whileInView={{opacity:1, y:0}} transition={{type:"spring", stiffness:100, damping:10, delay:0.8}} className='text-7xl fotn-bold leading-tight ml-14  '>Black Tumbler</motion.h1>
                    <motion.div  initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{type:"spring", stiffness:100, damping:10, delay:1}} className='relative '>
                        <div className='relative z-10 space-y-4'> 
                            <h1 className='text-2xl'>Black Lifestyle Lovers </h1>
                            <h1 className='text-xl opacity-45 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quia omnis? Soluta hic officiis officia possimus. </h1>
                        </div>
                        <div className='absolute z-0 -top-6 -left-10 w-[250px] h-[170px]  bg-gray-700/25   ' >

                        </div>
                    </motion.div>

                </div>
                {/* imafe section */}
                <div className='relative z-40  h-[400px] md:h-[700px]   '>
                    <motion.img initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{type:"spring", stiffness:100, damping:10, delay:0.4}} src={CoffeeMain} alt="" className='relative  h-[400px] md:h-[700px]  img-shadow z-[999]' />
                    {/* oragneg ring circle */}
                    <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{type:"spring", stiffness:100, damping:10, delay:0.8}} className='w-[180px]  h-[180px]  absolute  top-24 -right-16 border-10 border-orange-500 rounded-full' ></motion.div>
                    {/* big text section */}
                    <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{type:"spring", stiffness:100, damping:10, delay:0.8}} className='absolute -top-20 left-[200px] z-[1]  '>
                        <h1 className='text-[140px] scale-150 font-bold text-gray-600 opacity-6  leading-none'>
                        Blvck Tumbler
                        </h1>
                    </motion.div>
                </div>
                {/* text section */}
                <div className='hidden lg:block'>

                <motion.div  initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{type:"spring", stiffness:100, damping:10, delay:1}} className='text-orange-300 mt-[100px] md:mt-0 lg:mt-0 p-4 pl-10 space-y-28'>
                    <h1 className='opacity-0 text-7xl fotn-bold leading-tight ml-14  '>Black Tumbler</h1>
                    <div className='relative '>
                        <div className='relative z-10 space-y-4'> 
                            <h1 className='text-2xl'>Blvck Tumbler</h1>
                            <h1 className='text-xl opacity-45 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quia omnis?</h1>
                        </div>
                        <div className='absolute z-0 -top-6 right-0  w-[250px] h-[170px]  bg-gray-900/25   ' ></div>
                    </div>

                </motion.div>
                </div>
            </div>
        </div>
        {/* siudebar hidden  */}
        {
            hide && (
        <div className='absolute top-0 right-0 w-[140px] h-full bg-orange-400 z-10'>
            <div className=' w-full h-full flex justify-center items-center'>
            <div className='w-full h-full  flex flex-col  items-center justify-center gap-6 text-white'>
                <div className='w-[1px] h-[70px] bg-white'></div>
                {/* socail icons  */}
            
                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                <FaTwitter className='text-2xl' />

                </div>
                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                <FaInstagram className='text-2xl' />

                </div>
                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                    <a href="https://www.linkedin.com/in/sameer-rao-7576261ab/" target='_blank'>
                <FaLinkedin className='text-2xl' />
                    </a>

                </div>
                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                    <a href="https://github.com/Sameer2748" target="_blank">
                <FaGithub className='text-2xl' />
                    </a>

                </div>
                <div className='w-[1px] h-[70px] bg-white'></div>

            </div>

            </div>

        </div>

            )
        }
      </section>

    </main>
  )
}

export default Hero
