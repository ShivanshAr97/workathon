import React from 'react'
import img1 from '../images/img1.png'
const Navbar = () => {
  return (
    <>
      <div className='flex border sticky top-0 z-100 bg-white justify-between items-center'>
        <div className='flex'>
          <img src={img1} className="h-24" alt="" />
          <h1 className='flex mt-7 text-3xl font-semibold'>Cubicle Carnival</h1>
        </div>
        <div>
          <ul className='flex'>
            <li className='cursor-pointer mx-8 transition-all ease-in-out hover:font-bold duration-400 text-lg'>Games</li>
            <li className='cursor-pointer mx-8 transition-all ease-in-out hover:font-bold duration-400 text-lg'>Jokes</li>
            <li className='cursor-pointer mx-8 transition-all ease-in-out hover:font-bold duration-400 text-lg'>Music</li>
            <li className='cursor-pointer mx-8 transition-all ease-in-out hover:font-bold duration-400 text-lg'>Upskill</li>
            <li className='cursor-pointer mx-8 transition-all ease-in-out hover:font-bold duration-400 text-lg'>Celebrate</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar