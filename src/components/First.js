import React from 'react'
import wordle from '../images/wordle.png'
const First = () => {
  return (
    <>

      <div className='flex justify-between mx-20 '>
        <a target="_blank" href="https://shivanshar97.github.io/WordleClone/">
          <div className='border-2 rounded-lg mx-4 my-8 cursor-pointer'>
            <img className='p-1 object-fill h-80' src={wordle} alt="" />
            <div className='px-2 py-1 border'>
              <h1 className='text-xl font-medium justify-center flex'>Wordle</h1>
              <p className='flex justify-center gap-2'>A words game</p>
              <button className='flex w-3/5 justify-center mx-auto border rounded-lg bg-blue-400 text-white font-bold px-2 py-0.5 my-2'>Play now 🚀</button>
            </div>
          </div>
        </a>
        <div className='border-2 rounded-lg mx-4 my-8 cursor-pointer'>
          <img className='p-1 object-fill h-80' src={wordle} alt="" />
          <div className='px-2 py-1 border'>
            <h1 className='text-xl font-medium justify-center flex'>Wordle</h1>
            <p className='flex justify-center gap-2'>A words game</p>
            <button className='flex w-3/5 justify-center mx-auto border rounded-lg bg-blue-400 text-white px-2 font-bold py-0.5 my-2'>Play now 🚀</button>
          </div>
        </div>
        <div className='border-2 rounded-lg mx-4 my-8 cursor-pointer'>
          <img className='p-1 object-fill h-80' src={wordle} alt="" />
          <div className='px-2 py-1 border'>
            <h1 className='text-xl font-medium justify-center flex'>Wordle</h1>
            <p className='flex justify-center gap-2'>A words game</p>
            <button className='flex w-3/5 justify-center mx-auto border rounded-lg bg-blue-400 text-white font-bold px-2 py-0.5 my-2'>Play now 🚀</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default First