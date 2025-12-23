import React, { useState, useEffect } from "react";

// tech product images 
import product1 from "../../assets/Image/tech/8.png";
import product2 from "../../assets/Image/tech/7.png";
import product3 from "../../assets/Image/tech/6.png";
import product4 from "../../assets/Image/tech/5.png";
import product5 from "../../assets/Image/tech/4.png";

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // change time according to your need 
  useEffect(() => {
    const targetDate = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); 

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => String(time).padStart(2, "0");

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hour", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  const products = [
    { name: "Smart watches", discount: "-25%", img: product1 },
    { name: "Laptops", discount: "-15%", img: product2 },
    { name: "GoPro cameras", discount: "-40%", img: product3 },
    { name: "Headphones", discount: "-25%", img: product4 },
    { name: "Canon camera ", discount: "-25%", img: product5 },
  ];

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="bg-white border border-gray-200 rounded-lg flex flex-wrap">

        {/* timer clock here  */}
        <div className="w-full md:w-64 p-5 border-r border-gray-200">
          <h3 className="font-bold text-lg mb-1">Deals and offers</h3>
          <p className="text-gray-500 text-sm mb-4">Hygiene equipments</p>
          
          <div className="flex gap-1 text-center">
            {timerItems.map((item, i) => (
              <div key={i} className="bg-gray-800 text-white p-2 rounded w-11">
                <span className="font-bold text-sm block">
                  {formatTime(item.value)}
                </span>
                <span className="text-[10px] text-gray-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

          {/* product are displaying here  */}
        <div className="flex-1 flex overflow-x-auto">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[140px] p-4 border-l border-gray-200 text-center flex flex-col items-center justify-between cursor-pointer hover:shadow-lg transition"
            >
              <div className="h-24 flex items-center justify-center text-5xl text-gray-300 bg-white rounded w-full mb-2">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full object-contain"
                />
              </div>
              <div>
                <p className="text-gray-800 font-medium text-sm mb-1">
                  {item.name}
                </p>
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                  {item.discount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;