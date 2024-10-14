import { Button } from 'flowbite-react'
import React from 'react'
import HomeBanner from '../component/HomeBanner'
import PropertyList from '../component/PropertyList'
import HomeAbout from '../component/HomeAbout'

const Home = () => {
  return (
    <div>
      {/* banner part of home */}
      <HomeBanner />
      <HomeAbout />
      <PropertyList />
    </div>
    
  )
}

export default Home