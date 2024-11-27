import React from 'react'
import { IMAGES } from '../utils/Images'

const TopHeader = ({ name }) => {
    return (
        <main className="bg-Navbar py-16">
            <div>
                <div className='flex justify-center'>
                    <p className='absolute text-white text-5xl top-[16%]'>{name}</p>
                </div>
                <img src={IMAGES.CONTAINER} className='w-full h-[100px]' />
                <div className='bg-red-300 w-full h-full'>
                </div>
            </div>
        </main>
    )
}

export default TopHeader