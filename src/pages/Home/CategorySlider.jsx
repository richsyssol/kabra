import React, { useRef } from "react";
import { dresses, kurta, lehanga, sarees } from "../../assets";

const categories = [
  { id: 1, image: dresses },
  { id: 2, image: sarees },
  { id: 3, image: lehanga },
  { id: 4, image: kurta },
];

export default function CategorySlider() {
  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const startDragging = (e) => {
    isDown = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDown = false;
  };

  const onDrag = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#f7f2ef] py-10 md:py-16">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-serif text-[#6b3f2a] border-b-2 border-[#6b3f2a] inline-block pb-2">
          Categories
        </h2>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onDrag}
        className="
          flex 
          gap-4 md:gap-0
          px-4 md:px-10
          overflow-x-auto
          scrollbar-hide
          touch-pan-x
        "
      >
        {categories.map((item) => (
          <div
            key={item.id}
            className="
              flex-shrink-0
              w-[200px] sm:w-[220px] md:min-w-[340px]
              flex justify-center
            "
          >
            {/* Image */}
            <div
              className="
                relative
                w-full
                h-[300px] sm:h-[340px] md:h-[460px]
                overflow-hidden
                rounded-[100px] md:rounded-[120px]
                bg-transparent
              "
            >
              <img
                src={item.image}
                alt=""
                className="
                  w-full
                  h-full
                  object-contain
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />

              {/* Overlay (desktop only visual) */}
              <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-[#6b3f2a]/80 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
