import React, { useState } from "react";
import data from "../../constant/Home/faqData.json";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7f2ef] py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-serif text-[#6b3f2a]">
            {data.sectionTitle}
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-700">
            {data.subtitle}
          </p>
          <div className="w-24 md:w-32 h-[2px] bg-[#6b3f2a] mx-auto mt-3"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-0">
          {data.faqs.map((faq, index) => (
            <div key={faq.id} className="">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-5 py-4"
              >
                <span className="font-medium text-[#6b3f2a] text-sm md:text-base">
                  {faq.question}
                </span>
                <span className="text-xl text-[#6b3f2a]">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-5 pb-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
