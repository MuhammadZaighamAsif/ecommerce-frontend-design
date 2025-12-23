import React from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const ProductCard = ({ item, view }) => {
  const isList = view === "list";
  const navigate = useNavigate(); 


  const handleViewDetails = () => {
    navigate(`/detail/${item.id}`); 
  };

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow flex ${
        isList ? "flex-row gap-6" : "flex-col"
      }`}
    >
      <div
        className={`${
          isList ? "w-48 h-48" : "w-full h-48 mb-4"
        } flex items-center justify-center bg-gray-50 rounded shrink-0`}
      >
        <img
          src={item.img}
          alt={item.name}
          className="max-h-full max-w-full object-contain mix-blend-multiply"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center relative">

        {/* Title & Price */}
        <div className="mb-2">
          <h4 className="font-medium text-gray-800 mb-1">{item.name}</h4>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">${item.price}</span>
            <span className="text-sm text-gray-400 line-through">$1128.00</span>
          </div>
        </div>

        {/* Ratings & Stats */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <span className="text-orange-400 flex items-center gap-1">
            ★★★★☆ <span className="text-orange-400 font-bold">7.5</span>
          </span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span>154 orders</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span className="text-green-600">Free Shipping</span>
        </div>

        {/* Description : we will show more in list view */}
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
          {isList
            ? "This is a detailed description of the product. It provides more information about the features, specifications, and benefits of the product to help customers make an informed decision."
            : "The description is available in list view......"}
        </p>

        {/* View Details Link - Updated with onClick */}
        <button 
          className="text-blue-600 font-medium text-sm hover:underline self-start"
          onClick={handleViewDetails} 
        >
          View details
        </button>

        {/* Heart Icon */}
        <button className="absolute top-0 right-0 p-2 border border-gray-200 rounded hover:bg-gray-50 text-blue-600">
          <FaHeart className="text-red-600"/>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;