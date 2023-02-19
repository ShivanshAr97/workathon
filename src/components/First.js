import React from 'react'
import wordle from '../images/wordle.png'
import Game2048 from '../images/Game2048.png'
import pong from '../images/pong.png'
import tic from '../images/tictactoe.png'
import hangman from '../images/hangman.png'

const First = () => {
  return (
    <>

      <div className='flex justify-between mx-4 '>
        <a target="_blank" href="https://shivanshar97.github.io/WordleClone/">
          <div className='border-2 rounded-lg mx-4 my-8 w-[22rem] cursor-pointer'>
            <img className='p-1 object-fill h-80 mx-auto' src={wordle} alt="" />
            <div className='px-2 py-1 border'>
              <h1 className='text-xl font-medium justify-center flex'>Wordle</h1>
              <p className='flex justify-center gap-2'>6 chance 5 letters</p>
              <button className='flex w-3/5 justify-center mx-auto border rounded-lg bg-blue-400 text-white font-bold px-2 py-0.5 my-2'>Play now 🚀</button>
            </div>
          </div>
        </a>
        <a target="_blank" href="https://shivanshar97.github.io/Games/2048/2048.html">
        <div className='border-2 rounded-lg mx-4 my-8 w-[22rem] cursor-pointer'>
          <img className='p-1 object-fill h-80 mx-auto rounded-lg' src={Game2048} alt="" />
          <div className='px-2 py-1 border'>
            <h1 className='text-xl font-medium justify-center flex'>2048</h1>
            <p className='flex justify-center gap-2'>Join the tiles</p>
            <button className='flex w-3/5 justify-center mx-auto border rounded-lg bg-blue-400 text-white px-2 font-bold py-0.5 my-2'>Play now 🚀</button>
          </div>
        </div>
        </a>
        <a target="_blank" href="https://shivanshar97.github.io/Games/BallGame/pong.html">
        <div className='border-2 rounded-lg mx-4 my-8 w-[22rem] cursor-pointer'>
          <img className='p-1 rounded-lg object-fill h-80 mx-auto' src={pong} alt="" />
          <div className='px-2 py-1 border'>
            <h1 className='text-xl font-medium justify-center flex'>Pong</h1>
            <p className='flex justify-center gap-2'>The retro arcade game</p>
            <button className='flex w-3/5 justify-center mx-auto border rounded-lg bg-blue-400 text-white font-bold px-2 py-0.5 my-2'>Play now 🚀</button>
          </div>
        </div>
        </a>
      </div>

      <div className='flex justify-between mx-4'>
        <a target="_blank" href="https://shivanshar97.github.io/Games/TicTacToe/tic-tac-toe.html">
          <div className='border-2 rounded-lg mx-4 my-8 w-[22rem] cursor-pointer'>
            <img className='p-1 rounded-lg object-fill flex justify-center mx-auto h-80' src={tic} alt="" />
            <div className='px-2 py-1 border'>
              <h1 className='text-xl font-medium justify-center flex'>Tic-Tac-Toe</h1>
              <p className='flex justify-center gap-2'>Can you beat the bot?</p>
              <button className='flex w-3/5 justify-center mx-auto border rounded-lg bg-blue-400 text-white font-bold px-2 py-0.5 my-2'>Play now 🚀</button>
            </div>
          </div>
        </a>
        <a target="_blank" href="https://shivanshar97.github.io/Games/Hangman/hangman.html">
        <div className='border-2 rounded-lg mx-4 my-8 w-[22rem] cursor-pointer'>
          <img className='p-1 object-fill h-80 mx-auto ' src={hangman} alt="" />
          <div className='px-2 py-1 border'>
            <h1 className='text-xl font-medium justify-center flex'>Hangman</h1>
            <p className='flex justify-center gap-2'>Guess the correct word</p>
            <button className='flex w-3/5 justify-center mx-auto border rounded-lg bg-blue-400 text-white px-2 font-bold py-0.5 my-2'>Play now 🚀</button>
          </div>
        </div>
        </a>
        <div className='flex items-center w-[33%] mx-4 my-8'>
            <h1 className='text-xl font-medium justify-center flex'>and many more new games coming super soon ...</h1>
          </div>
      </div>
    </>
  )
}

export default First