import React from 'react';
import { Home, Search, Users, Award, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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

  const mentors = [
    {
      name: "Navin Chaudhary",
      role: "Frontend Developer",
      image: "/images/profile.jpg",
      specialties: ["Luxury Homes", "Investment Properties"],
    },
    {
      name: "Michael Chen",
      role: "Senior Market Analyst",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      specialties: ["Market Analysis", "Property Valuation"],
    },
    {
      name: "Emma Williams",
      role: "Home Buying Strategist",
      image: "https://images.pexels.com/photos/2770600/pexels-photo-2770600.jpeg?auto=compress&cs=tinysrgb&w=600",
      specialties: ["First-time Buyers", "Property Negotiation"],
    },
    {
      name: "David Miller",
      role: "Real Estate Investment Coach",
      image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600",
      specialties: ["Property Valuation", "First-time Buyers"],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="relative py-20 lg:py-36 overflow-hidden bg-[url('/images/about.png')]">
 
        <div className="container mx-auto px-6 text-center text-white">
          <div className="max-w-8xl mx-auto text-center text-white ">
            <h1 className="text-3xl md:text-4xl lg:text-6xl   mb-6  font-medium tracking-wider">
            Find Your Dream Home in Minutes
            </h1>
            <p className="md:text-[20px] lg:text-xl mb-8 animate-fade-in">
            Quickly discover homes by location, price range, and additional filters.
            </p>
          </div>
        </div>
      
      </div>

      
      <div className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose Home Finder
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine technology with personal service to deliver the best home-buying experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="mb-4 transform transition-transform duration-300 ">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Meet Our Expert Mentor Team
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Learn from industry veterans who are passionate about helping you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
             <div 
             key={index}
             className="relative group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-102 overflow-hidden max-w-sm mx-auto"
           >
             
             <div className="relative h-80 mb-6 overflow-hidden">
               <Image
                 width={1000}
                 height={1000}
                 src={mentor.image}
                 alt={mentor.name}
                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             </div>
       
             
             <div className="px-6 pb-6">
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2 transition-colors">
                 {mentor.name}
               </h3>
               
               <p className="text-blue-600 dark:text-blue-400 text-center text-lg mb-4 font-medium">
                 {mentor.role}
               </p>
       
               
               <div className="flex flex-wrap justify-center gap-2 ">
                 {mentor.specialties.map((specialty, idx) => (
                   <span
                     key={idx}
                     className="bg-blue-200 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-2 py-1.5 rounded-full text-sm font-medium transition-colors hover:bg-blue-100 dark:hover:bg-blue-900"
                   >
                     {specialty}
                   </span>
                 ))}
               </div>
             </div>
           </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center transform transition-all duration-300"
              >
                <div className="text-2xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 ">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-xl text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center transform transition-all duration-300 ">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-600 rounded-full mb-6 ">
              <Phone className="w-6 h-6 text-blue-600 dark:text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Ready to Start Your Journey?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our team of experts is here to help you every step of the way.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Contact Us 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
