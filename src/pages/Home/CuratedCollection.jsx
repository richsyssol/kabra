import React from "react";
import {
  carousal,
  curatedcollection1,
  curatedcollection2,
  curatedcollection3,
  curatedcollection4,
  curatedcollection5,
  bgimage, // Import your background image here
} from "../../assets";

export default function CuratedCollection() {
  const items = [
    {
      id: 1,
      title: "AWESOME AJRAKH",
      type: "Ajrakh Sarees",
      img: curatedcollection1,
    },
    {
      id: 2,
      title: "BEAUTIFUL BAGRU",
      type: "Bagru Sarees",
      img: curatedcollection2,
    },
    {
      id: 3,
      title: "BELLA BANARASI",
      type: "Banarasi Sarees",
      img: curatedcollection3,
    },
    {
      id: 4,
      title: "BLISFULL BROCADE",
      type: "Brocade Sarees",
      img: curatedcollection4,
    },
    {
      id: 5,
      title: "BOLD BAAGH",
      type: "Baagh Sarees",
      img: curatedcollection5,
    },
    {
      id: 6,
      title: "BOLD BAAGH",
      type: "Baagh Sarees",
      img: curatedcollection5,
    },
    {
      id: 7,
      title: "BOLD BAAGH",
      type: "Baagh Sarees",
      img: curatedcollection5,
    },
    {
      id: 8,
      title: "BOLD BAAGH",
      type: "Baagh Sarees",
      img: curatedcollection5,
    },
    {
      id: 9,
      title: "BOLD BAAGH",
      type: "Baagh Sarees",
      img: curatedcollection5,
    },
    {
      id: 10,
      title: "BOLD BAAGH",
      type: "Baagh Sarees",
      img: curatedcollection5,
    },
  ];

  return (
    <div className="w-full bg-[#f7f2ef] ">
      {/* ---------------- TOP SLIDER STRIP ---------------- */}
      <div className="hidden sm:block overflow-hidden w-full h-10 bg-[#f7f2ef]">
        <div className="flex animate-slide">
          <img src={carousal} className="h-7 w-auto" />
          <img src={carousal} className="h-7 w-auto" />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <h2 className="text-xl md:text-4xl font-serif font-semibold text-[#5c2c1a]">
          Curated collection
        </h2>
        <div className="w-32 h-[2px] bg-[#5c2c1a] mt-2 mb-8"></div>

        {/* ----------- IMAGE SCROLL (Manual Scroll) ----------- */}
        <div className="flex overflow-x-auto scrollbar-thin pb-4 space-x-1 md:space-x-8 cursor-crosshair">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 flex flex-col items-center"
            >
              {/* Updated IMG TAG With Shape */}
              <div className="w-[200px] h-[180px] md:w-[210px] md:h-[230px] rounded-b-[60px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.type}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm mt-2 text-[#5c2c1a] font-medium">
                {item.type}
              </p>
            </div>
          ))}
        </div>

        {/* ----------- LINE AFTER IMAGES ----------- */}
        <div className="w-full h-[2px] bg-[#5c2c1a] my-8"></div>
      </div>

      {/* ---------------- BOTTOM SLIDER STRIP WITH BACKGROUND IMAGE ---------------- */}
      <div
        className="hidden sm:block overflow-hidden w-full h-30 mt-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="flex animate-slide">
          <img src={carousal} className="h-7 w-auto" />
          <img src={carousal} className="h-7 w-auto" />
        </div>
      </div>
    </div>
  );
}
