import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import  VideoGallery  from '@/components/VideoGallery'

const page = () => {
  return (
    <div>
        <Header />
        {/* <VideoGallery /> */}
        <Footer />
    </div>
  )
}

export default page
