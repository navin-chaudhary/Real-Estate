'use client'
import { useState,useEffect } from 'react'
import ListingCard from './ListingCard'
import ListingFilters from './ListingFilters'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const SAMPLE_LISTINGS = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    location: "123 Main St, New York",
    price: "450000",
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "apartment",
    images: ["https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600"],
    featured: true
  },
  {
    id: 2,
    title: "Luxury Waterfront Villa",
    location: "456 Ocean Dr, Miami",
    price: "1200000",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "house",
    images: ["https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600"],
    featured: true
  },
  {
    id: 3,
    title: "Luxury Waterfront Villa",
    location: "456 Ocean Dr, Miami",
    price: "1200000",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "house",
    images: ["https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600"],
    featured: true
  },
  {
    id: 4,
    title: "Luxury Waterfront Villa",
    location: "456 Ocean Dr, Miami",
    price: "1200000",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "house",
    images: ["https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600"],
    featured: true
  },
  {
    id: 5,
    title: "Luxury Waterfront Villa",
    location: "456 Ocean Dr, Miami",
    price: "1200000",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "house",
    images: ["https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600"],
    featured: true
  },
  {
    id: 6,
    title: "Luxury Waterfront Villa",
    location: "456 Ocean Dr, Miami",
    price: "1200000",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "studio",
    images: ["https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600"],
    featured: true
  },
  {
    id: 7,
    title: "Luxury Waterfront Villa",
    location: "456 Ocean Dr, Miami",
    price: "1200000",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "penthouse",
    images: ["https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600"],
    featured: true
  },
  {
    id: 8,
    title: "Luxury Waterfront Villa",
    location: "456 Ocean Dr, Miami",
    price: "1200000",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "townhouse",
    images: ["https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600"],
    featured: true
  },

];
export default function ListingGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('featured');
  const [filteredAndSortedListings, setFilteredAndSortedListings] = useState([]);
  const [filters, setFilters] = useState({
    propertyTypes: [],
    bedrooms: '',
    priceRange: { min: '', max: '' }
  });
  
  const listingsPerPage = 6;
  
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Reset to first page when filters change
    setCurrentPage(1);
  };

  useEffect(() => {
    // Move filtering and sorting logic into useEffect
    const filterListings = (listings) => {
      return listings.filter(listing => {
        if (filters.propertyTypes.length > 0 && !filters.propertyTypes.includes(listing.type)) {
          return false;
        }
        
        if (filters.bedrooms) {
          if (filters.bedrooms === '4+' && listing.beds < 4) return false;
          if (filters.bedrooms !== '4+' && listing.beds !== parseInt(filters.bedrooms)) return false;
        }
        
        const price = parseInt(listing.price);
        if (filters.priceRange.min && price < parseInt(filters.priceRange.min)) return false;
        if (filters.priceRange.max && price > parseInt(filters.priceRange.max)) return false;
        
        return true;
      });
    };

    const sortListings = (listings) => {
      switch (sortBy) {
        case 'price-asc':
          return [...listings].sort((a, b) => parseInt(a.price) - parseInt(b.price));
        case 'price-desc':
          return [...listings].sort((a, b) => parseInt(b.price) - parseInt(a.price));
        case 'featured':
          return [...listings].sort((a, b) => b.featured - a.featured);
        default:
          return listings;
      }
    };

    const filteredListings = filterListings(SAMPLE_LISTINGS);
    const sortedListings = sortListings(filteredListings);
    setFilteredAndSortedListings(sortedListings);
  }, [filters, sortBy]); // Re-run when filters or sortBy changes

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = filteredAndSortedListings.slice(indexOfFirstListing, indexOfLastListing);
  const totalPages = Math.ceil(filteredAndSortedListings.length / listingsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
   <div className="mb-6 md:mb-0 md:px-4 md:border-r md:border-gray-200 md:pr-8">
    <ListingFilters onFilterChange={handleFilterChange} filters={filters} />
  </div>
  
    <div className="lg:col-span-3 ml-0 lg:ml-10 space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-700">
          Showing {indexOfFirstListing + 1}-{Math.min(indexOfLastListing, filteredAndSortedListings.length)} of {filteredAndSortedListings.length} properties
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          <option value="featured">Featured First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentListings.map((listing) => (
          <div key={listing.id} className="group hover:shadow-xl transition duration-300 ease-in-out transform  rounded-lg overflow-hidden bg-white border border-gray-200">
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>
  
      {filteredAndSortedListings.length > 0 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-md border hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-700 text-white"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
  
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-md border ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-100 hover:border-blue-600'
              } transition ease-in-out duration-150`}
            >
              {index + 1}
            </button>
          ))}
  
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md border hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-700 text-white"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      )}
  
      {currentListings.length === 0 && (
        <div className="flex flex-col justify-center items-center space-y-4 py-12">
          <h3 className="text-lg font-medium text-gray-900">No properties found</h3>
          <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
        </div>
      )}
    </div>
  </div>
  
  );
}
