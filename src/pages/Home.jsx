import { Button } from 'flowbite-react'
import React from 'react'
import HomeBanner from '../component/HomeBanner'
import PropertyList from '../component/PropertyList'

const Home = () => {
  return (
    <div>
      {/* banner part of home */}
      <HomeBanner />
      <PropertyList />
    </div>
    
  )
}

export default Home