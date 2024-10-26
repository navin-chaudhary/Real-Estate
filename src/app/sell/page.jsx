"use client"
import React, { useState } from 'react';
import { Camera, CheckCircle, DollarSign, TrendingUp, Users, Clock } from 'lucide-react';
import SellPropertyForm from '../components/SellPropertyForm';

const SellPage = () => {
   const addNewListing = (newListing) => {
    const { title, location, price, beds, baths, sqft } = newListing;
    if (!title || !location || !price || !beds || !baths || !sqft) {
      setError("All fields are required.");
      return;
    }
    const newId = Math.max(...listings.map(l => l.id), 0) + 1;
    const formattedListing = {
      id: newId,
      ...newListing,  
      price: parseFloat(newListing.price),
      beds: parseInt(newListing.beds, 10),
      baths: parseInt(newListing.baths, 10),
      sqft: parseInt(newListing.sqft, 10),
      featured: false,
      images: [""]
    };

    setListings(prevListings => [formattedListing, ...prevListings]);
    setListingState(prevState => ({
      ...prevState,
      filteredAndSortedListings: [formattedListing, ...prevState.filteredAndSortedListings],
      currentPage: 1
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sell Your Property with Confidence
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              List your property with us and get access to thousands of potential buyers. 
              Our expert team will guide you through every step of the selling process.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl text-black font-semibold mb-2">Maximum Exposure</h3>
              <p className="text-gray-600">Your property will be showcased to thousands of verified buyers</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <DollarSign className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl text-black font-semibold mb-2">Best Market Price</h3>
              <p className="text-gray-600">Get the best value for your property with our market analysis</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Clock className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl text-black font-semibold mb-2">Quick Process</h3>
              <p className="text-gray-600">Fast and efficient selling process with dedicated support</p>
            </div>
          </div>
        </div>
      </section>

      {/* List Property Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <h2 className="text-3xl text-black font-semibold text-center mb-8">List Your Property</h2>
            
            <SellPropertyForm lisning={addNewListing}/>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">What Our Sellers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-sm text-gray-600">Sold in New York</p>
                </div>
              </div>
              <p className="text-gray-600">"Incredible service! Sold my property within weeks for more than the asking price."</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Sold in Los Angeles</p>
                </div>
              </div>
              <p className="text-gray-600">"The team made selling my home stress-free. Highly recommended!"</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Brown</h4>
                  <p className="text-sm text-gray-600">Sold in Chicago</p>
                </div>
              </div>
              <p className="text-gray-600">"Professional service from start to finish. Got a great price for my property."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellPage;