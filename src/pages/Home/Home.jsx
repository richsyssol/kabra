import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Star } from "lucide-react";
import {
  kabra1,
  kabra2,
  kabra3,
  kabra4,
  kabra5,
  kabra6,
  kabra7,
  kabra8,
  kabra9,
  kabra10,
  kabra11,
  kabra12,
  kabra13,
  kabra14,
  kabra15,
  kabra16,
  kabra17,
  kabra18,
  kabra19,
  kabra20,
  kabra21,
  kabra22,
  kabra23,
  kabra24,
  kabra25,
  kabra26,
  kabra27,
  kabra28,
  kabra29,
  kabra30,
  type1,
  type2,
  type3,
  type4,
  type5,
  type6,
  type7,
  type8,
} from "../../assets";
import OcassionSection from "./OcassionSection";
import HeroSection from "./HeroSection";
import TopCategories from "./TopCategories";
import WeddingCollections from "./WeddingCollections";
import InstagramFamousTrends from "./InstagramFamousTrends";
import CollectionsBanner from "./CollectionsBanner";
import CuratedCollection from "./CuratedCollection";
import ShopByOccasion from "./ShopByOccasion";
import CategorySlider from "./CategorySlider";
import AboutUs from "./AboutUs";
import VideoTestimonials from "./VideoTestimonials";
import StatsSection from "./StatsSection";
import FaqSection from "./FaqSection";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const categoriesRef = useRef(null);
  const occasionsRef = useRef(null);

  // Hero Carousel Data
  const heroSlides = [
    {
      id: 1,
      title: "Designer Sarees Collection",
      description: "Exclusive contemporary designs for the modern woman",
      image: kabra1,
      link: "/designer-sarees",
      category: "Designer Sarees",
    },
    {
      id: 2,
      title: "Luxurious Silk Sarees",
      description: "Pure silk with intricate zari work",
      image: kabra3,
      link: "/silk-sarees",
      category: "Silk Sarees",
    },
    {
      id: 3,
      title: "Bridal Collection",
      description: "Opulent wedding wear for your special day",
      image: kabra5,
      link: "/bridal-collection",
      category: "Bridal",
    },
    {
      id: 4,
      title: "Authentic Paithani",
      description: "Traditional Maharashtrian Paithani sarees",
      image: kabra8,
      link: "/paithani-sarees",
      category: "Paithani",
    },
    {
      id: 5,
      title: "Designer Lehengas",
      description: "Trendy lehengas for weddings and parties",
      image: kabra12,
      link: "/lehengas",
      category: "Lehengas",
    },
    {
      id: 6,
      title: "Party Wear Collection",
      description: "Glamorous outfits for evening events",
      image: kabra17,
      link: "/party-wear",
      category: "Party Wear",
    },
  ];

  // Top Categories Data
  const topCategories = [
    {
      id: 1,
      name: "Silk Sarees",
      image: type7,
      count: "300+",
      link: "/silk-sarees",
    },
    {
      id: 2,
      name: "Designer Lehengas",
      image: type1,
      count: "200+",
      link: "/designer-lehengas",
    },
    {
      id: 3,
      name: "Kanjeevaram",
      image: type4,
      count: "150+",
      link: "/kanjeevaram",
    },
    {
      id: 4,
      name: "Paithani Sarees",
      image: type5,
      count: "120+",
      link: "/paithani",
    },
    {
      id: 5,
      name: "Grand Wedding Sarees",
      image: type3,
      count: "180+",
      link: "/wedding-sarees",
    },
    {
      id: 6,
      name: "Party Wear",
      image: type6,
      count: "250+",
      link: "/party-wear",
    },
  ];

  // Wedding Collections Data
  const weddingCollections = [
    {
      id: 1,
      name: "Bridal Lehenga",
      image: kabra10,
      price: "₹45,000+",
      link: "/bridal-lehenga",
    },
    {
      id: 2,
      name: "Wedding Sarees",
      image: kabra15,
      price: "₹25,000+",
      link: "/wedding-sarees",
    },
    {
      id: 3,
      name: "Groom Sherwani",
      image: kabra20,
      price: "₹35,000+",
      link: "/sherwani",
    },
    {
      id: 4,
      name: "Bride's Reception",
      image: kabra25,
      price: "₹50,000+",
      link: "/reception-wear",
    },
  ];

  // Trending Collections Data
  const trendingCollections = [
    {
      id: 1,
      name: "Banarasi Silk",
      image: kabra14,
      trending: true,
      link: "/banarasi",
    },
    {
      id: 2,
      name: "Contemporary Sarees",
      image: kabra19,
      trending: true,
      link: "/contemporary",
    },
    {
      id: 3,
      name: "Designer Anarkali",
      image: kabra22,
      trending: true,
      link: "/anarkali",
    },
    {
      id: 4,
      name: "Chikankari Kurtis",
      image: kabra27,
      trending: true,
      link: "/chikankari",
    },
  ];

  // Shop by Occasions Data
  const occasions = [
    { id: 1, name: "Wedding", image: kabra2, link: "/occasions/wedding" },
    { id: 2, name: "Engagement", image: kabra7, link: "/occasions/engagement" },
    { id: 3, name: "Reception", image: kabra11, link: "/occasions/reception" },
  ];

  // Auto slide hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Scroll functions for carousels
  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TopCategories />
      <CollectionsBanner />
      <CuratedCollection />
      <ShopByOccasion />
      <CategorySlider />
      <AboutUs />
      <VideoTestimonials />
      <StatsSection />
      <InstagramFamousTrends />
      <WeddingCollections />
      <FaqSection />
      <OcassionSection />
    </div>
  );
};

export default Home;
