import React from 'react'
import img1 from '../images/img1.png'
const Navbar = () => {
  return (
    <>
    <div className='flex  align-bottom'>
    <img src={img1} className=" h-24" alt="" />
    <h1 className='flex h-fit mt-7 text-3xl font-semibold'>Cubicle Carnival</h1>
    </div>
    </>
  )
}

export default Navbar