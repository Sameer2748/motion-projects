
import { UpdateFollower } from 'react-mouse-follower'

const BannerBottom = () => {
  return (
    <section className='py-12 text-center max-w-[800px] mx-auto  '>
      <div>
        <div className='bg-gradient-to-t from-[#aa6d6b] to-[#aa6d6b]/70 text-white rounded-3xl p-8 hover:scale-105 transition-all hover:shadow-2xl cursor-pointer duration-300'>
        <UpdateFollower mouseOptions={{
            backgroundColor:"black",
            zIndex:9999,
            followSpeed:0.5,
            scale:6,
            mixBlendMode:"screen",
        }}>
            <p className='font-bold text-4xl max-w-[700px] mx-auto leading-normal'>Headphone With Good Quality And Affordable Price</p>
        </UpdateFollower>
        </div>
      </div>
    </section>
  )
}

export default BannerBottom
