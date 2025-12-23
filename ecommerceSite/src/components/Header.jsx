import React from "react";
import { FaUser, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import flag from "../assets/Image/flags/Property 1=RU.png"


const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 font-sans">
      <div className="container mx-auto px-10 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="bg-blue-500 text-white p-2 rounded-lg">
            <FaShoppingCart size={20} />
          </div>
          <span className="text-2xl font-bold text-blue-500">Brand</span>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-2xl mx-8">
          <input
            type="text"
            placeholder="Search"
            className="w-full border-2 border-blue-500 rounded-l-md px-4 py-2 outline-none"
          />
          <div className="border-2 px-3 py-2 bg-white flex items-center cursor-pointer border-l-0 border-blue-500">
            <span className="text-sm mr-1">All category</span>
            <IoIosArrowDown />
          </div>
          <button className="bg-blue-500 cursor-pointer text-white px-6 py-2 rounded-r-md font-medium hover:bg-blue-600 transition">
            Search
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex gap-6 text-gray-500 text-xs text-center">
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
            <FaUser size={20} className="mb-1" />
            <span>Profile</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
            <MdMessage size={20} className="mb-1" />
            <span>Message</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
            <FaHeart size={20} className="mb-1" />
            <span>Orders</span>
          </div>
          {/* Cart button Link */}
          <div 
            className="flex flex-col items-center cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/cart")} // Navigate to CartPage
          >
            <FaShoppingCart size={20} className="mb-1" />
            <span>My cart</span>
          </div>
        </div>
      </div>

      {/* Categories rows  */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6 text-gray-700 font-medium text-sm">
            
            <div 
              className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/products")}
            >
              <FaBars />
              <span>All category</span>
            </div>

            <a href="#" className="hover:text-blue-600">Hot offers</a>
            <a href="#" className="hover:text-blue-600">Gift boxes</a>
            <a href="#" className="hover:text-blue-600">Projects</a>
            <a href="#" className="hover:text-blue-600">Menu item</a>
            
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              <span>Help</span>
              <IoIosArrowDown />
            </div>
          </div>

          {/* Currency & Shipping */}
          <div className="flex gap-6 text-gray-700 text-sm font-medium">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>English, USD</span>
              <IoIosArrowDown />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <span>Ship to</span>
              {/* Flag */}
              <div className="w-6 h-4 flex flex-col border border-gray-200">
                <img src={flag} alt="flag" />
              </div>
              <IoIosArrowDown />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;