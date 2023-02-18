import React from 'react'
import First from './First'
import Second from './Second'

const Games = () => {
  return (
    <>
    <h1 className='flex justify-center text-4xl font-semibold mt-8 mb-2'>Games</h1>
    <h2 className='flex justify-center text-xl'>Lighten up your mood with some easy and simple yet addictable games</h2>
    <First/>
    <Second/>
    </>
  )
}

export default Games