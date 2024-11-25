import React from 'react'
import { IMAGES } from '../../../utils/Images'

const OurMission = () => {
    return (
        <div>
            <div className='bg-BackgroundColor4 w-full p-28'>
                <div className=' w-[60%] mx-auto'>
                    <div className='absolute top-[222rem] left-[26%]  '>
                        <img src={IMAGES.ABOUT5} alt="abut" className='w-[480px] h-[610px]' />
                    </div>
                    <div className='bg-BackgroundColor1 flex w-full ' >
                        <div className='w-full'>

                        </div>
                        <div className='p-28 w-full '>
                            <p className='text-textColor4 text-xl'>Our Mission</p>
                            <p className='text-textColor2 text-3xl font-semibold'>Empowering Beauty, Inspiring Confidence</p>
                            <p className='leading-7 text-lg text-textColor2 '>At Deep Salon, our mission is to create a space where every client feels empowered and beautiful. We believe that beauty services are more than just appearance. Our talented team is dedicated to delivering exceptional service in every haircut, skincare treatment, and styling, ensuring each person leaves feeling their very best.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-6 text-center' >
                <div className=' mb-16 w-[60%] mx-auto leading-[10rem]'>
                    <p className='text-textColor4 font-medium text-[60px]' >MEET YOUR EXPECTATIONS</p>
                    <p className='text-textColor2 text-3xl  ' >At Deep Beauty Parlour, we only offer the highest quality Beauty Salon services. Take a look at our wide range of treatments and special pampering options we offer.</p>
                </div>

                <div className='mb-16 w-[60%] mx-auto leading-[10rem]'>
                    <p className='text-textColor4 font-medium text-[60px]'>Our Policy</p>
                    <p className='text-textColor2 text-2xl'>At DEEP BEAUTY PARLOUR, we go out of our way to make sure our valued clients have the best experience possible, from the minute they enter our doors to the moment they leave our incomparable Salon. Please take a moment to review our policies to ensure you understand our operations procedures. If you have any questions,just get in touch and we’ll be happy to help.</p>
                </div>
            </div>




        </div>
    )
}

export default OurMission