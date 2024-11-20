import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const Navbar = () => {
  return (
    <header className="w-[98%] mx-auto">
      <Header/>
        {/* <div className="flex items-center justify-around">
          <nav className="flex items-center justify-evenly p-2 w-[80%] top-0 text-white font-semibold font-secular">
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
            Favorites
            </Link>
          </nav>
        </div> */}
    </header>
  );
};

export default Navbar;
