import React from 'react'
import { IMAGES } from '../../../utils/Images'
import { AboutTeamMemberData } from '../../../utils/DummyData'

const TeamMembers = () => {


  return (
    <div className='bg-BackgroundColor1'>

    
    <div className=' w-[55%] mx-auto'>
        
           




          <div>
            {/* Card Start */}

            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

<div className="  mb-5 flex justify-between text-sm">
    <div className="   ">
         
        <p className="font-semibold   text-white">Say to our incredible team members.</p>
    </div>
    <div className='flex flex-col'>
    <p>Praesent sagittis eros in convallis rutrum. Donec auctor nibh justo. Vestibu tincidunt, libero sit.</p>
    <a href="#">See All</a>
    </div>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
 
 {AboutTeamMemberData.map((item,ind) => 
{
  return(
     <div className="rounded-lg overflow-hidden shadow-lg flex flex-col  bg-Navbar border-2  border-textColor3 ">
        <div className="relative p-3 rounded-md">
         
                <img className="w-[264px] h-[224px] rounded-lg"
                    src={item.image}
                    alt="Sunset in the mountains"/>
                <div
                    className=" absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            
           
        </div>
        <div className="px-6 py-2 pb-4 mb-auto text-center">
            <p className="font-medium text-white text-lg  mb-2">{item.name}</p>
            <p className="text-white text-sm">
                {item.position}
            </p>
        </div>
        
    </div>
  )
})}
    

</div>

</div>



{/* Card End */}

          </div>
         
    </div>
    </div>
  )
}

export default TeamMembers