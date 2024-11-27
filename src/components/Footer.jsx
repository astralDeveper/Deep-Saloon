import React from "react";
import { IMAGES } from "../utils/Images";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="container mx-auto grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:flex max-md:flex-col max-md:mx-auto gap-8">
        {/* Left Section */}
        <div>
          <img
            src={IMAGES.LOGO}
            alt="Deep Beauty Parlour"
            className="w-32 mb-"
          />
          <p className="text-sm mt-20 max-w-64 text-textColor4">
            DEEP BEAUTY PARLOUR is a Premier Salon with the best make-up artist
            in the Jabalpur area.
          </p>
          <div className="flex space-x-4 mt-10 text-lg">
            <a href="#" className="">
             <img src={IMAGES.WINSTA} alt="fb" className="w-8" />
            </a>
            <a href="#" className="">
            <img src={IMAGES.WWHT} alt="fb" className="w-8" />
            </a>
            <a href="#" className="">
            <img src={IMAGES.WYOU} alt="fb" className="w-12" />
            </a>
            <a href="#" className="">
            <img src={IMAGES.WF} alt="fb" className="w-8" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-textColor4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-textColor4">
            <li>
              <a href="#" className="text-textColor4">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-textColor4">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-textColor4">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-textColor4">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-textColor4">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-textColor4">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="text-textColor4">
                Refunds/Cancellations
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-textColor4">Support</h3>
          <p className="text-sm mb-2">
            <a href="mailto:deepbeautyparlour1999@gmail.com" className="text-textColor4">
              deepbeautyparlour1999@gmail.com
            </a>
          </p>
          <p className="text-sm">
            <a href="tel:+918982165818" className="text-textColor4">
              +91 8982165818
            </a>
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-textColor4">Our Newsletters</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email*"
              className="bg-black border border-white rounded-3xl px-6 py-4 max-md:w-full text-sm placeholder-PlaceholderColor placeholder:text-lg placeholder:font-bold focus:outline-none"
            />
            <button
              type="submit"
              className="bg-transparent border-2 border-textColor4 text-textColor4 rounded-3xl py-4 w-32 lg:mx-auto text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-textColor4 mb-10">
        <p>
          ©2024–2025 by DEEP BEAUTY PARLOUR. Powered by V.A.P. JEC'27
        </p>
      </div>
    </footer>
  );
};

export default Footer;
