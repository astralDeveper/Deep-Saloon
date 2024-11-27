import React from "react";
import { services } from "../../utils/DummyData";
import ResponsiveCards from "./Components/ResponsiveCards ";
import Cardsres from "./Components/Cardsres";
import TodayDeals from "./Components/TodayDeals";
import OverServices from "./Components/OverServices";
import Carousel from "./Components/Carousel";

import "./index.css"
import SliderHome from "../../components/CardSlider";
import { IMAGES } from "../../utils/Images";
import Button from "../../components/Button";
import ReviewCrousal from "../../components/ReviewCrousal";







const Home = () => {




  return (

    <main className="bg-[#161616] dark:bg-textColor2" >
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
                  <img src={service.image} alt={service.name} className="w-full h-28 object-contain" />
                  <div className="bg-black text-white py-2 text-center">
                    <h3 className="font-semibold">{service.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-md:flex max-lg:flex-col max-lg:mt-8 w-full  ">
            <Cardsres />
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
            <div className=""><blockquote className="text-textColor1 font-bold text-4xl max-md:text-xl pr-[32]" >“Unleashing the Expertise of Top-notch Stylists for Exceptional Haircuts, Colors, and Styles!”</blockquote></div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-center gap-8 max-md:gap-4  ">
            <div className="h-1 w-24 bg-textColor4"></div>
            <h2 className="max-md:text-lg max-md:font-normal mainheading">Subscribe To Watch On YouTube</h2>
            <div className="h-1 w-24 bg-textColor4"></div>
          </div>
          <div className=" border-2 p-6 border-textColor4 rounded-[14px] boxBorder mt-10 ">
            <SliderHome />
          </div>
          <div className="border-[3px] border-textColor4  w-60 rounded-b-xl h-[15px] mx-auto " ></div>

          <div className=" w-full p-6 mt-4 flex items-center justify-center gap-4">
            {/* Logo Section */}
            <div className="bg-black p-2 shrink-0">
              <img
                src={IMAGES.LOGO}
                alt="Logo"
                className="w-28 max-md:w-20 max-md:h-20 h-28 object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="text-center">
              <p className="text-textColor1 text-xl max-md:text-base font-semibold mb-2 dark:">Deep Beauty Parlour</p>
              {/* YouTube Button */}
              <div className="flex items-center justify-center">
                <button className="flex items-center justify-between gap-2 w-52 max-md:w-40 bg-BackgroundColor5 text-textColor2 p-2 rounded-lg shadow-md">
                  {/* YouTube Logo and Text */}
                  <div className="flex items-center gap-2">
                    <img
                      src={IMAGES.YOUTUBEBUTTON}
                      alt="YouTube Logo"
                      className="w-6 max-md:w-4"
                    />
                    <span className="font-medium">YouTube</span>
                  </div>
                  {/* Subscriber Count */}
                  <span className="bg-textColor2 text-textColor1 rounded px-3 max-md:px-2 max-md:py-1 py-2 text-sm font-semibold">
                    897
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="">
          <p className="heading1">What our customers say</p>

          <div className="flex items-center justify-between p-10 max-md:flex-col bg-BackgroundColor6 rounded-3xl mt-6">
            <div className="" >
              <div>
                <div className="flex items-center gap-2" > <img src={IMAGES.GOOGLE} alt="LOGO" className="w-[94px] h-[30px]" />
                <p className="capitalize text-textColor2 ">reviews</p></div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-bold text-textColor1">4.6</p>
                <div className="flex">
                <img src={IMAGES.REVIEW} alt="stars" className="w-[25px] h-[24px] max-md:w-4 max-md:h-3" />
                <img src={IMAGES.REVIEW} alt="stars" className="w-[25px] h-[24px] max-md:w-4 max-md:h-3" />
                <img src={IMAGES.REVIEW} alt="stars" className="w-[25px] h-[24px] max-md:w-4 max-md:h-3" />
                <img src={IMAGES.REVIEW} alt="stars" className="w-[25px] h-[24px] max-md:w-4 max-md:h-3" />
                <img src={IMAGES.REVIEW} alt="stars" className="w-[25px] h-[24px] max-md:w-4 max-md:h-3" />
                </div>
                <p className="text-xs text-textColor1">(307)</p>
              </div>
            </div>

            <Button name={"Review us on Google"} background/>

          </div>

         <div className="mt-4">
         <ReviewCrousal/>
         </div>

        </div>









      </div>
    </main>
  );
};



export default Home;


