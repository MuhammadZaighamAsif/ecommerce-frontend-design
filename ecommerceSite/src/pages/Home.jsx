import React from "react";
import HeroSection from "../components/home/HeroSection";
import DealsSection from "../components/home/DealsSection";
import CategorySection from "../components/home/CategorySection";
import RequestQuote from "../components/home/RequestQuote";
import Recommended from "../components/home/Recommended";
import { ExtraServices, SuppliersRegion, Subscribe } from "../components/home/BottomSections";

// home and interior images 
import pd1 from "../assets/Image/interior/1.png";
import pd2 from "../assets/Image/interior/2.png";
import pd3 from "../assets/Image/interior/9.png";
import pd4 from "../assets/Image/tech/8.png";
import pd6 from "../assets/Image/interior/8.png";
import pd7 from "../assets/Image/interior/10.png";
import pd8 from "../assets/Image/interior/8.png";


// tech product images

import t1 from "../assets/Image/tech/1.png";
import t5 from "../assets/Image/tech/5.png";
import t6 from "../assets/Image/tech/6.png";
import t7 from "../assets/Image/tech/7.png";
import t8 from "../assets/Image/tech/8.png";
import t9 from "../assets/Image/tech/9.png";
import t10 from "../assets/Image/tech/10.png";

// category images
import c1 from "../assets/Image/category/image 98.png";
import c2 from "../assets/Image/category/Group 969.png";

const Home = () => {
  // Data for Category 1
  const homeOutdoorData = [
    { name: "Soft chairs", price: "19", icon: pd1},
    { name: "Sofa & chair", price: "19", icon: pd2 },
    { name: "Kitchen dishes", price: "19", icon: pd3 },
    { name: "Smart watches", price: "19", icon: pd4 },
    { name: "Kitchen mixer", price: "100", icon: pd3 },
    { name: "Blenders", price: "39", icon: pd6 },
    { name: "Home appliance", price: "19", icon: pd7 },
    { name: "Coffee maker", price: "10", icon: pd8   },
  ];

  // Data for Category 2
  const electronicsData = [
    { name: "Smart watches", price: "19", icon: t8 },
    { name: "Cameras", price: "89", icon: t6 },
    { name: "Headphones", price: "10", icon: t5},
    { name: "Smart watches", price: "90", icon: t8 },
    { name: "Gaming set", price: "35", icon: t9},
    { name: "Laptops & PC", price: "340", icon: t7},
    { name: "Smartphones", price: "19", icon: t1 },
    { name: "Electric kattle", price: "240", icon: t10 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <HeroSection />
      <DealsSection />
      <CategorySection 
        title="Home and outdoor" 
        bg = {c2}
        items={homeOutdoorData} 
      />
      <CategorySection 
        title="Electronic Gadgets" 
        bg = {c1}
        items={electronicsData} 
      />
      <RequestQuote />
      <Recommended />
      <ExtraServices />
      <SuppliersRegion />
      <Subscribe />
    </div>
  );
};

export default Home;