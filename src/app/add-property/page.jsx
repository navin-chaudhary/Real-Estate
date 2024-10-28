"use client";
import { useState  } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import { SAMPLE_LISTINGS } from "../listings/data";

// Modal Component


// AddListingForm Component
const AddListingForm = ({ onAddListing, onClose }) => {
    const [newListing, setNewListing] = useState({
      title: "",
      location: "",
      price: "",
      beds: "",
      baths: "",
      sqft: "",
      type: "Apartment",
      featured: false,
      images: [],
    });
    const maxId = Math.max(...SAMPLE_LISTINGS.map(listing => listing.id));
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const listingWithId = {
          ...newListing,
          id: maxId + 1,
          price: parseInt(newListing.price),
          beds: parseInt(newListing.beds),
          baths: parseInt(newListing.baths),
          sqft: parseInt(newListing.sqft),
        };
        onAddListing(listingWithId);
        // Reset the form state after submission if needed
        setNewListing({ title: "", location: "", price: "", beds: "", baths: "", sqft: "", type: "Apartment", featured: false, images: [] });
      };
      
  
      const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map((file) => URL.createObjectURL(file));
        setNewListing((prev) => ({
            ...prev,
            images: imageUrls, // This will hold the URLs of the uploaded images
        }));
    };
    
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            required
            value={newListing.title}
            onChange={(e) => setNewListing({ ...newListing, title: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            required
            value={newListing.location}
            onChange={(e) => setNewListing({ ...newListing, location: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price (₹)</label>
            <input
              required
              type="number"
              value={newListing.price}
              onChange={(e) => setNewListing({ ...newListing, price: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Square Feet</label>
            <input
              required
              type="number"
              value={newListing.sqft}
              onChange={(e) => setNewListing({ ...newListing, sqft: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Bedrooms</label>
            <input
              required
              type="number"
              value={newListing.beds}
              onChange={(e) => setNewListing({ ...newListing, beds: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Bathrooms</label>
            <input
              required
              type="number"
              value={newListing.baths}
              onChange={(e) => setNewListing({ ...newListing, baths: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
  
        <div>
          <label className="block text-sm font-medium mb-1">Property Type</label>
          <select
            value={newListing.type}
            onChange={(e) => setNewListing({ ...newListing, type: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Flat">Flat</option>
          </select>
        </div>
  
        <div>
          <label className="block text-sm font-medium mb-1">Upload Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full py-2"
          />
        </div>
  
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={newListing.featured}
            onChange={(e) => setNewListing({ ...newListing, featured: e.target.checked })}
            className="rounded"
          />
          <label className="text-sm">Featured Property</label>
        </div>
  
        <div className="flex justify-end space-x-2 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Listing
          </button>
        </div>
      </form>
    );
  };
export default AddListingForm