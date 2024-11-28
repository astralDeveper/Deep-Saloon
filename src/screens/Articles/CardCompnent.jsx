import React from 'react' 
import { ArticleCardData } from '../../utils/DummyData'

const CardCompnent = () => {

    return (
        <div className='bg-Navbar'>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {ArticleCardData.map((item, ind) => {
                        return (
                            <div key={ind} className="rounded-2xl overflow-hidden shadow-lg flex flex-col  bg-Navbar border-2  border-textColor1 ">
                                <div className="relative rounded-2xl">
                                    <img className="w-full h-[224px] rounded-t-2xl"
                                        src={item.image}
                                        alt="Sunset in the mountains" />
                                </div>
                                <div className="px-3 bg-BackgroundColor1 py-4">
                                    <p className="font-medium text-white text-lg mb-2">{item.title}</p>
                                    <div className='flex gap-2 items-center pb-3'>
                                        <img src={item.calenderimage} className='w-[16px] h-[16px]'/>
                                        <p className='text-white'>{item.date}</p>
                                    </div>
                                    <p className="text-white text-sm">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CardCompnent