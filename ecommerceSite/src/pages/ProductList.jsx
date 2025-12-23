import React, { useState } from "react";
import { FaTh, FaBars, FaCheck } from "react-icons/fa";
import Sidebar from "../components/Sidebar"; 
import ProductCard from "../components/ProductCard"; 
import { useNavigate } from "react-router-dom";

// Import images 
import tech1 from "../assets/Image/tech/6.png";
import tech2 from "../assets/Image/tech/2.png";
import c1 from "../assets/Image/interior/2.png";

const ProductList = () => {
  const [view, setView] = useState("list"); 
  const navigate = useNavigate();

  // products data 
  const products = [
    { id: 101, name: "Canon Camera EOS 2000, Black 10x zoom", price: "998.00", img: tech1 },
    { id: 102, name: "GoPro HERO6 4K Action Camera - Black", price: "998.00", img: tech2 },
    { id: 103, name: "Professional Soft Chair", price: "998.00", img: c1 },
    { id: 104, name: "GoPro HERO6 4K Action Camera - Black", price: "998.00", img: tech2 },
    { id: 105, name: "Canon Camera EOS 2000", price: "998.00", img: tech1 },
    { id: 106, name: "GoPro HERO6 4K", price: "998.00", img: tech2 },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <button 
            onClick={() => navigate("/")} 
            className="hover:text-blue-600 hover:underline flex items-center gap-1"
        >
            Home 
        </button>
        <span>›</span>
        <span className="text-gray-500">Clothings</span>
        <span>›</span>
        <span className="text-gray-500">Men's wear</span>
        <span>›</span>
        <span className="text-gray-400">Summer clothing</span>
      </div>

      <div className="flex gap-6">
        <Sidebar />
        <div className="flex-1">
          
          <div className="bg-white border border-gray-200 rounded-lg p-3 mb-4 flex flex-wrap items-center justify-between">
            <div className="text-gray-800">
              12,911 items in <span className="font-bold">Mobile accessory</span>
            </div>
            
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded" /> Verified only
              </label>
              
              <select className="border border-gray-300 rounded px-2 py-1 text-gray-600 bg-white outline-none">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
              </select>

              <div className="flex border border-gray-300 rounded overflow-hidden">
                  <button 
                      onClick={() => setView('list')}
                      className={`p-2 ${view === 'list' ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-400'}`}
                  >
                      <FaBars />
                  </button>
                  <button 
                      onClick={() => setView('grid')}
                      className={`p-2 ${view === 'grid' ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-400'}`}
                  >
                      <FaTh />
                  </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {view === 'grid' && (
              <div className="flex gap-2 mb-4 overflow-x-auto">
                  {['Samsung', 'Apple', 'Poco', 'Metallic', '4 star', '3 star'].map(tag => (
                      <div key={tag} className="flex items-center gap-1 text-sm text-gray-600 bg-white border border-gray-300 rounded px-2 py-1 cursor-pointer hover:border-blue-500 hover:text-blue-500">
                          {tag} <span className="ml-1 text-gray-400">x</span>
                      </div>
                  ))}
                  <span className="text-blue-600 text-sm cursor-pointer self-center">Clear all filter</span>
              </div>
          )}

          {/* Product Grid/List Container */}
          <div className={view === 'grid' ? "grid grid-cols-1 md:grid-cols-3 gap-4" : "flex flex-col gap-4"}>
            {products.map((item) => (
              <ProductCard key={item.id} item={item} view={view} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-8 gap-2">
              <button className="border border-gray-300 px-3 py-1 rounded bg-white text-gray-600 hover:bg-gray-50">Show 10</button>
              <div className="flex border border-gray-300 rounded overflow-hidden">
                  <button className="px-3 py-1 bg-white text-gray-600 border-r border-gray-300">&lt;</button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-800 border-r border-gray-300 font-medium">1</button>
                  <button className="px-3 py-1 bg-white text-gray-600 border-r border-gray-300">2</button>
                  <button className="px-3 py-1 bg-white text-gray-600">3</button>
                  <button className="px-3 py-1 bg-white text-gray-600 border-l border-gray-300">&gt;</button>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductList;