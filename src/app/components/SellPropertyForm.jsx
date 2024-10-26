import React, { useState, useEffect } from 'react';

export default function SellPropertyForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    beds: '',
    baths: '',
    sqft: '',
    type: 'apartment',
    featured: false,
    images: [], // Default placeholder image
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

//   useEffect(() => {
//     // Load saved data from local storage when the component mounts
//     const savedData = localStorage.getItem('propertyFormData');
//     if (savedData) {
//       setFormData(JSON.parse(savedData));
//     }
//   }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.price || formData.price <= 0) newErrors.price = 'Valid price is required';
    if (!formData.beds || formData.beds <= 0) newErrors.beds = 'Valid number of beds is required';
    if (!formData.baths || formData.baths <= 0) newErrors.baths = 'Valid number of baths is required';
    if (!formData.sqft || formData.sqft <= 0) newErrors.sqft = 'Valid square footage is required';
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({
        ...prev,
        images: imageUrls,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      const formattedData = {
        ...formData,
        price: parseFloat(formData.price),
        beds: parseInt(formData.beds, 10),
        baths: parseInt(formData.baths, 10),
        sqft: parseInt(formData.sqft, 10),
        featured: false,
      };

      // Save to local storage
    //   localStorage.setItem('propertyFormData', JSON.stringify(formattedData));

      // Call onSubmit if provided
      if (onSubmit) {
        onSubmit(formattedData); // Pass the formatted data to the parent component
      }

      // Set success message
      setSuccessMessage('Property listed successfully!');

      // Reset form
      setFormData({
        title: '',
        location: '',
        price: '',
        beds: '',
        baths: '',
        sqft: '',
        type: 'apartment',
        featured: false,
        images: [], // Reset images
      });
    } else {
      setErrors(newErrors);
      setSuccessMessage(''); // Clear success message if there are errors
    }
  };

  const inputClasses = "w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200";
  const errorClasses = "text-sm text-red-500 mt-1";
  const labelClasses = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {successMessage && <p className="text-green-600">{successMessage}</p>} {/* Display success message */}
      <div>
        <label htmlFor="title" className={labelClasses}>Property Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className={`${inputClasses} ${errors.title ? 'border-red-500' : ''}`}
          placeholder="e.g., Modern Downtown Apartment"
        />
        {errors.title && <p className={errorClasses}>{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="location" className={labelClasses}>Location</label>
        <input
          id="location"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          className={`${inputClasses} ${errors.location ? 'border-red-500' : ''}`}
          placeholder="e.g., 123 Main St, New York"
        />
        {errors.location && <p className={errorClasses}>{errors.location}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="price" className={labelClasses}>Price ($)</label>
          <input
            id="price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className={`${inputClasses} ${errors.price ? 'border-red-500' : ''}`}
            placeholder="e.g., 450000"
            min="0"
          />
          {errors.price && <p className={errorClasses}>{errors.price}</p>}
        </div>

        <div>
          <label htmlFor="sqft" className={labelClasses}>Square Feet</label>
          <input
            id="sqft"
            type="number"
            name="sqft"
            value={formData.sqft}
            onChange={handleInputChange}
            className={`${inputClasses} ${errors.sqft ? 'border-red-500' : ''}`}
            placeholder="e.g., 1200"
            min="0"
          />
          {errors.sqft && <p className={errorClasses}>{errors.sqft}</p>}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="beds" className={labelClasses}>Beds</label>
          <input
            id="beds"
            type="number"
            name="beds"
            value={formData.beds}
            onChange={handleInputChange}
            className={`${inputClasses} ${errors.beds ? 'border-red-500' : ''}`}
            placeholder="e.g., 2"
            min="0"
          />
          {errors.beds && <p className={errorClasses}>{errors.beds}</p>}
        </div>

        <div>
          <label htmlFor="baths" className={labelClasses}>Baths</label>
          <input
            id="baths"
            type="number"
            name="baths"
            value={formData.baths}
            onChange={handleInputChange}
            className={`${inputClasses} ${errors.baths ? 'border-red-500' : ''}`}
            placeholder="e.g., 2"
            min="0"
          />
          {errors.baths && <p className={errorClasses}>{errors.baths}</p>}
        </div>

        <div>
          <label htmlFor="type" className={labelClasses}>Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className={inputClasses}
          >
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="townhouse">Townhouse</option>
            <option value="penthouse">Penthouse</option>
            <option value="studio">Studio</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="images" className={labelClasses}>Property Images</label>
        <input
          id="images"
          type="file"
          name="images"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className={inputClasses}
        />
        {formData.images.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preview:</h3>
            <div className="grid grid-cols-2 gap-2">
              {formData.images.map((image, index) => (
                <img key={index} src={image} alt={`Preview ${index + 1}`} className="w-full h-32 object-cover rounded" />
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 mt-6"
      >
        List Property
      </button>
    </form>
  );
}
