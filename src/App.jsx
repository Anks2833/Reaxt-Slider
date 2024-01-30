import React, { useState } from 'react'
import Card from './Components/Card';
import SimpleImageSlider from "react-simple-image-slider";

function App() {

  const images = [
    { url: "photo-1706273427992-8a1b37142cb8.avif" },
    { url: "img2.avif" },
    { url: "img3.avif" },
    { url: "img4.avif" },
    { url: "img5.avif" },
    { url: "img6.avif" },
    { url: "img7.avif" },
  ];

  return (
      <div className='w-full h-screen bg-zinc-800 flex items-center justify-center'>
        {/* <Card/> */}

        <SimpleImageSlider
        width={900}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
        
      </div>
  )
}

export default App