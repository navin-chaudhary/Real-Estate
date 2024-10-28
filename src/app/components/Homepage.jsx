"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomeFinderHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const images = [
    "/images/homepage.jpg",
    "/images/villa.png",
    "/images/flate.png",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex items-center dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className={`space-y-6 md:pl-0 transition-all duration-1000 transform lg:ml-8
          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
          >
            <h1
              className="text-4xl pt-2 md:text-4xl lg:text-6xl font-bold text-gray-900 md:ml-0 
            animate-fade-in-up dark:text-white"
            >
              Find Your Dream Home Today.
            </h1>
            <p className="text-gray-600 dark:text-white animate-fade-in-up delay-200">
              Discover your ideal home with HomeFinder. Browse thousands of
              quality listings with detailed photos and floor plans. Our smart
              search tools help you filter by price, location, and amenities.
              Whether you want a city apartment or suburban house, find your
              perfect match today.
            </p>
            <div className="flex space-x-4  animate-fade-in-up delay-300">
              <Link
              href={'/listings'}
                className="px-6 py-2 border-2 border-teal-500 text-teal-500 
              rounded-lg transform transition-all duration-300 hover:scale-105
              hover:bg-teal-500 hover:text-white hover:shadow-lg"
              >
                Explore
              </Link>
              <Link
              href={'/listings'}
                className="px-6 py-2 bg-teal-500 text-white rounded-lg 
              transform transition-all duration-300 hover:scale-105
              hover:bg-teal-600 hover:shadow-lg"
              >
                Add Property
              </Link>
            </div>
          </div>

          <div className="relative group mb-4">
            <div className="overflow-hidden rounded-lg">
              <div className="relative w-full aspect-square">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
                      ${
                        currentImageIndex === index ? "opacity-1" : "opacity-0"
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full   object-cover"
                      height={1000}
                      width={1000}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prevImage}
                className="bg-white/80 rounded-full p-2 opacity-85  transition-opacity"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="bg-[#14B8A6] rounded-full p-2 opacity-85  transition-opacity"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors
                    ${
                      currentImageIndex === index
                        ? "bg-teal-500"
                        : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeFinderHero;
