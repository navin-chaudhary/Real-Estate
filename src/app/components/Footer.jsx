import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Github, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const navigation = {
    QuickLinks: [
      { name: 'HOME', href: '/' },
      { name: 'ABOUT', href: '/about' },
      { name: 'PROPERTY', href: '/property' },
      { name: 'CONTACT US', href: '/contact' },
    ],
  };

  const socialLinks = [
    { Icon: Facebook, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Youtube, href: '#' },
    { Icon: Github, href: 'https://github.com/Navin-Chaudhary' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/navinchaudhary9' },
  ];

  return (
    <footer className="dark:bg-gray-900 dark:text-white text-white bg-gray-700 border-t border-white">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex flex-col items-center space-y-4">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-24 h-12 animate-fade-in"
          />
          <div className="flex space-x-6">
            {socialLinks.map(({ Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
              >
                <Icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(navigation).map(([key, items]) => (
            <div key={key}>
              <h3 className="text-lg font-semibold mb-4">{key}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-blue-500 transition-colors duration-200">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
 
        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Find Us Here</h3>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117331.5493944582!2d72.56314620831161!3d23.22084599387287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b987c6d6809%3A0xf86f06a7873e0391!2sGandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1729839765774!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-64"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
