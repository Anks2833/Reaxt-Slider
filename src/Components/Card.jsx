import React, { useState } from 'react'
import { FaArrowRightFromBracket } from "react-icons/fa6";

function Card({ images }) {

  return (

    <>
    
    <div className='w-full h-screen bg-zinc-700 flex items-center justify-center'>

      <div  className='relative w-96 h-52 rounded-lg bg-zinc-800 overflow-none flex'>


        {/* <img className={`transition-transform duration-500 ease-in-out shrink-0 w-full h-full object-cover ${val === 0 ? "-translate-x-[0%]" : "-translate-x-[100%]"}`} src="https://images.unsplash.com/photo-1705660416189-132f67752e17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="no-img" /> */}
        {/* <img className={`transition-transform duration-500 ease-in-out shrink-0 w-full h-full object-cover ${val === 1 ? "-translate-x-[100%]" : "-translate-x-[0%]"}`} src="https://images.unsplash.com/photo-1706313296876-ba53e6c1670b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D" alt="no-img" /> */}
        {/* <img className={`transition-transform duration-500 ease-in-out shrink-0 w-full h-full object-cover ${val === 1 ? "-translate-x-[100%]" : "-translate-x-[0%]"}`} src="https://images.unsplash.com/photo-1682685797366-715d29e33f9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D" alt="no-img" /> */}
        {/* <img className={`transition-transform duration-500 ease-in-out shrink-0 w-full h-full object-cover ${val === 1 ? "-translate-x-[100%]" : "-translate-x-[0%]"}`} src="https://images.unsplash.com/photo-1682686581663-179efad3cd2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D" alt="no-img" /> */}
        {/* <img className={`transition-transform duration-500 ease-in-out shrink-0 w-full h-full object-cover ${val === 1 ? "-translate-x-[100%]" : "-translate-x-[0%]"}`} src="https://images.unsplash.com/photo-1706273427992-8a1b37142cb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D" alt="no-img" /> */}

        <span onClick={()=>setVal(()=>val+1)} className = 'transition-transform duration-500 absolute bottom-6 bg-white p-2 ml-80 rounded-full cursor-pointer'>
          <FaArrowRightFromBracket />
        </span>

        <span onClick={()=>setVal(()=>val+1)} className='transition-transform duration-500 absolute bottom-6 bg-white p-2 ml-6 rounded-full cursor-pointer rotate-180'>
          <FaArrowRightFromBracket />
        </span>
       

      </div>

    </div>

    </>

  )
}

export default Card