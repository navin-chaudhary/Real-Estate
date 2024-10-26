"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Search, Home, MapPin, DollarSign } from 'lucide-react';

const HomeFinderHero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 min-h-[600px] lg:min-h-[800px]">
        <div className="absolute inset-0">
          <Image
            src='/images/homepage.jpg'
            alt="Dynamic city skyline"
            className="w-full h-full object-cover"
            width={2000}
            height={2000}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-70"></div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="pt-32 lg:pt-40 pb-12">
            {/* Header Content */}
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Find Your Dream Home Today
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
                Discover your perfect home with HomeFinder - Your trusted partner in real estate. 
                Search through thousands of listings in your desired location.
              </p>
            </div>

            {/* Search Section */}
            <div className="bg-white p-4 rounded-lg shadow-xl max-w-4xl">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Enter location or keyword..."
                      className="w-full p-4 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Property Type Select */}
                <div className="lg:w-48">
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All Types</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                  </select>
                </div>

                {/* Search Button */}
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                  Search
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                <Home className="text-white mb-2" size={24} />
                <h3 className="text-white text-lg font-semibold">10,000+ Listings</h3>
                <p className="text-gray-300">Updated daily</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                <MapPin className="text-white mb-2" size={24} />
                <h3 className="text-white text-lg font-semibold">100+ Cities</h3>
                <p className="text-gray-300">Across the country</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                <DollarSign className="text-white mb-2" size={24} />
                <h3 className="text-white text-lg font-semibold">Best Deals</h3>
                <p className="text-gray-300">Guaranteed prices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Buttons */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/property"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
            >
              Explore Properties
            </Link>
            <Link
              href="/sell"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 text-lg font-semibold rounded-md shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out"
            >
              List Your Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFinderHero;