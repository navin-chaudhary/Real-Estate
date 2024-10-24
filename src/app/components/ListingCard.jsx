"use client"
import { useState } from 'react';
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ListingCard = ({ listing, onNavigate }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleCardClick = () => {
    if (onNavigate) {
      onNavigate(listing.id);
    }
  };

  

  return (
    <div 
      className="group relative bg-white dark:bg-gray-800 shadow-md hover:shadow-xl 
                 transition-all duration-300 overflow-hidden rounded-xl border border-gray-200 
                 dark:border-gray-700 transform cursor-pointer"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        {listing.images?.[0] ? (
          <div className="relative w-full h-full">
            <Image
              src={listing.images[0]}
              alt={listing.title} // Consider making this more descriptive
              className={`w-full h-full object-cover transition-transform duration-500 
                         ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
            <div className={`absolute inset-0 bg-black transition-opacity duration-300
                           ${isHovered ? 'opacity-20' : 'opacity-0'}`} />
          </div>
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-900/95 
                       backdrop-blur-sm text-blue-600 dark:text-blue-400 px-4 py-2 
                       rounded-lg font-bold shadow-lg">
          {formatPrice(listing.price)}
        </div>

        {/* Property Type Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-900/90 to-gray-800/90 
                       text-white px-3 py-1 rounded-full text-sm font-medium">
          {listing.type}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 
                      line-clamp-1 group-hover:text-blue-600 
                      dark:group-hover:text-blue-400 transition-colors duration-200">
          {listing.title}
        </h3>

        <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2">
          <MapPin className="w-4 h-4 mr-1" />
          <p className="text-sm line-clamp-1">{listing.location}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 text-gray-600 dark:text-gray-300 text-sm">
          <div className="flex items-center space-x-1">
            <Bed className="w-4 h-4" />
            <span>{listing.beds || 0} Beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-4 h-4" />
            <span>{listing.baths || 0} Baths</span>
          </div>
          <div className="flex items-center space-x-1">
            <Square className="w-4 h-4" />
            <span>{listing.sqft || 0} sqft</span>
          </div>
        </div>

        {/* View Details Button */}
        <div className="mt-4 transition-all duration-300">
          <Link 
           href={`/listings/${listing.id}`}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 
                           rounded-lg flex items-center justify-center space-x-2">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
