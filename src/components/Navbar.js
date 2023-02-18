import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/img1.png'
const Navbar = () => {
  return (
    <>
      <div className='flex border sticky top-0 z-100 bg-white justify-between items-center'>
        <Link to="/"><div className='flex'>
           <img src={img1} className="h-24" alt="" />
          <h1 className='flex mt-7 text-3xl font-semibold'>Cubicle Carnival</h1>
        </div></Link>
        <div>
          <ul className='flex'>
            <Link to="/games"><li className='cursor-pointer mx-8 transition-all ease-in-out hover:font-bold duration-400 text-lg'>Games</li></Link>
            <Link to="/jokes"><li className='cursor-pointer mx-8 transition-all ease-in-out hover:font-bold duration-400 text-lg'>Jokes</li></Link> 
            <Link to="/music"><li className='cursor-pointer mx-8 transition-all ease-in-out hover:font-bold duration-400 text-lg'>Music</li></Link>
            <Link to="/skills"><li className='cursor-pointer mx-8 transition-all ease-in-out hover:font-bold duration-400 text-lg'>Upskill</li></Link>
            <Link to="/celebration"><li className='cursor-pointer mx-8 transition-all ease-in-out hover:font-bold duration-400 text-lg'>Celebrate</li></Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar