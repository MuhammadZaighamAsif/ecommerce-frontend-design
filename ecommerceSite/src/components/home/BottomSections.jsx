import React from "react";
import { FaSearch, FaBox, FaPaperPlane, FaShieldAlt , FaEnvelope} from "react-icons/fa";

// all services images
import s2 from "../../assets/Image/services/1.png";
import s1 from "../../assets/Image/services/Mask group.png";
import s3 from "../../assets/Image/services/Mask group1.png";
import s4 from "../../assets/Image/services/Mask group3.png";

// all flags images 
import f1 from "../../assets/Image/flags/Property 1=AE.png";
import f2 from "../../assets/Image/flags/Property 1=AU.png";
import f3 from "../../assets/Image/flags/Property 1=CN.png"
import f4 from "../../assets/Image/flags/Property 1=DK.png";
import f5 from "../../assets/Image/flags/Property 1=FR.png";
import f6 from "../../assets/Image/flags/Property 1=GB.png";
import f7 from "../../assets/Image/flags/Property 1=IT.png";
import f8 from "../../assets/Image/flags/Property 1=RU.png";
import f9 from "../../assets/Image/flags/Property 1=US.png";


// in this file we have three components
// 1. ExtraServices
// 2. SuppliersRegion
// 3. Subscribe 
// we are exporting them all which are basically  the parts  of our Bottom Section 



export const ExtraServices = () => {
  const services = [
    { 
      icon: <FaSearch />, 
      title: "Source from Industry Hubs", 
      img: s1 
    },
    { 
      icon: <FaBox />, 
      title: "Customize Your Products", 
      img: s2 
    },
    { 
      icon: <FaPaperPlane />, 
      title: "Fast, reliable shipping by ocean or air", 
      img: s3 
    },
    { 
      icon: <FaShieldAlt />, 
      title: "Product monitoring and inspection", 
      img: s4 
    },
  ];

  return (
    <section className="container mx-auto px-4 py-6">
      <h3 className="font-bold text-xl mb-4 text-gray-800">Our extra services</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {services.map((srv, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
            
            <div className="h-32 relative">
                <img 
                    src={srv.img} 
                    alt={srv.title} 
                    className="w-full h-full object-cover object-center grayscale-25" 
                />
            </div>

            <div className="p-5 relative">                
                <div className="absolute right-5 -top-7 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-2 border-white text-gray-700 text-lg">
                    {srv.icon}
                </div>

                <h4 className="font-medium text-gray-800 text-base leading-snug pr-8">
                    {srv.title}
                </h4>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};


export const SuppliersRegion = () => {
  const regions = [
    { name: "Arabic Emirates", code: "AE", img: f1 },
    { name: "Australia", code: "AU", img: f2 },
    { name: "United States", code: "US", img: f3 },
    { name: "Russia", code: "RU", img: f4 },
    { name: "Italy", code: "IT", img: f5 },
    { name: "Denmark", code: "DK", img: f6 },
    { name: "France", code: "FR", img: f7 },
    { name: "China", code: "CN", img: f8 },
    { name: "Great Britain", code: "GB", img: f9 }
  ];

  return (
    <section className="container mx-auto px-4 py-6">
      <h3 className="font-bold text-xl mb-4 text-gray-800">Suppliers by region</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {regions.map((r, i) => (
          <div key={i} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
            <img 
              src={r.img} 
              alt={r.name} 
              className="w-7 h-5 object-cover rounded-sm border border-gray-200" 
            />

            <div className="text-sm text-gray-600">
              <span className="font-medium text-gray-800 block">{r.name}</span>
              <span className="text-xs text-gray-400">shopname.{r.code.toLowerCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Subscribe = () => {
    return (
        <section className="bg-gray-100 py-8 text-center">
            <div className="container mx-auto px-4">
                <h3 className="font-bold text-xl text-gray-800 mb-1">Subscribe on our newsletter</h3>
                <p className="text-gray-500 text-sm mb-5">Get daily news on upcoming offers from many suppliers all over the world</p>
                <div className="flex justify-center gap-2 max-w-md mx-auto">
                    <div className="flex items-center bg-white border border-gray-300 rounded px-3 py-2 w-full">
                        <span className="text-gray-400 text-lg mr-2"><FaEnvelope/></span>
                        <input type="email" placeholder=" Email" className="w-full outline-none text-sm" />
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700">Subscribe</button>
                </div>
            </div>
        </section>
    )
}


