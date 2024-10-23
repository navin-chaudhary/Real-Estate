'use client';
import Image from 'next/image';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

export default function ListingCard({ listing }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {listing.images && listing.images.length > 0 ? (
          <Image
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
        
        {/* Featured Badge */}
        {listing.featured && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            Featured
          </div>
        )}

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-lg font-bold shadow-lg">
          {formatPrice(listing.price)}
        </div>

        {/* Property Type Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium capitalize shadow-lg">
          {listing.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-1 mb-2">
          {listing.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <p className="text-sm line-clamp-1">{listing.location}</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 my-4"></div>

        {/* Property Details */}
        <div className="grid grid-cols-3 gap-4 text-gray-600">
          <div className="flex items-center space-x-2">
            <Bed className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{listing.beds} {listing.beds === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Bath className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{listing.baths} {listing.baths === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Square className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{listing.sqft ? listing.sqft.toLocaleString() : 'N/A'} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}