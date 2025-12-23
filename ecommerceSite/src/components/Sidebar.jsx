import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 hidden md:block pr-4">

      {/* Category */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h3 className="font-bold text-gray-800 mb-3 flex justify-between">
          Category <span>^</span>
        </h3>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>Mobile accessory</li>
          <li>Electronics</li>
          <li>Smartphones</li>
          <li>Modern tech</li>
          <li className="text-blue-600">See all</li>
        </ul>
      </div>

      {/* Brands */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h3 className="font-bold text-gray-800 mb-3 flex justify-between">
          Brands <span>^</span>
        </h3>
        <div className="space-y-2 text-gray-600 text-sm">
          {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-blue-600" />
              {brand}
            </label>
          ))}
          <span className="text-blue-600 block mt-2">See all</span>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h3 className="font-bold text-gray-800 mb-3">Price range</h3>
        <div className="flex items-center gap-2 mb-2">
             <input type="range" className="w-full" />
        </div>
        <div className="flex gap-2">
            <div className="bg-gray-100 rounded px-2 py-1 text-sm w-1/2">0</div>
            <div className="bg-gray-100 rounded px-2 py-1 text-sm w-1/2">999999</div>
        </div>
        <button className="w-full mt-2 border border-gray-200 bg-white text-blue-600 rounded py-1 text-sm font-medium">
            Apply
        </button>
      </div>

        {/* Features */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h3 className="font-bold text-gray-800 mb-3 flex justify-between">
          Features <span>^</span>
        </h3>
        <div className="space-y-2 text-gray-600 text-sm">
          {["Metalic", "Plastic Cover", "8GB Ram", "Super Power", "Large Battery"].map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-blue-600" />
              {brand}
            </label>
          ))}
          <span className="text-blue-600 block mt-2">See all</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;