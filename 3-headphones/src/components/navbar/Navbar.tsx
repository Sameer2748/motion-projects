
import { MdMenu } from 'react-icons/md'
import { SlEarphones } from 'react-icons/sl'
import {motion} from "motion/react" 
import { UpdateFollower } from 'react-mouse-follower'
// primary #aa6d6b
// brandrdark #151616

const Navbar = () => {
    const Nevbarmenus = [
    {id:1, name: 'Home', link: '/' },
    {id:2, name: 'Products', link: '/products' },
    {id:3, name: 'About', link: '/about' },
    {id:4, name: 'Contact', link: '/contact' },
    ]
  return (
    <>
    <div className='bg-[#151616] text-white py-4'>
    <motion.nav initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.5,}}  className='flex justify-between items-center  text-white px-10'>
      <div>
        <a className='text-xl font-bold uppercase' href="#">
        Playing / <span className='font-extralight  text-white/70'>Market</span>
        </a>
      </div>
      <div className='hidden md:block'>
        <ul className='flex items-center gap-4'>
            {Nevbarmenus.map((menu) => (
                <li key={menu.id}>
                    <UpdateFollower
    mouseOptions={{
      zIndex:9999,
      followSpeed:1.5,
      backgroundColor:"white" ,
      scale:5,
      mixBlendMode:"difference"
    }}
     >
                    <a className='inline-block text-sm py-2 px-3 uppercase  ' href={menu.link}>{menu.name}</a> 
     </UpdateFollower>
                </li>
            ))}
            <UpdateFollower
    mouseOptions={{
      zIndex:9999,
      followSpeed:1.5,
      backgroundColor:"white" ,
      scale:5,
      mixBlendMode:"difference"
    }}
     >
            <button className='text-xl ps-14 '>
                <SlEarphones/>
            </button>
     </UpdateFollower>
        </ul>
      </div>
      <div className='md:hidden'>
        <MdMenu className='text-4xl ' />
      </div>
    </motion.nav>
    </div>
    </>
  )
}

export default Navbar
