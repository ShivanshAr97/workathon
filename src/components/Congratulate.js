import React from 'react'
import { MdOutlineCelebration } from 'react-icons/md';

const Congratulate = () => {
    return (
        <div className='mx-2'>
        <h1 className='flex text-3xl font-semibold mt-2'>Congratulations</h1>
            <h3 className='flex text-xl'>Congratulate your fellow workers on promotions as well as joining your company.</h3>
            <div className='flex mt-2'>
                <div className='flex items-center '>
                    <img className='m-2 h-24 w-20 object-cover rounded-lg' src="https://ph-files.imgix.net/c495260b-6e2b-4987-b44e-a669dce024c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=200&h=160&fit=crop&dpr=2" alt="" />
                    <div className=''>
                        <h2 className='font-bold text-2xl'>Ramesh</h2>
                        <p className='w-80'>Congratulate Ramesh on starting a new position as PR Specialist in your company.</p>
                        <button className='flex text-xs items-center border rounded-xl px-1 py-0.5'><MdOutlineCelebration/><span className='px-2'>Message</span></button>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='m-2 h-24 w-20 object-cover rounded-lg' src="https://ph-files.imgix.net/c76f1fd4-2b13-475d-a31b-16f6d4714025.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=200&h=160&fit=crop&dpr=2" alt="" />
                    <div className=''>
                        <h2 className='font-bold text-2xl'>Nitin</h2>
                        <p className='w-80'>Congratulate Nitin on being promoted as an SDE 2 in your company.</p>
                        <button className='flex text-xs items-center border rounded-xl px-1 py-0.5'><MdOutlineCelebration/><span className='px-2'>Message</span></button>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='m-2 h-24 w-20 object-cover rounded-lg' src='https://ph-files.imgix.net/a1b760d2-8820-4134-8368-22f2a5196a33.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=200&h=160&fit=crop&dpr=2' alt="" />
                    <div className=''>
                        <h2 className='font-bold text-2xl'>Geetika</h2>
                        <p className='w-80'>Congratulate Geetika on starting a new position as Web Developer in your company.</p>
                        <button className='flex text-xs items-center border rounded-xl px-1 py-0.5'><MdOutlineCelebration/><span className='px-2'>Message</span></button>
                    </div>
                </div>
            </div>

            <div className='flex mt-2'>
                <div className='flex items-center'>
                    <img className='m-2 h-24 w-20 object-cover rounded-lg' src="data:image/jpeg;base64,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" alt="" />
                    <div className=''>
                        <h2 className='font-bold text-2xl'>Inaya</h2>
                        <p className='w-80'>Congratulate Inaya on starting a new position as PR Specialist in your company.</p>
                        <button className='flex text-xs items-center border rounded-xl px-1 py-0.5'><MdOutlineCelebration/><span className='px-2'>Message</span></button>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='m-2 h-24 w-20 object-cover rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAdzJrPzG4yLSIK6aFMVBK28ihEaL42BdsQ&usqp=CAU" alt="" />
                    <div className=''>
                        <h2 className='font-bold text-2xl'>Jai</h2>
                        <p className='w-80'>Congratulate Jai on being promoted as an SDE 2 in your company.</p>
                        <button className='flex text-xs items-center border rounded-xl px-1 py-0.5'><MdOutlineCelebration/><span className='px-2'>Message</span></button>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='m-2 h-24 w-20 object-cover rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47IaNiGooCxE5vqspJeO58A3zf4hyYAvzsTZozSS7gDcwDf7ut4BsCEw1OPscvLBu628&usqp=CAU" alt="" />
                    <div className=''>
                        <h2 className='font-bold text-2xl'>Karan</h2>
                        <p className='w-80'>Congratulate Karan on starting a new position as Web Developer in your company.</p>
                        <button className='flex text-xs items-center border rounded-xl px-1 py-0.5'><MdOutlineCelebration/><span className='px-2'>Message</span></button>
                    </div>
                </div>
            </div>
            <p className='text-blue-600 cursor-pointer hover:underline flex ml-[93%]'>See all</p>
        </div>
    )
}

export default Congratulate