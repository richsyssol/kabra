import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  designerlehanga,
  kanjipuramsarees,
  paithani,
  partysarees,
  sarees3,
  weddingsarees,
  straightcut,
} from "../../assets";

const TopCategories = () => {
  const topCategories = [
    {
      id: 1,
      name: " Sarees",
      slug: "sarees",
      image: sarees3,
      count: "300+",

      description: "Luxurious  sarees",
    },
    {
      id: 2,
      name: " Lehengas",
      slug: "lehengas",
      image: designerlehanga,
      count: "200+",
      description: "Contemporary lehengas",
    },
    {
      id: 3,
      name: "Salwar suits",
      slug: "salwarsuite",
      image: straightcut,
      count: "150+",
      description: "Traditional Salwar suits",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <motion.div
        className="text-center mb-6 md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
          Top Categories
        </h2>
        <div className="h-1 w-16 md:w-20 bg-amber-500 mx-auto mb-4" />
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Explore our most popular collections
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              to={`/Categorydetail/${category.slug}`}
              className="block bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover"
              />
              {/* Product Count Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <span className="text-amber-700 font-bold text-sm">
                    {category.count}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900">
                  {category.name}
                </h3>

                <p className="text-gray-600 mt-2">{category.description}</p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-amber-600 font-medium">
                    Explore Collection
                  </span>
                  <ArrowRight className="text-amber-600" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
