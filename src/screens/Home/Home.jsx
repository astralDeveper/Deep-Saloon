import React from "react";
import Carousel from "../../components/Carousel";
import ResponsiveCards from "../../components/ResponsiveCards ";
import Cardsres from "../../components/Cardsres";
import img1 from "../../assets/Home/huge1.png"
import img2 from "../../assets/Home/huge2.png"
import img3 from "../../assets/Home/huge3.png"
import img4 from "../../assets/Home/huge4.png"
import TodayDeals from "../../components/TodayDeals";
import OverServices from "../../components/OverServices";








const Home = () => {

  const services = [
    { name: "Upper Lips Thread", image: img1 },
    { name: "Threading", image: img2 },
    { name: "Waxing", image: img3 },
    { name: "Oil Massage", image: img4 },
  ];


  return (
 
    <main className="bg-[#161616]" >
      <div className="bg-[#7a7a7a]  ">
        <div className=" mx-auto p-2">
          <Carousel />
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto p-4" >
       <div className="flex items-center justify-evenly flex-wrap" >
       <ResponsiveCards/>
       </div>
        

        <div className="flex items-center justify-center gap-5 w-full mt-16 max-md:mt-0 mx-auto  max-md:ml-0 max-lg:flex-col  " >

          <div className="bg-[#161616] rounded-lg border-2 border-yellow-500 p-3 w-[98%] max-md:w-full  mt-8 ">
             <h2 className="text-center text-xl font-bold mb-6 text-yellow-500">
                Under 499/-
            </h2>
             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={service.image} alt={service.name} className="w-full h-20 object-cover"/>
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

        <div>
          <TodayDeals/>
        </div>

        <div>
          <OverServices/>
        </div>








      </div>
    </main>
  );
};



export default Home;


