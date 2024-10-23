"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "https://images.pexels.com/photos/8031878/pexels-photo-8031878.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5524166/pexels-photo-5524166.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/28120079/pexels-photo-28120079.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative bg-gray-900 h-[600px]">
      <div className="absolute inset-0">
        <img
          src={images[currentImage]}
          alt="Dynamic city skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Find Your Dream Home
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-lg">
          Explore a vast collection of stunning homes, apartments, and luxury
          estates in prime locations.
        </p>
        <Link
          href="/listings"
          className="mt-6 inline-block px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
}
