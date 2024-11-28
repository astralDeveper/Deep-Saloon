import React, { useState } from 'react'
import { TestimonialCardData } from '../../utils/DummyData'
import StarRating from '../../components/Rating'

const TestimonialCardCompnent = () => {

    const [start,setStart] = useState(false)

    return (
        <div className='bg-Navbar'>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className='pb-20'>
                    <p className='text-white pb-1'>Testimonials</p>
                    <div className='flex justify-between w-full text-white items-center  '>
                        <p className='text-white text-4xl w-[30%]  '>What Our Clients Says</p>
                        
                        <p className='text-white w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt posuere dolor, a fermentum arcu vehicula at.  Sed facilisis lobortis lectus ac consequat. Nam et sodales neque. Etiam vitae pretium dui.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {TestimonialCardData.map((item, ind) => {
                        return (
                            <div key={ind} className="rounded-2xl overflow-hidden shadow-lg flex flex-col  bg-BackgroundColor1   p-4">
                                <div className="flex gap-4 items-center ">
                                    <div>
                                        <img className="w-[55px] h-[55px]"
                                        src={item.image}
                                         />
                                    </div>
                                   
                                <div className='gap-4'>
                                    <p className='text-white'>{item.name}</p>
                                    <p className='text-white'>{item.company}</p>
                                </div>
                                </div>
                                <div className='py-4'> 
                                    <p className="font-medium text-white text-lg">{item.title}</p>
                                    <div className='flex gap-2 items-center  '> 
                                        <p className='text-white'>{item.date}</p>
                                    </div>
                                    <p className="text-white text-sm">{item.description}</p> 
                                   
                                </div>
                                 <StarRating rate={item.rating}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TestimonialCardCompnent