'use client';
import { useState, useEffect,useCallback  } from 'react';
import ListingCard from './ListingCard';
import ListingFilters from './ListingFilters';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SAMPLE_LISTINGS = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 450000, // Price as a number
    beds: 2,
    baths: 2,
    featured:true,
    sqft: 1200,
    type: "apartment",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
  {
    id: 2,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 450000, // Price as a number
    beds: 2,
    baths: 3,
    featured:true,
    sqft: 1200,
    type: "apartment",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
  {
    id: 3,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 450000, // Price as a number
    beds: 4,
    baths: 2,
    featured:true,
    sqft: 1200,
    type: "apartment",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
  {
    id: 4,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 450000, // Price as a number
    beds: 2,
    baths: 2,
    featured:false,
    sqft: 1200,
    type: "apartment",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
  {
    id: 5,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 50000, // Price as a number
    beds: 4,
    baths: 4,
    featured:false,
    sqft: 1200,
    type: "apartment",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
  {
    id: 6,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 30000, // Price as a number
    beds: 2,
    baths: 2,
    featured:true,
    sqft: 1200,
    type: "apartment",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
  {
    id: 7,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 450000, // Price as a number
    beds: 1,
    baths: 1,
    featured:false,
    sqft: 1200,
    type: "townhouse",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
  {
    id: 8,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 350000, // Price as a number
    beds: 4,
    baths: 1,
    featured:false,
    sqft: 1200,
    type: "townhouse",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
  {
    id: 9,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 5000, // Price as a number
    beds: 2,
    baths: 1,
    featured:true,
    sqft: 1200,
    type: "penthouse",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
  {
    id: 10,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 650000, // Price as a number
    beds: 4,
    baths: 4,
    featured:false,
    sqft: 1200,
    type: "penthouse",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
  {
    id: 11,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 4500000, // Price as a number
    beds: 1,
    baths: 4,
    featured:true,
    sqft: 1200,
    type: "studio",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
  {
    id: 12,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 450000, // Price as a number
    beds: 2,
    baths: 2,
    featured:true,
    sqft: 1200,
    type: "apartment",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
  {
    id: 13,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: 450000, // Price as a number
    beds: 2,
    baths: 2,
    featured:true,
    sqft: 1200,
    type: "house",
    images: ["https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg?auto=compress&cs=tinysrgb&w=600"],
  },
];

export default function ListingGrid({ listings }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('featured');
  const [filteredAndSortedListings, setFilteredAndSortedListings] = useState([]);
  const [filters, setFilters] = useState({
    propertyTypes: [],
    bedrooms: '',
    priceRange: { min: '', max: '' },
  });
  const [listingState, setListingState] = useState({
    currentPage: 1,
    sortBy: 'featured',
    filters: {
      propertyTypes: [],
      bedrooms: '',
      priceRange: { min: '', max: '' },
    },
    filteredAndSortedListings: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const listingsPerPage = 6;

  const filterListings = useCallback((listings, filters) => {
    return listings.filter(listing => {
      if (filters.propertyTypes.length > 0 && !filters.propertyTypes.includes(listing.type)) {
        return false;
      }

      if (filters.bedrooms) {
        if (filters.bedrooms === '4+' && listing.beds < 4) return false;
        if (filters.bedrooms !== '4+' && listing.beds !== parseInt(filters.bedrooms, 10)) return false;
      }

      const price = listing.price;
      if (filters.priceRange.min && price < parseInt(filters.priceRange.min, 10)) return false;
      if (filters.priceRange.max && price > parseInt(filters.priceRange.max, 10)) return false;

      return true;
    });
  }, []);

  const sortListings = useCallback((listings, sortBy) => {
    switch (sortBy) {
      case 'price-asc':
        return [...listings].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...listings].sort((a, b) => b.price - a.price);
      case 'featured':
      default:
        return [...listings];
    }
  }, []);

  // Consolidated filter change handler
  const handleFilterChange = useCallback((newFilters) => {
    setListingState(prevState => ({
      ...prevState,
      currentPage: 1,
      filters: newFilters
    }));
  }, []);

  // Handle sort change
  const handleSortChange = useCallback((newSortBy) => {
    setListingState(prevState => ({
      ...prevState,
      sortBy: newSortBy
    }));
  }, []);

  // Single useEffect for processing listings
  useEffect(() => {
    const processListings = async () => {
      setLoading(true);
      setError(null);

      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const filteredListings = filterListings(SAMPLE_LISTINGS, listingState.filters);
        const sortedListings = sortListings(filteredListings, listingState.sortBy);
        
        setListingState(prevState => ({
          ...prevState,
          filteredAndSortedListings: sortedListings
        }));
      } catch (err) {
        setError("Failed to fetch listings");
      } finally {
        setLoading(false);
      }
    };

    processListings();
  }, [listingState.filters, listingState.sortBy, filterListings, sortListings]);

  const indexOfLastListing = listingState.currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = listingState.filteredAndSortedListings.slice(indexOfFirstListing, indexOfLastListing);
  const totalPages = Math.ceil(listingState.filteredAndSortedListings.length / listingsPerPage);

  const paginate = useCallback((pageNumber) => {
    setListingState(prevState => ({
      ...prevState,
      currentPage: pageNumber
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
      <div className="mb-6 md:mb-0 md:px-4 md:border-r md:border-gray-200 dark:md:border-gray-700 md:pr-8">
        <ListingFilters 
          onFilterChange={handleFilterChange} 
          filters={listingState.filters}
        />
      </div>

      <div className="lg:col-span-3 ml-0 lg:ml-10 space-y-6">
        <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300">
            Showing {indexOfFirstListing + 1}-{Math.min(indexOfLastListing, listingState.filteredAndSortedListings.length)} of {listingState.filteredAndSortedListings.length} properties
          </p>
          <select
            value={listingState.sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition duration-150 ease-in-out"
          >
            <option value="featured">Select Price Range</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: listingsPerPage }).map((_, index) => (
              <div key={index} className="group hover:shadow-xl transition duration-300 ease-in-out transform rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <Skeleton height={200} />
                <Skeleton height={80} className="mt-2" />
                <Skeleton height={80} className="mt-2" />
              </div>
            ))
          ) : error ? (
            <div className="flex flex-col justify-center items-center space-y-4 py-12">
              <h3 className="text-lg font-medium text-red-600">{error}</h3>
            </div>
          ) : (
            currentListings.map((listing) => (
              <div key={listing.id} className="group hover:shadow-xl transition duration-300 ease-in-out transform rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <ListingCard listing={listing} />
              </div>
            ))
          )}
        </div>

        {listingState.filteredAndSortedListings.length > 0 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              onClick={() => paginate(listingState.currentPage - 1)}
              disabled={listingState.currentPage === 1}
              className="p-2 rounded-md border hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-700 text-white"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 rounded-md border ${
                  listingState.currentPage === index + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:border-blue-600 dark:hover:bg-gray-700'
                } transition ease-in-out duration-150`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(listingState.currentPage + 1)}
              disabled={listingState.currentPage === totalPages}
              className="p-2 rounded-md border hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-700 text-white"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        )}

        {currentListings.length === 0 && !loading && (
          <div className="flex flex-col justify-center items-center space-y-4 py-12">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-300">No properties found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters or search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
