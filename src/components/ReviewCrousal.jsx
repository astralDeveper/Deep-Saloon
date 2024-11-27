import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Use this import for newer versions of Swiper
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { ReviewCrousalData } from "../utils/DummyData";

const ReviewCrousal = () => {
  const totalStars = 5;

  const getStars = (rating) => {
    return Array.from({ length: totalStars }, (_, index) => index < rating);
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [groupedCards, setGroupedCards] = useState([]);

  const updateItemsPerSlide = () => {
    const width = window.innerWidth;

    if (width <= 550) {
      setItemsPerSlide(1);
    } else if (width <= 768) {
      setItemsPerSlide(2);
    } else if (width <= 1200) {
      setItemsPerSlide(3);
    } else if (width <= 1880) {
      setItemsPerSlide(3);
    } else {
      setItemsPerSlide(3);
    }
  };

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  useEffect(() => {
    setGroupedCards(ReviewCrousalData);
  }, [itemsPerSlide]);

  useEffect(() => {
    updateItemsPerSlide();

    const handleResize = () => {
      updateItemsPerSlide();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={10}
      pagination={{
        clickable: true,
        el: ".swiper-custom-pagination",
      }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
    >
      {groupedCards.map((group, index) => (
        <SwiperSlide key={index} className="">
          <div className="flex items-center justify-center gap-[-20px]">
            <div
              className={`bg-BackgroundColor6 p-4 max-sm:p-6 flex items-center rounded-xl max-w-[400px] w-full py-12`}
            >
              <div>
                <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-center">
                  <div className="w-[80px] max-lg:w-[60px]">
                    <img
                      src={group.icon}
                      className="object-cover size-16 rounded-full"
                      alt="card image"
                    />
                  </div>
                  <div>
                    <h3 className="text-[22px] max-lg:text-[18px] text-start font-semibold max-sm:text-lg">
                      {group.title}
                    </h3>
                    <div className="flex items-center">
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
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-[16px] max-lg:text-[14px] max-sm:text-sm text-end p-4">
                  {group.date}
                </p>
                <p className="mt-3 text-[16px] max-lg:text-[14px] max-sm:text-sm text-end p-4">
                  {group.message}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* <div className="swiper-custom-pagination" /> */}
    </Swiper>
  );
};

export default ReviewCrousal;
