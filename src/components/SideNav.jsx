import React from "react"; 
import { IMAGES } from "../utils/Images";
import { Link, useLocation } from "react-router-dom";
// import { IMAGES } from "../utils/Images";
// import { CustomIcon } from "./Icons";
import { sidebarContact } from "../utils/DummyData";
// import { Link } from "react-router-dom";

const SideNav = ({ toggleBar, toggle }) => {
  const location = useLocation();

  return ( 
    <div
      className={` ${
        toggleBar
          ? "fixed lg:static w-[80%] h-screen lg:min-h-screen z-10 lg:z-0 top-0  lg:block lg:w-[12%]"
          : "hidden lg:block lg:w-[20%]"
      }  bg-Navbar min-h-screen max-w-full transition-all  duration-500  `}
    > 

      <ul className="">
        <li className="relative">
          
          <div  
            // onClick={toggle}
            className=" flex items-center justify-center p-6 "
          >
           <img src={IMAGES.LOGO} alt="Logo" className="w-20" />
          </div>
          
        </li>

        <div className="flex flex-col items-center gap-3 mt-5">
          {sidebarContact.map((items, ind) => {
            const isActive = location.pathname === items.href;
            return (
              <li key={ind}>
                <Link
                  to={items.href}
                  className={`flex items-center justify-center gap-4 py-[10px] px-6 cursor-pointer text-white  transition-all duration-1000`}
                >
                  <p
                    className={` ${toggleBar ? "" : "block"} ${
                      isActive && `font-black text-lg bg-NavButtonBg ${toggleBar ? "text-[12px] py-4 px-3 ":" px-5 py-4 text-[16px] "}  rounded-lg text-textColor6 `
                    }   font-semibold  text-center transition-all duration-700`}
                  >
                    {items.title}
                  </p>
                </Link>
              </li>
            );
          })}
          <li className="lg:text-[16px] md:text-[16px] text-[11px]  text-center transition-all duration-700 cursor-pointer text-white">
          Sign Out
          </li>
        </div>
      </ul>
    </div>
    // </div>
  );
};

export default SideNav;
