import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { carouselData } from "../utils/DummyData";


const SliderHome = () => {
  // Define state to control the number of items per slide
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  console.log(carouselData);

  // Recalculate the chunks whenever the screen size or itemsPerSlide change
  useEffect(() => {
    // setGroupedCards(chunkArray(carouselCard2, itemsPerSlide));
  }, [itemsPerSlide]);


  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={10}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 3 },
      }}
    >
      {carouselData.map((group, index) => (
        <SwiperSlide key={index} className="">
          <div className="flex items-center justify-center gap-4">
            {/* Flex container to show cards in a row */}
            <div
              className={`flex items-center  w-full  border-2 border-textColor4 `}
            >
              <div className="" >
                <div className="flex items-center w-full max-sm:flex-col max-sm:items-center">
                  <div>
                    <img
                      src={group.img}
                      className="object-cover "
                      alt="card image"
                    />
                  </div>
                  <div>
                    {/* <h3 className="text-[22px] max-lg:text-[18px] text-start font-semibold max-sm:text-lg">
                      {group.head}
                    </h3> */}
                    {/* <div className="flex items-center">
                      {getStars(group.stars).map((isFilled, starIndex) => (
                        <svg
                          key={starIndex}
                          className={`w-[16px] max-lg:w-[12px] h-6 max-sm:h-4 max-sm:w-4 ms-1 ${
                            isFilled
                              ? "text-[#42C686]"
                              : "text-[#42c68659] dark:text-gray-500"
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div> */}
                  </div>
                </div>
                {/* <p className="mt-3 text-[16px] max-lg:text-[14px] max-sm:text-sm text-end p-4">
                  {group.para}
                </p> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* <div className="swiper-custom-pagination" /> */}
    </Swiper>
  );
};

export default SliderHome;