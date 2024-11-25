import React from "react";
import { services } from "../../utils/DummyData";
import ResponsiveCards from "./Components/ResponsiveCards ";
import Cardsres from "./Components/Cardsres";
import TodayDeals from "./Components/TodayDeals";
import OverServices from "./Components/OverServices";
import Carousel from "./Components/Carousel";

import "./index.css"
import SliderHome from "../../components/CardSlider";







const Home = () => {

  


  return (
 
    <main className="bg-[#161616]" >
      <div className="bg-[#7a7a7a]  ">
        <div className=" mx-auto p-2">
          <Carousel />
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto p-4" >
       <div className="flex items-center justify-evenly flex-wrap" >
       <ResponsiveCards />
       </div>
        

        <div className="flex items-center justify-center gap-5 w-full mt-16 max-md:mt-0 mx-auto  max-md:ml-0 max-lg:flex-col h-full  " >

          <div className="bg-[#161616] rounded-lg border-2 border-textColor4 w-[98%] min-h-[rem] max-md:w-full p-10">
             <h2 className="text-center text-xl font-bold mb-6 text-textColor3">
                Under 499/-
            </h2>
             <div className="grid grid-cols-2 gap-10 items-center justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={service.image} alt={service.name} className="w-full h-28 object-contain"/>
              <div className="bg-black text-white py-2 text-center">
                <h3 className="font-semibold">{service.name}</h3>
              </div>
              </div>
               ))}
            </div>
          </div>
          <div className="max-md:flex max-lg:flex-col max-lg:mt-8 w-full  ">
          <Cardsres/>
          </div>
        </div>

        <div className="w-full">
          <TodayDeals />
        </div>

        <div className="w-full">
          <OverServices />
          <div className="flex items-center justify-evenly ">
            <div className="" ><p className="threeText">UNLOCK YOUR BEST LOOK</p></div>
            <div className="w-full" ></div>
            <div className=""><blockquote className="text-textColor1 font-bold text-4xl pr-[32]" >“Unleashing the Expertise of Top-notch Stylists for Exceptional Haircuts, Colors, and Styles!”</blockquote></div>
          </div>
        </div>

<div className="my-4">
  <div className="mt-20 border-2 p-6 border-textColor4 rounded-[14px] boxBorder ">
          <SliderHome />
        </div>
          <div className="border-[3px] border-textColor4  w-60 rounded-b-xl h-[15px] mx-auto " ></div>
</div>
        








      </div>
    </main>
  );
};



export default Home;


