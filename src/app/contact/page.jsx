"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyType: "residential",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 py-24 dark:from-indigo-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-indigo-100 text-center text-lg md:text-xl max-w-2xl mx-auto font-light">
            Connect with our real estate experts to begin your journey home
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Contact Information
            </h2>
            <div className="grid gap-6">
              {[
                {
                  Icon: Phone,
                  title: "Phone",
                  content: "+1 (215) 933-7662",
                },
                {
                  Icon: Mail,
                  title: "Email",
                  content: "contact@homefinder.com",
                },
                {
                  Icon: MapPin,
                  title: "Office Address",
                  content: "Infocity, Gandhinagar, Gujarat 382421",
                },
                {
                  Icon: Clock,
                  title: "Business Hours",
                  content:
                    "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 dark:bg-gray-800 dark:hover:bg-gradient-to-r dark:hover:from-gray-700 dark:hover:to-gray-600"
                >
                  <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl group-hover:from-indigo-200 group-hover:to-blue-200 dark:bg-indigo-800 dark:group-hover:bg-indigo-700 transition-colors">
                    <item.Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 text-black dark:text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "name", type: "text", label: "Name" },
                  { name: "email", type: "email", label: "Email" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-400"
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-400"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="land">Land</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-400 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-4 rounded-lg font-medium hover:from-indigo-700 hover:to-blue-800 focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md dark:bg-gradient-to-r dark:from-indigo-700 dark:to-blue-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
