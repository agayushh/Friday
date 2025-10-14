import React from 'react'
import ProfilePic from '@/public/Pasted image.png';

const Pfp = () => {
  return (
    <div className='flex h-fit items-center'>
      <div className='border-y w-screen fixed left-0 border-gray-900 h-36 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-56'></div>
        <img src={ProfilePic.src} alt="" className='h-36 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-56 ' />
        <p className='text-center text-white'>Your Name</p>
    </div>
  )
}

export default Pfp