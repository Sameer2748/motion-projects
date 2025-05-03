import React from 'react'
import Blog1 from "../../assets/blogs/blog1.jpg"
import Blog2 from "../../assets/blogs/blog2.jpg"
import Blog3 from "../../assets/blogs/blog3.jpg"
import Blog4 from "../../assets/blogs/blog4.jpg"
import {motion} from "motion/react"
import { UpdateFollower } from 'react-mouse-follower'


const BlogsData = [
    {
        id: 1,
        image: Blog1,
        title: "The Best Headphones for Music Lovers",
        description: "Discover the top headphones that deliver exceptional sound quality and comfort for music enthusiasts.",
    },
    {
        id: 2,
        image: Blog2,
        title: "How to Choose the Right Headphones for You",
        description: "A comprehensive guide to help you select the perfect headphones based on your needs and preferences.",
    },
    {
        id: 3,
        image: Blog3,
        title: "The Evolution of Headphone Technology",
        description: "Explore the advancements in headphone technology and how they have transformed the audio experience.",
    },
    {
        id: 4,
        image: Blog4,
        title: "Top 10 Headphone Brands to Watch",
        description: "A roundup of the leading headphone brands that are making waves in the audio industry.",
    },
]
const Blog = () => {
  return (
    <>
     <section className='bg-gray-50 pb-14'>
          <div className='mx-14 py-14 '>
            <h1 className='text-3xl font-bold text-center pb-8 '>Blogs </h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-14 '>
            {
                BlogsData.map((blog) => (
                    <UpdateFollower mouseOptions={
                        {
                            zIndex: 9999,
                            followSpeed: 1.5,
                            scale:4,
                            backgroundColor: "black",
                            textColor: "white",
                            text:"Read more",
                            textFontSize:"3px"
                        }
                    }>
                    <div key={blog.id} className='bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer'>
                    <img src={blog.image} alt={blog.title} className='w-full h-48 object-cover' />
                    <div className='p-4'>
                        <h2 className='text-xl font-semibold'>{blog.title}</h2>
                        <p className='text-gray-600'>{blog.description}</p>
                    </div>
                    </div>
                    </UpdateFollower>
                ))
            }
          </div>
      </section> 
    </>
  )
}

export default Blog
