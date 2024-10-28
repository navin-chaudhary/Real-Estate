'use client'
import { useState } from 'react';

export default function ListingFilters({ onFilterChange  }) {
  const [filters, setFilters] = useState({
    propertyTypes: [],
    bedrooms: '',
    priceRange: {
      min: '',
      max: ''
    }
  });

  const propertyTypes = ['House', 'Apartment','Penthouse', 'Villa'];

  const handlePropertyTypeChange = (type) => {
    setFilters(prev => {
      const updatedTypes = prev.propertyTypes.includes(type)
        ? prev.propertyTypes.filter(t => t !== type)
        : [...prev.propertyTypes, type];
      
      if (updatedTypes.toString() !== prev.propertyTypes.toString()) {
        const updatedFilters = {
          ...prev,
          propertyTypes: updatedTypes
        };
        onFilterChange(updatedFilters);
        return updatedFilters;
      }

      return prev;
    });
  };

  const handleBedroomChange = (value) => {
    setFilters(prev => {
      if (prev.bedrooms !== value) {
        const updatedFilters = {
          ...prev,
          bedrooms: value
        };
        onFilterChange(updatedFilters);
        return updatedFilters;
      }
      return prev;
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md lg:w-60">
      <h3 className="text-lg lg:text-3xl font-semibold mb-4 text-black dark:text-white">
        Filters
      </h3>

      <div className="space-y-6">
        {/* Property Type Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 lg:text-xl mb-3">
            Property Type
          </label>
          <div className="space-y-2">
            {propertyTypes.map(type => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded text-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  checked={filters.propertyTypes.includes(type)}
                  onChange={() => handlePropertyTypeChange(type)}
                />
                <span className="ml-2 text-black dark:text-white capitalize">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Bedrooms Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 lg:text-xl mb-2">
            Bedrooms
          </label>
          <select
            className="w-full border rounded-md px-3 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.bedrooms}
            onChange={(e) => handleBedroomChange(e.target.value)}
          >
            <option value="">Select Bedrooms </option>
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
            if (JSON.stringify(resetFilters) !== JSON.stringify(filters)) {
              setFilters(resetFilters);
              onFilterChange(resetFilters);
            }
          }}
          className="w-full bg-blue-600 dark:bg-blue-500 font-bold text-white py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
