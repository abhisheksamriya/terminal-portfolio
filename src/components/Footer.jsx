import React, { useEffect } from 'react'
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='flex justify-center items-center'>
    <div className=" bg-black hidden md:block">
      <div className="flex justify-around items-center">
        <div className="text-green-400 flex items-center">
            <div className='h-0.5 w-30 m-4 bg-green-400 rounded-full'></div>
          <div className="mb-1 flex items-center"><FaRegCopyright /> &nbsp; All Rights Reserved By Abhishek Samriya 2025</div>
          <div className='h-0.5 w-30 m-4 bg-green-400 rounded-full'></div>
        </div>
      </div>
    </div>
    <div className="mb-1 sm:hidden flex items-center text-green-400 text-[10px]"><FaRegCopyright /> &nbsp; All Rights Reserved By Abhishek Samriya 2025</div>
    </section>
   
  )
}

export default Footer