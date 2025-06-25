import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryPage from '@/components/GalleryPage';

const page = () => {
  return (
    <>
      <div>
        <Navbar />
        <GalleryPage />
        <Footer />
      </div>
    </>
  )
}

export default page
