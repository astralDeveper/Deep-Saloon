import React from "react";
import card1 from "../assets/Home/card1.png";
import card2 from "../assets/Home/card2.png";
import card3 from "../assets/Home/card3.png";
import card4 from "../assets/Home/card4.png";

const ResponsiveCards = () => {
  const cardData = [
    {
      title: "Pickup where you left off",
      img1: card1,
      imageTitle1: "Pedicure",
      img2: card2,
      imageTitle2: "Facial",
      img3: card3,
      imageTitle3: "Nail Art",
      img4: card4,
      imageTitle4: "Makeup",
    },
    {
      title: "Keep shopping for",
      img1: card1,
      imageTitle1: "Pedicure",
      img2: card2,
      imageTitle2: "Facial",
      img3: card3,
      imageTitle3: "Nail Art",
      img4: card4,
      imageTitle4: "Makeup",
    },
    {
      title: "Buy again",
      img1: card1,
      imageTitle1: "Pedicure",
      img2: card2,
      imageTitle2: "Facial",
      img3: card3,
      imageTitle3: "Nail Art",
      img4: card4,
      imageTitle4: "Makeup",
    },
    {
      title: "Categories to explore",
      img1: card1,
      imageTitle1: "Pedicure",
      img2: card2,
      imageTitle2: "Facial",
      img3: card3,
      imageTitle3: "Nail Art",
      img4: card4,
      imageTitle4: "Makeup",
    },
  ];
  return (
    <main className="flex items-center justify-evenly max-md:flex-col">
      {cardData.map((data, index) => (
        <div className="border border-yellow-500 p-4 rounded-xl w-[20%] max-lg:w-full max-md:mb-6 bg-[#343434]">
          <p className="text-yellow-500 font-semibold text-lg p-2">
            {data.title}
          </p>
          <div key={index} className="text-yellow-500 grid grid-cols-2 gap-6 ">
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

export default ResponsiveCards;
