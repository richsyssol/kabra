import React, { useRef } from "react";
import { Star } from "lucide-react";
import {
  kabratrend1,
  trending1,
  trending2,
  trending3,
  trending4,
} from "../../assets";

const WeddingCollections = () => {
  const carouselRef = useRef(null);

  const weddingCollections = [
    {
      id: 1,
      title: "White Gadhwal Pure Soft Silk Saree",
      image: trending1,
      price: "₹1,695.00",
      oldPrice: "₹5,445.00",
      discount: "68% off",
      rating: 4.9,
      reviews: 34,
      badge: "NEW",
    },
    {
      id: 2,
      title: "Cream Colour Double Border Che...",
      image: trending2,
      price: "₹999.00",
      oldPrice: "₹4,545.00",
      discount: "78% off",
      rating: 4.8,
      reviews: 322,
    },
    {
      id: 3,
      title: "Off White Ethnic Motif Silk Blend",
      image: trending3,
      price: "₹1,995.00",
      oldPrice: "₹3,545.00",
      discount: "43% off",
      rating: 4.9,
      reviews: 69,
    },
    {
      id: 4,
      title: "Elephant Zari Banarasi Soft Silk",
      image: trending4,
      price: "₹1,099.00",
      rating: 4.7,
      reviews: 21,
    },
  ];

  return (
    <section className="bg-[#e6d5c7] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#6b3f2a]">
              Trending Collection
            </h2>
            <div className="w-28 h-[2px] bg-[#6b3f2a] mt-2"></div>
          </div>

          <a
            href="/collections"
            className="bg-[#5a2f17] text-white px-6 py-2 rounded-md text-sm hover:bg-[#4a2612]"
          >
            view all
          </a>
        </div>

        {/* CAROUSEL */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
        >
          {weddingCollections.map((item) => (
            <div key={item.id} className="min-w-[260px] bg-transparent">
              {/* IMAGE CARD */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[380px] object-cover rounded-xl"
                />

                {item.badge && (
                  <span className="absolute top-3 right-3 bg-[#7a3d1c] text-white text-xs px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}

                {/* INFO OVER IMAGE */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">Fabric: Silk Blend</p>
                  <div className="h-[1px] bg-white/70 my-1"></div>
                  <p className="text-sm">Occasion: Traditional</p>

                  {/* RATING */}
                  <div className="flex items-center mt-2 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="fill-white text-white mr-0.5"
                      />
                    ))}
                    <span className="ml-2">
                      {item.rating} | {item.reviews}
                    </span>
                  </div>
                </div>
              </div>

              {/* TEXT BELOW */}
              <div className="mt-4 text-[#6b3f2a]">
                <p className="text-sm font-medium leading-snug">{item.title}</p>

                {/* <div className="flex items-center gap-2 mt-1 text-sm">
                  <span className="font-semibold">{item.price}</span>
                  {item.oldPrice && (
                    <span className="line-through text-gray-500">
                      {item.oldPrice}
                    </span>
                  )}
                  {item.discount && (
                    <span className="text-[#8b0000]">{item.discount}</span>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingCollections;
