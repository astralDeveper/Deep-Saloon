import React from "react";
import ser1 from "../assets/Home/card1.png"
import ser2 from "../assets/Home/card2.png"
import ser3 from "../assets/Home/card3.png"
import ser4 from "../assets/Home/card4.png"
const OverServices = () => {
  
  const deals = [
    {
      id: 1,
      title: "Professional Makeup",
      image: ser1,
    },
    {
      id: 2,
      title: "Facial",
      image: ser2,
    },
    {
      id: 3,
      title: "Pedicure",
      image: ser3,
    },
    {
      id: 4,
      title: "Nail Art",
      image: ser4,
    },
  ];

  return (
    <div className="text-yellow-400 py-10">
      {/* Heading */}
      <div className="flex items-center justify-center gap-8">
      <div className="h-1 w-16 bg-yellow-400"></div>
        <h2 className="text-3xl max-md:text-xl font-bold">Our Services</h2>
        <div className="h-1 w-16 bg-yellow-400"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-6 md:px-16">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className=" rounded-lg overflow-hidden text-center"
          >
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{deal.title}</h3>
              <button className="bg-yellow-400 text-black mt-4 px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300">
                Get the deal
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverServices;
