import React from "react";


// new cloth images 
import p1 from "../../assets/Image/cloth/1.png";
import p3 from "../../assets/Image/cloth/3.png";
import p4 from "../../assets/Image/cloth/4.png";
import p5 from "../../assets/Image/cloth/5.png";
import p6 from "../../assets/Image/cloth/6.png";


// some tech product images
import p8 from "../../assets/Image/tech/6.png";
import p9 from "../../assets/Image/tech/5.png";
import p10 from "../../assets/Image/tech/8.png";


const Recommended = () => {
  const items = [
    { price: "$10.30", desc: "T-shirts with multiple colors, for men" , img : p1},
    { price: "$10.30", desc: "Jeans shorts for men blue color" , img : p4},
    { price: "$12.50", desc: "Brown winter coat medium size" , img : p3},
    { price: "$34.00", desc: "Jeans bag for travel for men" , img : p5},
    { price: "$99.00", desc: "Leather wallet" , img : p6},
    { price: "$9.99", desc: "Canon camera black, 100x zoom" , img : p8 },
    { price: "$8.99", desc: "Headset for gaming with mic" , img :p9 },
    { price: "$10.30", desc: "Smartwatch silver color modern" , img : p10 },
    { price: "$10.30", desc: "Blue wallet for men leather material"  , img : p6},
    { price: "$80.95", desc: "Jeans bag for travel for men"  , img : p5},
  ];

  return (
    <section className="container mx-auto px-4 py-6">
      <h3 className="font-bold text-xl mb-4 text-gray-800">Recommended items</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((item, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded p-4 hover:shadow-md transition cursor-pointer">
            <div className="h-36 flex items-center justify-center bg-white rounded mb-3">
                <img src={item.img} alt={item.desc} className="h-full object-contain" />
            </div>
            <div className="font-bold text-gray-800  mb-1">{item.price}</div>
            <div className="text-gray-500 text-md leading-tight">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommended;