import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Github, Youtube ,Linkedin} from 'lucide-react';

const Footer = () => {
  const navigation = {
    solutions: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' },
    ],
    support: [
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API Status', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
  };

  const socialLinks = [
    { Icon: Facebook, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Github, href: 'https://github.com/Navin-Chaudhary' },
    { Icon: Youtube, href: '#' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/navinchaudhary9' },
  ];

  return (
    <footer className="dark:bg-gray-900 dark:text-white text-white bg-gray-700 border-t border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center space-x-2">
            <div className="text-blue-500">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <p className="text-lg">Making the world a better place through constructing elegant hierarchies.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(navigation).map(([key, items]) => (
            <div key={key}>
              <h3 className="text-lg font-semibold mb-4">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
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

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
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
