"use client";
import { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { SAMPLE_LISTINGS } from "../listings/data";

const AddListingForm = (props) => {
  const { onAddListing, onClose } = props;

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

  const [errors, setErrors] = useState({});

  const validateInput = (field, value) => {
    switch (field) {
      case 'beds':
        return value >= 1 ? "" : "Minimum 1 bedroom required";
      case 'baths':
        return value >= 1 ? "" : "Minimum 1 bathroom required";
      case 'price':
        return value >= 1000 ? "" : "Minimum price is ₹1,000";
      case 'sqft':
        return value >= 100 ? "" : "Minimum 100 square feet required";
      default:
        return "";
    }
  };

  const handleInputChange = (field, value) => {
    const error = validateInput(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
    setNewListing(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const maxId = Math.max(...SAMPLE_LISTINGS.map((listing) => listing.id), 0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const newErrors = {
      beds: validateInput('beds', parseInt(newListing.beds)),
      baths: validateInput('baths', parseInt(newListing.baths)),
      price: validateInput('price', parseInt(newListing.price)),
      sqft: validateInput('sqft', parseInt(newListing.sqft))
    };

    setErrors(newErrors);

    
    if (Object.values(newErrors).some(error => error !== "")) {
      return;
    }

    const listingWithId = {
      ...newListing,
      id: maxId + 1,
      price: parseInt(newListing.price) || 0,
      beds: parseInt(newListing.beds) || 0,
      baths: parseInt(newListing.baths) || 0,
      sqft: parseInt(newListing.sqft) || 0,
    };
    
    localStorage.setItem(`listing_${listingWithId.id}`, JSON.stringify(listingWithId));
    onAddListing(listingWithId);
    
    setNewListing({
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
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageReaders = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });
  
    Promise.all(imageReaders).then((imageUrls) => {
      setNewListing((prev) => ({
        ...prev,
        images: imageUrls,
      }));
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 dark:bg-gray-800 dark:text-white p-4 rounded-lg"
    >
      <div>
        <label className="block text-sm font-medium mb-1 text-black dark:text-gray-300">
          Title
        </label>
        <input
          required
          value={newListing.title}
          onChange={(e) =>
            setNewListing({ ...newListing, title: e.target.value })
          }
          className="w-full px-3 py-2 border rounded-lg text-black dark:bg-gray-300 dark:border-gray-600"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1 text-black dark:text-gray-300">
          Location
        </label>
        <input
          required
          value={newListing.location}
          onChange={(e) =>
            setNewListing({ ...newListing, location: e.target.value })
          }
          className="w-full px-3 py-2 border rounded-lg text-black dark:bg-gray-300 dark:border-gray-600"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-black dark:text-gray-300">
            Price (₹)
          </label>
          <input
            required
            type="number"
            min="1000"
            value={newListing.price}
            onChange={(e) => handleInputChange('price', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg text-black dark:bg-gray-300 dark:border-gray-600 ${
              errors.price ? 'border-red-500' : ''
            }`}
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black dark:text-gray-300">
            Square Feet
          </label>
          <input
            required
            type="number"
            min="100"
            value={newListing.sqft}
            onChange={(e) => handleInputChange('sqft', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg text-black dark:bg-gray-300 dark:border-gray-600 ${
              errors.sqft ? 'border-red-500' : ''
            }`}
          />
          {errors.sqft && (
            <p className="text-red-500 text-xs mt-1">{errors.sqft}</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-black dark:text-gray-300">
            Bedrooms
          </label>
          <input
            required
            type="number"
            min="1"
            value={newListing.beds}
            onChange={(e) => handleInputChange('beds', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg text-black dark:bg-gray-300 dark:border-gray-600 ${
              errors.beds ? 'border-red-500' : ''
            }`}
          />
          {errors.beds && (
            <p className="text-red-500 text-xs mt-1">{errors.beds}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black dark:text-gray-300">
            Bathrooms
          </label>
          <input
            required
            type="number"
            min="1"
            value={newListing.baths}
            onChange={(e) => handleInputChange('baths', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg text-black dark:bg-gray-300 dark:border-gray-600 ${
              errors.baths ? 'border-red-500' : ''
            }`}
          />
          {errors.baths && (
            <p className="text-red-500 text-xs mt-1">{errors.baths}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-black dark:text-gray-300">
          Property Type
        </label>
        <select
          value={newListing.type}
          onChange={(e) =>
            setNewListing({ ...newListing, type: e.target.value })
          }
          className="w-full px-3 py-2 border rounded-lg text-black dark:bg-gray-300 dark:border-gray-600"
        >
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Flat">Flat</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-black dark:text-gray-300">
          Upload Images
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="w-full py-2 text-black dark:text-gray-300"
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border rounded-lg text-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Add Listing
        </button>
      </div>
    </form>
  );
};

export default AddListingForm;