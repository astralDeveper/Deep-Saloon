import React from 'react'
import { IMAGES } from '../../../utils/Images'
import { AboutOurMissionData } from '../../../utils/DummyData'

const OurMission = () => {
    return (
        <div>
            <div className='bg-BackgroundColor4  p-10'>
                {/* <div className=' w-[60%] mx-auto'>
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
                </div> */}


                <div className='flex  bg-BackgroundColor1 w-[55%] mx-auto py-20 my-20 '>
                    <div className='w-[50%] relative'>
                        <img src={IMAGES.ABOUT5} alt="about" className=' absolute -top-[110px] left-10  max-w-[1900px] h-[510px]' />
                    </div>
                    <div>
                        <div className='flex flex-col h-full  w-[70%] px-20 float-right'>
                            <p className='text-textColor4 text-xl '>Our Mission</p>
                            <p className='text-textColor2 text-3xl font-semibold'>Empowering Beauty, Inspiring Confidence</p>
                            <p className='leading-7 text-lg text-textColor2 '>At Deep Salon, our mission is to create a space where every client feels empowered and beautiful. We believe that beauty services are more than just appearance. Our talented team is dedicated to delivering exceptional service in every haircut, skincare treatment, and styling, ensuring each person leaves feeling their very best.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-6 text-center' >
                {AboutOurMissionData.map((item, ind) => (
                    <div key={ind} className=' mb-16 w-[60%] mx-auto leading-[10rem]'>
                        <p className='text-textColor4 font-medium text-[60px]' >{item.heading}</p>
                        <p className='text-textColor2 text-3xl'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurMission