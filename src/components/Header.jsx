import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiArrowDropDownFill, RiMapPinLine, RiShoppingCartLine, RiMenuLine, RiCloseLine } from "@remixicon/react";
import SearchBar from "./Searchbar";
import { IMAGES } from "../utils/Images";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  
  return (
    <header className="text-white">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img  src={IMAGES.LOGO} alt="logo" className="w-24 max-xl:w-16" />
          </NavLink>
        </div>

        {/* Delivery Info (Visible on larger screens) */}
        <div className="flex flex-col text-xs text-gray-300">
          <p>Delivering to Louisville 40223</p>
          <div className="flex items-center text-sm">
            <RiMapPinLine className="mr-1" />
            <span className="cursor-pointer hover:text-white">Update location</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-xl:hidden w-[60%]">
          <SearchBar />
        </div>

        {/* Language Dropdown */}
        <div className="relative group max-md:hidden ">
          <button className="flex items-center px-4 py-2">
            <img src={IMAGES.PK} alt="pk" className="w-5 h-5 mr-2" />
            <RiArrowDropDownFill />
          </button>
          <div className="absolute hidden group-hover:block w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 ">
            {["English - EN", "Español - ES", "عربية - AR", "Deutsch - DE", "中文 - ZH"].map((lang) => (
              <a key={lang} href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                {lang}
              </a>
            ))}
          </div>
        </div>

        {/* Account Info Dropdown */}
        <div className="relative group max-md:hidden ">
          <button className="flex items-center px-4 py-2">
            <div>
              <p className="text-sm">Hello, sign in</p>
              <p className="font-medium">Account & Lists</p>
            </div>
            <RiArrowDropDownFill />
          </button>
          <div className="absolute hidden group-hover:block w-[26rem] -ml-36 mt-1 bg-white border border-gray-200 rounded-md shadow-lg p-4 z-50">
            <div className="flex items-center flex-col border-b pb-2">
              <button className="bg-[#fed731] px-4 py-2 w-full rounded-lg">Sign in</button>
              <p className="text-xs text-gray-500 mt-2">
                New customer? <span className="text-blue-600 cursor-pointer">Start here</span>.
              </p>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <p className="font-bold text-[#fed731]">Your Lists</p>
                <NavLink to="#" className="block text-sm text-gray-600 hover:underline">Create a List</NavLink>
                <NavLink to="#" className="block text-sm text-gray-600 hover:underline">Find a List or Registry</NavLink>
              </div>
              <div className="border-r border-gray-300 mx-4"></div>
              <div>
                <p className="font-bold text-[#fed731]">Your Account</p>
                {["Account", "Orders", "Recommendations", "Browsing History", "Watchlist", "Music Library"].map((item) => (
                  <NavLink key={item} to="#" className="block text-sm text-gray-600 hover:underline">
                    {item}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cart */}
        <div className="flex items-center">
          <div className="relative">
            <RiShoppingCartLine size={24} />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">0</span>
          </div>
          <p className="hidden md:block text-sm ml-2">Cart</p>
        </div>

        {/* Hamburger Menu (Visible on smaller screens) */}
        <button className=" max-lg:block hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      </nav>


       <div className="flex items-center justify-around  max-lg:hidden ">
          <nav className="flex items-center justify-center gap-16 max-xl:gap-12 p-2 w-[80%]  top-0 text-white font-semibold max-xl:text-sm font-secular">
            <Link to="/" className="">
              Home
            </Link>
            <Link to="/services" className="">
            SERVICES
            </Link>
            <Link to="/about-us" className="">
            ABOUT US
            </Link>
            <Link to="/countact-us" className="">
            CONTACT US
            </Link>
            <Link to="/giftcard" className="">
            GIFTCARD
            </Link>
            <Link to="/membership" className="">
            MEMBERSHIP
            </Link>
            <Link to="/favorites" className="">
            FAVORITES
            </Link>
          </nav>
        </div>

 







      {/* Mobile Menu */}
{menuOpen && (
  <div className={`flex flex-col items-center text-white absolute bg-[#161616] w-full left-0 z-50 `}>


    {/* Language Dropdown */}
    <div className="relative group z-30">
      <button className="flex items-center px-4 py-2">
        <img src={pkimg} alt="pk" className="w-5 h-5 mr-2" />
        <RiArrowDropDownFill />
      </button>
      <div className="absolute hidden group-hover:block w-48 bg-white border border-gray-200 rounded-md shadow-lg">
        {["English - EN", "Español - ES", "عربية - AR", "Deutsch - DE", "中文 - ZH"].map((lang) => (
          <a key={lang} href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            {lang}
          </a>
        ))}
      </div>
    </div>

    {/* Account Info Dropdown */}
    <div className="relative group">
      <button className="flex items-center px-4 py-2">
        <div>
          <p className="text-sm">Hello, sign in</p>
          <p className="font-medium">Account & Lists</p>
        </div>
        <RiArrowDropDownFill />
      </button>
      <div className="absolute hidden group-hover:block w-auto -ml-20 bg-white border border-gray-200 rounded-md shadow-lg p-4">
        {/* Sign-in Section */}
        <div className="flex flex-col items-center border-b pb-2">
          <button className="bg-[#fed731] px-4 py-2 w-full rounded-lg">Sign in</button>
          <p className="text-xs text-gray-500 mt-2">
            New customer? <span className="text-blue-600 cursor-pointer">Start here</span>.
          </p>
        </div>

        {/* Account & Lists Links */}
        <div className="flex justify-between pt-4">
          {/* Your Lists Section */}
          <div>
            <p className="font-bold text-[#fed731]">Your Lists</p>
            {["Create a List", "Find a List or Registry"].map((item) => (
              <NavLink key={item} to="#" className="block text-sm text-gray-600 hover:underline">
                {item}
              </NavLink>
            ))}
          </div>
          {/* Divider */}
          <div className="border-r border-gray-300 mx-4"></div>
          {/* Your Account Section */}
          <div>
            <p className="font-bold text-[#fed731]">Your Account</p>
            {["Account", "Orders", "Recommendations", "Browsing History", "Watchlist", "Music Library"].map((item) => (
              <NavLink key={item} to="#" className="block text-sm text-gray-600 hover:underline">
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>





    {/* Navigation Links */}
    <div className="flex items-center justify-center gap-2 flex-col mb-20" >
            <Link to="/" className="">
              HOME
            </Link>
            <Link to="/services" className="">
            SERVICES
            </Link>
            <Link to="/about-us" className="">
            ABOUT US
            </Link>
            <Link to="/countact-us" className="">
            CONTACT US
            </Link>
            <Link to="/giftcard" className="">
            GIFTCARD
            </Link>
            <Link to="/membership" className="">
            MEMBERSHIP
            </Link>
            <Link to="/favorites" className="">
            FAVORITES
            </Link>
    </div>
  </div>
)}

    </header>
  );
};

export default Header;
