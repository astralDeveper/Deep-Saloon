import React from "react";
import { cardSData } from "../../../utils/DummyData";

const Cardsres = () => {

  return (
    <main className="flex items-center justify-center gap-4 max-lg:flex-col max-xl:gap-4">
    {cardSData.map((data, index) => (
      <div className="border-2 border-textColor4 p-4 rounded-xl lg:text-lg lg:font-semibold  max-lg:w-fit max-md:mb-6 bg-[#343434]">
        <p className="text-textColor3 max-lg:font-semibold max-xl:text-sm max-xl:font-normal line-clamp-1 max-lg:text-lg p-2">
          {data.title}
        </p>
        <div key={index} className="text-textColor2 text-lg font-normal grid grid-cols-2 gap-6 ">
          <div>
            <img src={data.img1} alt="" />
            <p>{data.imageTitle1}</p>
          </div>
          <div>
            <img src={data.img2} alt="" />
            <p>{data.imageTitle2}</p>
          </div>
          <div>
            <img src={data.img3} alt="" />
            <p>{data.imageTitle3}</p>
          </div>
          <div>
            <img src={data.img4} alt="" />
            <p>{data.imageTitle4}</p>
          </div>
        </div>
      </div>
    ))}
  </main>
  );
};

export default Cardsres;