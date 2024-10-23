'use client'
import { useState } from 'react';

export default function ListingFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    propertyTypes: [],
    bedrooms: '',
    priceRange: {
      min: '',
      max: ''
    }
  });

  const propertyTypes = ['house', 'apartment', 'studio', 'penthouse', 'townhouse'];

  const handlePropertyTypeChange = (type) => {
    setFilters(prev => {
      const updatedTypes = prev.propertyTypes.includes(type)
        ? prev.propertyTypes.filter(t => t !== type)
        : [...prev.propertyTypes, type];
      
      const updatedFilters = {
        ...prev,
        propertyTypes: updatedTypes
      };
      
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const handleBedroomChange = (value) => {
    setFilters(prev => {
      const updatedFilters = {
        ...prev,
        bedrooms: value
      };
      
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };



  return (
    <div className="bg-white p-4 rounded-lg shadow-md lg:w-60">
      <h3 className="text-lg lg:text-3xl font-semibold mb-4 text-black">
        Filters
      </h3>

      <div className="space-y-6">
        {/* Property Type Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 lg:text-xl mb-3">
            Property Type
          </label>
          <div className="space-y-2">
            {propertyTypes.map(type => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded text-blue-600"
                  checked={filters.propertyTypes.includes(type)}
                  onChange={() => handlePropertyTypeChange(type)}
                />
                <span className="ml-2 text-black capitalize">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Bedrooms Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 lg:text-xl mb-2">
            Bedrooms
          </label>
          <select
            className="w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.bedrooms}
            onChange={(e) => handleBedroomChange(e.target.value)}
          >
            <option value="">Any</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
          </select>
        </div>

        <button
          onClick={() => {
            const resetFilters = {
              propertyTypes: [],
              bedrooms: '',
              priceRange: { min: '', max: '' }
            };
            setFilters(resetFilters);
            onFilterChange(resetFilters);
          }}
          className="w-full bg-blue-600 font-bold text-white py-2 rounded-md  hover:bg-blue-700 transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
