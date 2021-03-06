import React, { useEffect, useState } from 'react'

import { preloadImages } from '../utils/images'
import Spinner from '../components/Spinner'
import Welcome from '../pages/welcome/Welcome'

const Index = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    preloadImages({
      images: ['/images/wallpaper.jpg', '/images/avatar.jpg'],
      onLoad: () => setIsLoading(false),
    })
  }, [])

  return isLoading ? <Spinner /> : <Welcome />
}

export default Index
