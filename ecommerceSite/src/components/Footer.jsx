import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaApple, FaGooglePlay, FaShoppingCart } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

// flag images 
import f1 from "../assets/Image/flags/Property 1=US.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 grid grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-500 text-white p-2 rounded-lg">
                    <FaShoppingCart size={20} />
                </div>
                <span className="text-2xl font-bold text-blue-400">Brand</span>
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Best information about the company<br />
              gies here but now lorem ipsum is
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map((Icon, index) => (
                <div key={index} className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white hover:bg-blue-500 cursor-pointer transition">
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-gray-800">About</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Find store</a></li>
              <li><a href="#" className="hover:text-blue-500">Categories</a></li>
              <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-gray-800">Partnership</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Find store</a></li>
              <li><a href="#" className="hover:text-blue-500">Categories</a></li>
              <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-gray-800">Information</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-500">Money Refund</a></li>
              <li><a href="#" className="hover:text-blue-500">Shipping</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-gray-800">For users</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-500">Login</a></li>
              <li><a href="#" className="hover:text-blue-500">Register</a></li>
              <li><a href="#" className="hover:text-blue-500">Settings</a></li>
              <li><a href="#" className="hover:text-blue-500">My Orders</a></li>
            </ul>
          </div>

           <div className="col-span-1">
            <h3 className="font-medium mb-4 text-gray-800">Get app</h3>
            <div className="flex flex-col gap-3">
              
                {/* App Store Button Mockup */}
                <button className="bg-black text-white px-3 py-2 rounded flex items-center gap-2 w-full max-w-[140px]">
                    <FaApple size={24} />
                    <div className="text-left">
                        <div className="text-[10px] leading-none">Download on the</div>
                        <div className="text-sm font-semibold leading-none">App Store</div>
                    </div>
                </button>
                
                <button className="bg-black text-white px-3 py-2 rounded flex items-center gap-2 w-full max-w-[140px]">
                    <FaGooglePlay size={20} />
                    <div className="text-left">
                        <div className="text-[10px] leading-none">GET IT ON</div>
                        <div className="text-sm font-semibold leading-none">Google Play</div>
                    </div>
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center text-gray-600 text-sm">
          <p>© 2023 Ecommerce.</p>
          <div className="flex items-center gap-2 cursor-pointer">

            <div className="w-6 h-4 bg-blue-800 relative overflow-hidden border border-gray-300">
                <div className="absolute top-0 left-0 w-full h-full flex flex-col">
                    <div className="h-1/2 bg-red-100 border-b border-red-500"></div>
                    <img src={f1} alt="english" />
                    <div className="h-1/2 bg-white"></div>
                </div>
            </div>
            <span>English</span>
            <IoIosArrowUp />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;