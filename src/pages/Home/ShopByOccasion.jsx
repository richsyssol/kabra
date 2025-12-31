import React from "react";
import {
  shopbyoccasion1,
  shopbyoccasion2,
  shopbyoccasion3,
  shopbyoccasion4,
  shopbyoccasion5,
  shopbyoccasion6,
  shopbyoccasion7,
} from "../../assets";

export default function ShopByOccasion() {
  const occasions = [
    { id: 1, title: "Baby shower", img: shopbyoccasion1 },
    { id: 2, title: "Wedding", img: shopbyoccasion7 },
    { id: 3, title: "Engagement", img: shopbyoccasion2 },
    { id: 4, title: "Haldi", img: shopbyoccasion4 },
    { id: 5, title: "Pooja & Ritual", img: shopbyoccasion4 },
    { id: 6, title: "Mehndi", img: shopbyoccasion5 },
    { id: 7, title: "Festival", img: shopbyoccasion6 },
    { id: 8, title: "Festival", img: shopbyoccasion7 },
  ];

  const firstRow = occasions.slice(0, 3);
  const secondRow = occasions.slice(3, 7);

  return (
    <div className="w-full bg-[#f7f2ef] py-12 md:py-16">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-10 px-4">
        <h2 className="text-xl md:text-4xl font-serif font-semibold text-[#5c2c1a]">
          Shop by Occasion
        </h2>
        <p className="text-sm md:text-lg mt-2 font-light text-gray-700">
          Styled For Every Moment
        </p>
        <div className="w-28 md:w-40 mx-auto h-[2px] bg-[#5c2c1a] mt-3"></div>
      </div>

      {/* FIRST ROW */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-4 md:px-0">
        {firstRow.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="
                w-full 
                h-48 sm:h-52 md:h-56
                object-cover
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 md:px-6 py-1.5 md:py-2 rounded-md">
              <p className="font-semibold text-[#5c2c1a] text-sm md:text-lg text-center">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SECOND ROW */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 pt-5 px-4 md:px-0">
        {secondRow.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="
                w-full
                h-40 sm:h-48 md:h-56
                object-cover
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 md:px-6 py-1.5 md:py-2 rounded-md">
              <p className="font-semibold text-[#5c2c1a] text-xs sm:text-sm md:text-lg text-center">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
