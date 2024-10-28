import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Github, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const navigation = {
    QuickLinks: [
      { name: 'HOME', href: '/' },
      { name: 'ABOUT', href: '/about' },
      { name: 'PROPERTY', href: '/property' },
      { name: 'CONTACT US', href: '/contact' },
    ],
    Services: [
      { name: 'Real Estate', href: '#' },
      { name: 'Property Management', href: '#' },
      { name: 'Consulting', href: '#' },
      { name: 'Market Analysis', href: '#' },
    ],
    Support: [
      { name: 'FAQ', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ]
  };

  const socialLinks = [
    { Icon: Facebook, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Youtube, href: '#' },
    { Icon: Github, href: 'https://github.com/Navin-Chaudhary' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/navinchaudhary9' },
  ];

  const contactInfo = [
    { Icon: Phone, info: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { Icon: Mail, info: 'contact@homefinder.com', href: 'mailto:contact@homefinder.com' },
    { Icon: MapPin, info: 'Infocity, Gandhinagar, Gujarat 382421', href: '#' },
  ];

  return (
    <footer className="dark:bg-gray-900 dark:text-white bg-[#f0ecec] border-t-[1px] text-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 flex flex-col items-center space-y-6">
          <div className="transform  transition-transform duration-300">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="w-32 h-16 scale-150 object-contain rounded-full"
            />
          </div>
          <div className="flex space-x-6">
            {socialLinks.map(({ Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {Object.entries(navigation).map(([key, items]) => (
            <div key={key} className="space-y-4 hover:translate-x-2 transition-transform duration-300">
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{key}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, info, href }, index) => (
                <li key={index}>
                  <Link 
                    href={href}
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 group"
                  >
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      {info}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
              © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
