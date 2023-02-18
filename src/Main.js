import React from 'react'
import { BiCheck } from 'react-icons/bi';

const Main = () => {
    return (
        <>
            <div className='flex items-center'>
                <img className='mx-12 my-24 rounded-lg' height="360px" width="500" src="https://images.pexels.com/photos/3777554/pexels-photo-3777554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className='mr-12'>
                    <h1 className='text-4xl font-bold mb-2'>Tired of the work at office? 😵</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio alias neque rerum ea officiis in, fugit maiores error quaerat deserunt recusandae reprehenderit qui tempore magni provident tenetur pariatur, consequatur, ad quod velit inventore esse? Quos, totam! Quo porro temporibus eveniet, laboriosam nobis architecto ratione, ut ipsa quasi suscipit iure quidem modi corporis ab aut, ipsam tenetur alias fugit omnis eligendi. Minus quia totam quas, numquam eos et quisquam itaque corporis ab placeat assumenda vero. Possimus quidem recusandae qui? Magni quod iste aliquam praesentium animi officia architecto dolorum, neque, ex, blanditiis enim. Sequi, dolore quasi eaque provident a iure praesentium omnis.</p>
                </div>
            </div>
            <div className='bg-blue-400 p-4'>
            <h1 className='flex text-6xl text-white justify-center font-bold'>No worries</h1>
            <h1 className='flex text-2xl mt-4 text-lime-100 justify-center font-bold'>We got you covered !!</h1>
            </div>
            <div className='flex m-12 justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-semibold m-2'>At Cubicle Carnival, we provide: </h1>
                    <ul>
                        <li className='flex items-center'><BiCheck/><span className='mx-2 text-lg'>Games to chill out</span></li>
                        <li className='flex items-center'><BiCheck/><span className='mx-2 text-lg'>Jokes</span></li>
                        <li className='flex items-center'><BiCheck/><span className='mx-2 text-lg'>Music to calm done the nerves</span></li>
                        <li className='flex items-center'><BiCheck/><span className='mx-2 text-lg'>Upskilling self</span></li>
                        <li className='flex items-center'><BiCheck/><span className='mx-2 text-lg'>Celebrating connections, wishing others to make a sense of livelihood</span></li>
                    </ul>
                </div>
                <img className='rounded-lg mr-12' height="400" width="500" src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
        </>
    )
}

export default Main