import React from "react";
import data from "../../constant/Home/videoTestimonialsData";

export default function VideoTestimonials() {
  return (
    <section
      className="relative py-10 md:py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      {/* Background Opacity Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>
      {/* If you want dark effect instead, use: bg-black/40 */}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-serif text-[#6b3f2a] border-b-2 border-[#6b3f2a] inline-block pb-2">
            {data.sectionTitle}
          </h2>
        </div>

        {/* Testimonials */}
        <div
          className="
        flex md:grid
        md:grid-cols-4
        gap-4 md:gap-8
        overflow-x-auto md:overflow-visible
        scrollbar-hide
        snap-x snap-mandatory
      "
        >
          {data.testimonials.map((item) => (
            <div
              key={item.id}
              className="
            flex-shrink-0
            w-[260px] sm:w-[300px] md:w-auto
            snap-center
            bg-white
            rounded-xl
            shadow-md
            overflow-hidden
          "
            >
              {/* Video */}
              <div className="relative h-[350px] sm:h-[220px] md:h-[350px]">
                <video
                  src={item.video}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
