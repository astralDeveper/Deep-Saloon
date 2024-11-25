import React from "react";
import Button from "../../../components/Button";
import { deals } from "../../../utils/DummyData";
const TodayDeals = () => {
 
  return (
    <div className=" py-10 w-full">
      {/* Heading */}
      <div className="flex items-center justify-center gap-8 max-md:gap-4  ">
         <div className="h-1 w-24 bg-textColor4"></div>
        <h2 className="text-3xl max-md:text-lg max-md:font-normal font-bold text-textColor3">Today's Deals</h2>
        <div className="h-1 w-24 bg-textColor4"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-6 md:px-16">
        {deals?.map((deal) => (
          <div
            key={deal.id}
            className="overflow-hidden text-center "
          >
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-48 object-cover border-2 rounded-xl border-textColor4"
            />
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-textColor4">{deal.title}</h3>
              <Button name={"Get the deal"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayDeals;
