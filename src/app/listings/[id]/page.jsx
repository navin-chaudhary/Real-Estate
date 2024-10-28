"use client";
import { useParams } from "next/navigation";
import { ChevronLeft, Bed, Bath, Square, MapPin, Share2, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SAMPLE_LISTINGS } from "../data";

export default function ListingDetails() {
  const params = useParams();
  const [isLiked, setIsLiked] = useState(false);

  const listingId = parseInt(params.id, 10);
  
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: listing?.title,
          text: `Check out this property: ${listing?.title}`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const listing = SAMPLE_LISTINGS?.find(
    (listing) => listing.id === listingId
  );

  if (!listing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] animate-fadeIn px-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center">
          Property not found
        </h1>
        <Link
          href="/listings"
          className="mt-4 flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to listings
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 animate-fadeIn">
        {/* Navigation and Actions */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <Link
            href="/listings"
            className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 hover:-translate-x-1"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
            <span className="text-sm sm:text-base">Back to listings</span>
          </Link>
          <div className="flex space-x-2 sm:space-x-4">
            <button
              onClick={handleShare}
              className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors duration-300" />
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <Heart
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                  isLiked
                    ? "fill-red-500 text-red-500"
                    : "text-gray-600 dark:text-gray-300 group-hover:text-red-500"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300">
          {/* Image Section */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] group">
            {listing.images?.[0] ? (
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={listing.images[0]}
                  alt={listing.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400 text-sm sm:text-base">No image available</span>
              </div>
            )}
            
            {/* Property Type Badge */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-gradient-to-r from-black/80 to-black/60 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
              {listing.type}
            </div>
            
            {/* Price Tag */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-blue-600 dark:text-blue-400 px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-2xl shadow-lg sm:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              {formatPrice(listing.price)}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Title and Location */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
                {listing.title}
              </h1>
              <div className="flex items-center text-gray-600 dark:text-gray-300 group transition-all duration-300 hover:text-blue-500">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm sm:text-base lg:text-lg">{listing.location}</p>
              </div>
            </div>

            {/* Property Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
              {[
                { icon: Bed, label: "Bedrooms", value: listing.beds },
                { icon: Bath, label: "Bathrooms", value: listing.baths },
                { icon: Square, label: "Area", value: `${listing.sqft} sqft` }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700/50 p-4 sm:p-6 rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="flex items-center space-x-3">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {feature.label}
                      </p>
                      <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                        {feature.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-6 sm:mt-8 border-t dark:border-gray-700 pt-6 sm:pt-8">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500/50">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}