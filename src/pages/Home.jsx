import React from 'react'
import Categories from '../components/home/Categories'
import FeaturedBlogs from '../components/home/FeaturedBlogs'
import SubscribeSection from '../components/SubscribeSection'

const Home = () => {
  return (
    <div>
      <Categories/>
      <FeaturedBlogs/>
      <SubscribeSection/>
    </div>
  )
}

export default Home
