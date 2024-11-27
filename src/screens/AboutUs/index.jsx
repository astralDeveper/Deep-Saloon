import React from 'react'
import { IMAGES } from '../../utils/Images'
import Card from './components/card'
import AboutBanner from './components/aboutbanner'
import OurMission from './components/OurMission'
import TeamMembers from './components/TeamMembers'

const AboutUs = () => {
  return (
    <div className='bg-Navbar'>
      <AboutBanner/>
      <div className=' w-full flex justify-between'>
        <div className='  relative'>
          <img src={IMAGES.ABOUT1} className='w-[413px] h-[652px] object-contain'/>
          <img src={IMAGES.DOTED} className='w-[47px] h-[44px] object-contain absolute -right-6 bottom-16 '/>
        </div>
        <div className='flex flex-col justify-center gap-8 items-center text-center  w-[36%]'>
          <p className='text-textColor4'>Our Story</p>
          <p className='text-textColor2 text-[40px] font-bold' >From Humble Beginnings to a Trusted Beauty Destination</p>
          <p className='text-center text-textColor1 text-[14px] leading-6'>Deep Salon’s story began with a passion for beauty and well-being. Founded in [Year], we started as a small salon with big dreams—to offer more than just beauty services, but an experience of comfort, trust, and excellence. Over the years, our commitment to quality and genuine customer care has helped us become a go-to destination for beauty lovers. Today, we continue to blend tradition with innovation, delivering an unparalleled salon experience.</p>
        </div>
        <div className='relative'>
        <img src={IMAGES.DOTTED1} className='w-[75px] h-[59px] object-contain   absolute top-0 -left-10'/>
          <img src={IMAGES.ABOUT2} className='w-[413px] h-[652px] object-contain' />
        </div>
      </div>

      <Card/>
      <OurMission/>
      <TeamMembers/>
      
    </div>
  )
}

export default AboutUs