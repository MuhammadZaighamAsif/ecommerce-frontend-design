import React from "react";

const CategorySection = ({ title, bg ,items }) => {

  return (
    <section className="container mx-auto px-4 py-4">
      <div className="bg-white border border-gray-200 rounded-lg flex">
        
        <div
          className="w-64 p-6 bg-cover bg-center relative flex-0 hidden md:block"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h3 className="font-bold text-xl  mb-4 text-gray-800 w-32">{title}</h3>
          <button className="bg-white text-gray-900 text-center px-4 py-2 rounded shadow text-sm font-medium hover:bg-gray-50">
            Source now
          </button> 
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-l border-b border-gray-200 p-4 flex justify-between hover:shadow-md transition bg-white"
            >
              <div>
                <h4 className="text-gray-800 font-medium text-md mb-1">
                  {item.name}
                </h4>
                <p className="text-gray-400 text-md">
                  From <br /> USD {item.price}
                </p>
              </div>
              
              <div className="w-19 h-19 flex items-center justify-center rounded">
                {item.icon ? (
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className="w-full h-full object-contain " 
                  />
                ) : ( // if image is not avaialable we display a box
                  <span className="text-2xl">📦</span>
                )}
              </div>   
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;