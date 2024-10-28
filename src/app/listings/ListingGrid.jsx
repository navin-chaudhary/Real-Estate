"use client";
import { useState, useEffect, useCallback } from "react";
import ListingCard from "./ListingCard";
import ListingFilters from "../components/ListingFilters";
// import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChevronLeftIcon, ChevronRightIcon, PlusCircle } from "lucide-react";
import AddListingForm from "../add-property/page";

const SAMPLE_LISTINGS = [
  {
    id:  1,
    title: "Spacious Modern House in Downtown Gandhinagar",
    location: "193/2, Sector 27, Gandhinagar",
    price: 12000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "House",
    images: [
      "/images/house.png",
    ],
  },
  {
    id: 2,
    title: "Luxurious Villa with Modern Amenities",
    location: "Infocity, Gandhinagar",
    price: 100000,
    beds: 5,
    baths: 4,
    sqft: 1600,
    type: "Villa",
    images: [
      "/images/villa.png",
    ],
  },
  {
    id: 3,
    title: "Affordable 4-Bedroom Flat in Sargasan",
    location: "Sargasan, Gandhinagar",
    price: 15000,
    beds: 4,
    baths: 3,
    sqft: 1400,
    type: "Flat",
    images: [
      "/images/flate.png",
    ],
  },
  {
    id: 4,
    title: "Luxury Penthouse with Scenic Views",
    location: "1045/2, Sector 6, Gandhinagar",
    price: 30000,
    beds: 7,
    baths: 3,
    sqft: 1800,
    type: "Penthouse",
    images: [
      "/images/penthouse.jpg",
    ],
  },
  {
    id: 5,
    title: "Spacious Downtown Villa",
    location: "333, Sector 5, Gandhinagar, Gujarat",
    price: 70000,
    beds: 2,
    baths: 1,
    featured: true,
    sqft: 1500,
    type: "Villa",
    images: ["/images/villa2.png"],
  },
  {
    id: 6,
    title: "Economy Studio Apartment",
    location: "222, Sector 6, Gandhinagar, Gujarat",
    price: 50000,
    beds: 1,
    baths: 1,
    featured: false,
    sqft: 700,
    type: "Apartment",
    images: ["/images/apartment3.png"],
  },
  {
    id: 7,
    title: "Single Family Home",
    location: "456, Sector 7, Gandhinagar, Gujarat",
    price: 30000,
    beds: 3,
    baths: 2,
    featured: false,
    sqft: 1800,
    type: "House",
    images: ["/images/house1.png"],
  },
  {
    id: 8,
    title: "Modern Family Villa",
    location: "77, Sector 8, Gandhinagar, Gujarat",
    price: 100000,
    beds: 4,
    baths: 3,
    featured: false,
    sqft: 2800,
    type: "Villa",
    images: ["/images/villa3.png"],
  },
  {
    id: 9,
    title: "Penthouse with City View",
    location: "555, Sector 9, Gandhinagar, Gujarat",
    price: 60000,
    beds: 2,
    baths: 2,
    featured: true,
    sqft: 1400,
    type: "Penthouse",
    images: ["/images/penthouse.jpg"],
  },
  {
    id: 10,
    title: "Private Luxury Villa",
    location: "89, Sector 10, Gandhinagar, Gujarat",
    price: 190000,
    beds: 6,
    baths: 5,
    featured: true,
    sqft: 5000,
    type: "Villa",
    images: ["/images/villa4.png"],
  },
  {
    id: 11,
    title: "Lavish Penthouse Suite",
    location: "1, Sector 11, Gandhinagar, Gujarat",
    price: 90000,
    beds: 4,
    baths: 4,
    featured: false,
    sqft: 4000,
    type: "Penthouse",
    images: ["/images/penthouse1.jpg"],
  },
  {
    id: 12,
    title: "Modern Private Apartment",
    location: "123, Sector 12, Gandhinagar, Gujarat",
    price: 60000,
    beds: 2,
    baths: 2,
    featured: true,
    sqft: 1100,
    type: "Apartment",
    images: ["/images/apartment4.png"],
  },
  {
    id: 13,
    title: "Charming Suburban House",
    location: "45, Sector 13, Gandhinagar, Gujarat",
    price: 50000,
    beds: 3,
    baths: 3,
    featured: true,
    sqft: 1700,
    type: "House",
    images: ["/images/house2.png"],
  },
];
const LOCAL_STORAGE_KEY = "listings";

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default function ListingGrid() {
  const [listings, setListings] = useState(SAMPLE_LISTINGS);
  const [listingState, setListingState] = useState({
    currentPage: 1,
    sortBy: "featured",
    filters: {
      propertyTypes: [],
      bedrooms: "",
      priceRange: { min: "", max: "" },
    },
    filteredAndSortedListings: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const listingsPerPage = 6;

  const handleAddListing = (newListing) => {
    setListings((prevListings) => {
        const maxId = Math.max(...prevListings.map(listing => listing.id), 0);
        newListing.id = maxId + 1;

        const updatedListings = [...prevListings, newListing];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedListings)); // Save updated listings to local storage
        
        return updatedListings; // Returning the updated listings will trigger a re-render
    });
};

  
  
  const filterListings = useCallback((listings, filters) => {
    return listings.filter((listing) => {
      if (
        filters.propertyTypes.length > 0 &&
        !filters.propertyTypes.includes(listing.type)
      ) {
        return false;
      }

      if (filters.bedrooms) {
        if (filters.bedrooms === "4+" && listing.beds < 4) return false;
        if (
          filters.bedrooms !== "4+" &&
          listing.beds !== parseInt(filters.bedrooms, 10)
        )
          return false;
      }

      const price = listing.price;
      if (
        filters.priceRange.min &&
        price < parseInt(filters.priceRange.min, 10)
      )
        return false;
      if (
        filters.priceRange.max &&
        price > parseInt(filters.priceRange.max, 10)
      )
        return false;

      return true;
    });
  }, []);

  const sortListings = useCallback((listings, sortBy) => {
    switch (sortBy) {
      case "price-asc":
        return [...listings].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...listings].sort((a, b) => b.price - a.price);
      case "featured":
      default:
        return [...listings];
    }
  }, []);

  
  const handleFilterChange = useCallback((newFilters) => {
    setListingState((prevState) => ({
      ...prevState,
      currentPage: 1,
      filters: newFilters,
    }));
  }, []);

  
  const handleSortChange = useCallback((newSortBy) => {
    setListingState((prevState) => ({
      ...prevState,
      sortBy: newSortBy,
    }));
  }, []);
  useEffect(() => {
    const storedListings = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedListings) {
        setListings(JSON.parse(storedListings)); 
    }
}, []);

  useEffect(() => {
    const processListings = async () => {
      setLoading(true);
      setError(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const filteredListings = filterListings(
          listings,
          listingState.filters
        );
        const sortedListings = sortListings(
          filteredListings,
          listingState.sortBy
        );

        setListingState((prevState) => ({
          ...prevState,
          filteredAndSortedListings: sortedListings,
        }));
      } catch (error) {
        setError("Failed to fetch listings");
        console.error("Error processing listings:", error);
      } finally {
        setLoading(false);
      }
    };

    processListings();
  }, [listings, listingState.filters, listingState.sortBy, filterListings, sortListings]);


  const indexOfLastListing = listingState.currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = listingState.filteredAndSortedListings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );
  const totalPages = Math.ceil(
    listingState.filteredAndSortedListings.length / listingsPerPage
  );

  const paginate = useCallback((pageNumber) => {
    setListingState((prevState) => ({
      ...prevState,
      currentPage: pageNumber,
    }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
      <div className="mb-6 md:mb-0 md:px-4 lg:border-r lg:border-gray-200 dark:md:border-gray-700 md:pr-8">
        <ListingFilters
          onFilterChange={handleFilterChange}
          filters={listingState.filters}
        />
      </div>
  
      <div className="lg:col-span-3 ml-0 space-y-6 px-4 md:px-0 absolute top-16 right-2">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add New Listing</span>
          </button>
        </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add Property"
        >
          <AddListingForm 
            onAddListing={handleAddListing}
            onClose={() => setIsModalOpen(false)}
          />
          
        </Modal>
      <div className="lg:col-span-3 ml-0 space-y-6 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 space-y-4 md:space-y-0">
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            Showing {indexOfFirstListing + 1}-
            {Math.min(
              indexOfLastListing,
              listingState.filteredAndSortedListings.length
            )}{" "}
            of {listingState.filteredAndSortedListings.length} properties
          </p>
          <select
            value={listingState.sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="w-full md:w-auto border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition duration-150 ease-in-out"
          >
            <option value="featured">Select Price Range</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: listingsPerPage }).map((_, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition duration-300 ease-in-out transform rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
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
            currentListings.map((listing, index) => (
              <div
                key={`${listing.id}-${index}`} // Unique key by combining id and index
                className="group hover:shadow-xl transition duration-300 ease-in-out transform rounded-[13px] overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
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
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:border-blue-600 dark:hover:bg-gray-700"
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
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-300">
              No properties found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your filters or search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
