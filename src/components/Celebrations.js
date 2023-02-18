import React from 'react'
import Birthday from './Birthday'
import Congratulate from './Congratulate'

const Celebrations = () => {
  return (
    <div className='my-4'>
    <h1 className='flex justify-center text-4xl font-semibold mb-2'>Celebrations</h1>
    <h2 className='flex justify-center text-xl'>Celebrate being together with each other. Congratulate them on promotions or joining as well as wish them a happy birthday !!</h2>
    <Congratulate/>
    <Birthday/>
    </div>
  )
}

export default Celebrations