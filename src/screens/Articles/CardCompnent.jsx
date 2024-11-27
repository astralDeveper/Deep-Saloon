import React from 'react'
import { IMAGES } from '../../utils/Images'

const CardCompnent = () => {

    const ArticleCardData = [
        {
            image: IMAGES.ARTICAL1,
            title:'Glow Up Guide',
            calenderimage:IMAGES.CALENDER,
            date:'Jan 24, 22023',
            description: 'Discover expert tips to achieve a natural, radiant glow with skincare and lifestyle tip......'
        }, {
            image: IMAGES.ARTICAL2,
            title:'Glow Up Guide',
            calenderimage:IMAGES.CALENDER,
            date:'Jan 24, 22023',
            description: 'Discover expert tips to achieve a natural, radiant glow with skincare and lifestyle tip......'
        }, {
            image: IMAGES.ARTICAL3,
            title:'Glow Up Guide',
            calenderimage:IMAGES.CALENDER,
            date:'Jan 24, 22023',
            description: 'Discover expert tips to achieve a natural, radiant glow with skincare and lifestyle tip......'
        }, {
            image: IMAGES.ARTICAL3,
            title:'Glow Up Guide',
            calenderimage:IMAGES.CALENDER,
            date:'Jan 24, 22023',
            description: 'Discover expert tips to achieve a natural, radiant glow with skincare and lifestyle tip......'
        }, {
            image: IMAGES.ARTICAL1,
            title:'Glow Up Guide',
            calenderimage:IMAGES.CALENDER,
            date:'Jan 24, 22023',
            description: 'Discover expert tips to achieve a natural, radiant glow with skincare and lifestyle tip......'
        }, {
            image: IMAGES.ARTICAL2,
            title:'Glow Up Guide',
            calenderimage:IMAGES.CALENDER,
            date:'Jan 24, 22023',
            description: 'Discover expert tips to achieve a natural, radiant glow with skincare and lifestyle tip......'
        }, {
            image: IMAGES.ARTICAL2,
            title:'Glow Up Guide',
            calenderimage:IMAGES.CALENDER,
            date:'Jan 24, 22023',
            description: 'Discover expert tips to achieve a natural, radiant glow with skincare and lifestyle tip......'
        }, {
            image: IMAGES.ARTICAL3,
            title:'Glow Up Guide',
            calenderimage:IMAGES.CALENDER,
            date:'Jan 24, 22023',
            description: 'Discover expert tips to achieve a natural, radiant glow with skincare and lifestyle tip......'
        }, {
            image: IMAGES.ARTICAL1,
            title:'Glow Up Guide',
            calenderimage:IMAGES.CALENDER,
            date:'Jan 24, 22023',
            description: 'Discover expert tips to achieve a natural, radiant glow with skincare and lifestyle tip......'
        },

    ]

  return (
     

    
<div className=' bg-Navbar'>
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
 


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

{ArticleCardData.map((item,ind) => 
{
return(
 <div className="rounded-2xl overflow-hidden shadow-lg flex flex-col  bg-Navbar border-2  border-textColor3 ">
    <div className="relative   rounded-2xl">
     
            <img className="w-full h-[224px] rounded-lg"
                src={item.image}
                alt="Sunset in the mountains"/>
            
        
       
    </div>
    <div className="px-3 bg-BackgroundColor1 py-4">
        <p className="font-medium text-white text-lg  mb-2">{item.title}</p>
        <p className="text-white text-sm">
            {item.description}
        </p>
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