import React, { useState } from 'react';
import banner from "../assets/Home/banner.png"

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    banner,banner,banner,banner,banner,banner,banner,banner
    
    
    
  ];

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return ( 

<div className='flex justify-between items-center bg-slate-600 '>
<div>
  <button
        type="button"
        className="  bg-red-800 p-2 h-24 top-10 bottom-10  start-0 z-30 flex items-center justify-center  cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  group-focus:ring-4 group-focus:ring-yellow-500">
          <svg
            className="w-4 h-4 text-yellow-500 dark:text-yellow-400 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
</div>
 



 {/* slider */}
      <div className="relative  overflow-hidden rounded-lg md:h-full w-full bg-red-600">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image}
              className="w-full h-full object-contain"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}

      </div>

 
      {/*  next button s*/}

      <div>
  <button
        type="button"
        className="  bg-red-800 p-2 h-24 top-10 bottom-10  start-0 z-30 flex items-center justify-center  cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full   ">
          <svg
            className="w-4 h-4 text-yellow-500 dark:text-yellow-400 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
</div> 

{/* next button e */}

</div>


       
  );
};

export default Carousel;
