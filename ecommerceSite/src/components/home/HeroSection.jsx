import React from "react";
import HeroBanner from "../../assets/Image/banner.png";
import AvatarImg from "../../assets/Image/avatar.jpeg";

const HeroSection = () => {

  // use normalization for the image banners 
  const heroBannerSrc = (HeroBanner && (HeroBanner.default || HeroBanner)) || "";
  const avatarSrc = (AvatarImg && (AvatarImg.default || AvatarImg)) || "";

  const categories = [
    "Automobiles", "Clothes and wear", "Home interiors", "Computer and tech",
    "Tools, equipments", "Sports and outdoor", "Animal and pets"
  ];

  return (
    <section className="container mx-auto px-4 py-4">

      {/* listing items names  here  */}
      <div className="bg-white border-gray-200 rounded-lg flex p-4 gap-4 h-[400px]">
        <aside className="w-150 mr-10 flex-0 hidden md:block">
          <ul className="space-y text-gray-600">
            {categories.map((cat, index) => (
              <li key={index} className={`cursor-pointer hover:bg-blue-50 px-3 py-2 text-sm leading-5 rounded ${index === 0 ? 'font-medium text-black bg-blue-50' : ''}`}>
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        <div
          className="flex-1 bg-blue-100 rounded-lg relative overflow-hidden"
          style={{
            backgroundImage: `url('${heroBannerSrc}')`,
            backgroundSize: 'cover',       
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute top-10 left-10  z-20"> {/* ensure text is above the bg image */}
            <h2 className="text-3xl text-gray-800 font-light mb-1">Latest trending</h2>
            <h1 className="text-3xl text-gray-900 font-bold mb-4">Electronic items</h1>
            <button className="bg-white text-gray-800 px-4 py-2 rounded shadow-sm font-medium hover:bg-gray-100 transition">
              Learn more
            </button>
          </div>
        </div>

        {/* avatars image and the component */}

        <div className="w-56 flex-0 flex flex-col gap-2">
          <div className="bg-blue-50 rounded-lg p-3 w-50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-lg overflow-hidden">
                <img src={avatarSrc} alt="user" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm  text-gray-800">Hi, user</p>
                <p className="text-sm text-gray-800">let's get started</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white text-sm py-1 rounded mb-2">Join now</button>
            <button className="w-full bg-white border border-gray-300 text-blue-600 text-sm py-1 rounded">Log in</button>
          </div>
          
          {/* orange promo  */}
          <div className="bg-orange-500 text-white rounded-lg p-2 flex-1 flex flex-col justify-center">
            <p className="w-2/3 text-sm pl-5 leading-tight mb-2">Get US $10 off with a new supplier</p>
          </div>

          {/* second promo  */}
          <div className="bg-teal-500 text-white rounded-lg p-1  flex-1 flex flex-col justify-center">
            <p className="w-2/3 text-sm pl-5 leading-tight">Send quotes with supplier preferences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;