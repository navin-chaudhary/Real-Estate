"use client"
import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import emailjs from '@emailjs/browser';


const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyType: "House",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill All Required Fields'
      });
  
     
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
  
      return;
    }
  
    try {
      setIsSubmitting(true);
  
    
      const response = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );
  
      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! We will contact you soon.'
        });
  
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          propertyType: "House",
        });
  
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
      console.error('EmailJS Error:', error);
  
     
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const contactInfo = [
    { Icon: Phone, title: "Phone", content: "+1 (215) 933-7662" },
    { Icon: Mail, title: "Email", content: "contact@homefinder.com" },
    { Icon: MapPin, title: "Office Address", content: "Infocity, Gandhinagar, Gujarat 382421" },
    { Icon: Clock, title: "Business Hours", content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
   
    <div className="bg-gradient-to-r from-indigo-600 to-blue-700 py-20 md:py-24 dark:from-indigo-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-wider text-white mb-4 md:mb-6">
          Contact Us
        </h1>
        <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto font-light">
          Connect with our real estate experts to begin your journey home
        </p>
      </div>
    </div>
  
   
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-medium tracking-wider text-gray-900 dark:text-gray-100">
            Contact Information
          </h2>
          <div className="grid gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 dark:border-gray-700 dark:hover:bg-gradient-to-r dark:hover:from-gray-700 dark:hover:to-gray-600"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl group-hover:from-indigo-200 group-hover:to-blue-200 dark:from-indigo-900 dark:to-blue-900">
                    <item.Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-8">
            Send us a Message
          </h2>
  
          <form ref={form} onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-black dark:text-gray-300 transition-all duration-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>
  
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all text-black dark:text-gray-300 duration-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-black dark:text-gray-300 transition-all duration-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>
  
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Property Type
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-black dark:text-gray-300 transition-all duration-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                >
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Flat">Flat</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
              </div>
            </div>
  
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-200 text-black dark:text-gray-300 focus:border-indigo-500 transition-all duration-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              ></textarea>
              {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
            </div>
  
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700 focus:ring focus:ring-indigo-200 transition-all duration-200"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
  
            {submitStatus?.message && (
              <div className={`mt-4 p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-900 dark:bg-green-900 dark:text-green-50'
                  : 'bg-red-50 text-red-900 dark:bg-red-900 dark:text-red-50'
              }`}>
                <p>{submitStatus.message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Contact;
