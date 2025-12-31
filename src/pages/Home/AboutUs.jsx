import React from "react";
import aboutUsData from "../../constant/Home/aboutUsData.json";
import { aboutbg, bgimage } from "../../assets";

import kabra from "../../assets/videos/kabra_reel_1.mp4";
export default function AboutUs() {
  const { title, subtitle, video, paragraphs, buttonText, buttonLink } =
    aboutUsData;

  return (
    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${aboutbg})`,
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#f7f2ef]/50"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        {/* LEFT – VIDEO */}
        <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-lg">
          <video
            className="w-full h-full object-cover"
            src={kabra}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f7f2ef] to-transparent"></div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="text-[#6b3f2a]">
          <h2 className="text-xl md:text-4xl font-serif mb-2">{title}</h2>

          <div className="w-24 h-[2px] bg-[#6b3f2a] mb-6"></div>

          <h4 className="font-semibold mb-4">{subtitle}</h4>

          {paragraphs.map((text, index) => (
            <p key={index} className="mb-5 leading-relaxed text-justify">
              {text}
            </p>
          ))}

          <a href={buttonLink}>
            <button className="bg-[#6b3f2a] text-white px-8 py-3 tracking-widest hover:bg-[#583020] transition">
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
