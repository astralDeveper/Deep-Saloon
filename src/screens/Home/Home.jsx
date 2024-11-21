import React from "react";
import Carousel from "../../components/Carousel";
import ResponsiveCards from "../../components/ResponsiveCards ";
import Cardsres from "../../components/Cardsres";

const Home = () => {
  const services = [
    { name: "Upper Lips Thread", image: "/images/upper-lips.jpg" },
    { name: "Threading", image: "/images/threading.jpg" },
    { name: "Waxing", image: "/images/waxing.jpg" },
    { name: "Oil Massage", image: "/images/oil-massage.jpg" },
  ];
  return (
    <main className="bg-[#161616]" >
      <div className="bg-[#7a7a7a]">
        <div className="w-[86%] mx-auto p-2 z-50">
          <Carousel />
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto p-4" >
       <div className="flex items-center justify-evenly flex-wrap" >
       <ResponsiveCards/>
       </div>
        

        <div className="flex items-center justify-evenly mt-16 max-md:mt-0 mx-auto ml-16 max-md:ml-0 max-md:flex-col  " >

          <div className="bg-[#161616] rounded-lg border-2 border-yellow-500 p-3 w-[80%] max-md:w-full  mt-8 ">
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

          <div className="w-full max-md:flex max-md:flex-col max-md:mt-8 ">
          <Cardsres/>
          </div>






        </div>




      </div>
    </main>
  );
};



export default Home;


