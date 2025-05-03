
import { UpdateFollower } from 'react-mouse-follower'

// create a grid footer 

// with 4 columns
// make it responsive also 
const Footer = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#aa6d6b] text-white px-14 py-10 text-center sm:text-left">
                <div className="col-span-1 max-w-[250px] mx-auto sm:mx-0">
                    <UpdateFollower mouseOptions={{
                        zIndex: 9999,
                        followSpeed: 1.5,
                        backgroundColor: "white",
                        scale: 4,
                        mixBlendMode: "difference",
                        textColor: "white"
                    }}>
                        <h1 className="text-2xl font-bold pb-2">Headphones</h1>
                        <p className="text-sm leading-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className='py-4'>
                            <h1>Email: mrao27488@gmail.com</h1>
                            <h1>Mob: +91 9518074060</h1>
                        </div>
                    </UpdateFollower>
                </div>
                <div className="col-span-1 mx-auto sm:mx-0">
                    <h1 className="text-xl font-bold">About Us</h1>
                    <ul className='flex flex-col space-y-2 pt-2'>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="col-span-1 mx-auto sm:mx-0">
                    <h1 className="text-xl font-bold">Products</h1>
                    <ul className='flex flex-col space-y-2 pt-2'>
                        <li>Headphones</li>
                        <li>Speakers</li>
                        <li>Accessories</li>
                    </ul>
                </div>
                <div className="col-span-1 mx-auto sm:mx-0">
                    <h1 className="text-xl font-bold">Follow Us</h1>
                    <ul className='flex flex-col space-y-2 pt-2'>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer

