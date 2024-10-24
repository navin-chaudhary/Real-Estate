import React from 'react';
import { Home, Search, Users, Award, Phone } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  const features = [
    {
      icon: <Home className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Extensive Property Listings",
      description: "Access thousands of verified property listings across the country, updated in real-time."
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Smart Search",
      description: "Advanced filters and AI-powered recommendations to find your perfect home."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Expert Agents",
      description: "Connect with experienced real estate agents who know your desired neighborhoods."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Trusted Platform",
      description: "Over 10 years of excellence in connecting home buyers with their dream properties."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Listings" },
    { number: "100K+", label: "Happy Customers" },
    { number: "1000+", label: "Expert Agents" },
    { number: "100+", label: "Cities Covered" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Finding Your Dream Home Made Simple
            </h1>
            <p className="text-xl mb-8">
              We're on a mission to help everyone find their perfect place to call home through innovation and dedication.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose Home Finder
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine technology with personal service to deliver the best home-buying experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-600 rounded-full mb-6">
              <Phone className="w-6 h-6 text-blue-600 dark:text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Ready to Start Your Journey?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our team of experts is here to help you every step of the way.
            </p>
            <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600">
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
