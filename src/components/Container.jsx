import React, { useState } from "react";
import SideNav from "./SideNav"; 
import { IMAGES } from "../utils/Images";
 

const Container = ({ mainStyle, children, name,footer }) => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const [toggleBar, setToggleBar] = useState(false);

  const changeToggle = () => {
    setToggleBar(!toggleBar);
  };

  //   const handleLogout = () => {
  //     dispatch(LogoutUser());
  //     navigate("/login");
  //   };

  return (
    // <div className="grid grid-cols-12 w-full">
    <div className="flex flex-nowrap w-full h-full">
      {/* <div className={`transition-all duration-500`}> */}
      
      <SideNav toggleBar={toggleBar} toggle={changeToggle} />
      {/* </div> */}
      <div
        className={`${
          toggleBar ? "w-full lg:w-full" : "w-full"
        } transition-all duration-500 h-full`}
      >
        <header
          className={`sm:p-5 flex justify-between items-center bg-Navbar p-4 `}
        >
          <div className="flex items-center gap-4">
            <p
              onClick={changeToggle}
              className="text-white text-2xl md:text-[30px] font-bold cursor-pointer"
            >
              {name}
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div
              onClick={() => {}}
              className="flex items-center justify-center gap-2 cursor-pointer"
            >
              {/* Search Bar start*/}
              <div className="w-full">
                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-InputFieldColor overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-gray-300">
                    <img src={IMAGES.SEARCH} className="w-6" alt="icon" />
                  </div>

                  <input
                    className=" h-full outline-none  text-sm text-gray-700  md:w-[500px] placeholder:text-PlaceholderColor"
                    type="text"
                    id="search"
                    placeholder="Search here..."
                  />
                </div>
              </div>
              {/* Search Bar end*/}
            </div>
            <div className="flex items-center gap-2"  >
              <img src={IMAGES.AVATAR} alt="Avatar" className="w-14" />
              <div className="flex items-start flex-col text-white">
                <span className="text-lg font-bold">User Name</span>
                <span className="font-light-light" >Admin</span>
              </div>
            </div>
          </div>
        </header>

        <div className={`${mainStyle} bg-BackgroundColor `}>{children}</div>

        { footer && 
          <div>

        </div>}
      </div>
    </div>
  );
};

export default Container;
