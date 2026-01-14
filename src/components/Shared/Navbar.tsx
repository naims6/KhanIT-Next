"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Menu, 
  X 
} from 'lucide-react';

// Types
interface ServiceCategory {
  id: string;
  title: string;
  items: string[];
}


const servicesData: ServiceCategory[] = [
  {
    id: 'organic-growth',
    title: 'Organic Growth',
    items: [
      'SEO',
      'SEO for Travel Agents',
      'SEO for SMM Panel',
      'SEO for Garments',
      'SEO for E-Commerce',
      'Professional SEO',
      'Local SEO'
    ]
  },
  {
    id: 'smm',
    title: 'SMM',
    items: ['Social Media Marketing']
  },
  {
    id: 'website-content',
    title: 'Website and Content',
    items: [
      'Web Design & Development',
      'Ecommerce Website',
      'Website Maintenance'
    ]
  },
  {
    id: 'branding',
    title: 'Branding',
    items: [
      'Corporate Branding',
      'Personal Branding',
      'Wikipedia Page Creation'
    ]
  },
  {
    id: 'software',
    title: 'Software',
    items: [
      'Micro-credit Management System',
      'n8n Automation Service',
      'Google Tag Manager Service'
    ]
  },
  {
    id: 'design',
    title: 'Design',
    items: ['UI UX Design', 'Graphic Design']
  },
  {
    id: 'others',
    title: 'Others',
    items: ['Video Production', 'PR Agency']
  }
];

const Navbar = () => {
  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isServicesHovered, setIsServicesHovered] = useState<boolean>(false);
  const [openMobileCategories, setOpenMobileCategories] = useState<Set<string>>(new Set());

  // Navigation items
  const navItems = [
    { label: 'Home', href: '#', isActive: true },
    { label: 'About', href: '#' },
    { label: 'SEO Case Study', href: '#' },
    { label: 'Contact Us', href: '#' }
  ];

  // Toggle functions
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  const toggleMobileCategory = (categoryId: string) => {
    setOpenMobileCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  // Close mobile menu
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Desktop dropdown component
//   const DesktopServicesDropdown = () => (
//     <div className="absolute left-0 top-full mt-2 w-72 bg-white shadow-xl rounded-lg border border-gray-200 z-50">
//       <div className="p-4 space-y-6 max-h-[500px] overflow-y-auto">
//         {servicesData.map((category) => (
//           <div key={category.id}>
//             <h3 className="text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wider">
//               • {category.title}
//             </h3>
//             <ul className="space-y-1">
//               {category.items.map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="block text-gray-600 hover:text-[#0271E8] hover:bg-blue-50 px-3 py-2 rounded-md text-sm transition-colors duration-150"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

  return (
    <header className="bg-white/80 lg:bg-transparent fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="w-32 lg:w-40">
          <Image
            src="/public/assets/images/logo.png"
            alt="Khan IT Logo"
            width={200}
            height={48}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-medium text-gray-700 hover:text-[#0271E8] transition-colors duration-200 ${
                item.isActive ? 'text-[#0271E8]' : ''
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#0271E8] transition-colors duration-200">
              Services
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesHovered ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {/* {isServicesHovered && <DesktopServicesDropdown />} */}
          </div>
        </nav>

        {/* Desktop Contact Button */}
        <button className="hidden lg:flex items-center gap-2 bg-[#0271E8] text-white px-6 py-2.5 rounded-lg hover:bg-[#0260c9] transition-colors duration-200 font-medium">
          <Phone className="w-4 h-4" />
          01931
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-[#0271E8] transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-slideDown">
          <nav className="flex flex-col px-4 py-6">
            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`py-3 px-2 font-medium text-gray-700 hover:text-[#0271E8] hover:bg-blue-50 rounded-lg transition-colors duration-200 ${
                  item.isActive ? 'text-[#0271E8] bg-blue-50' : ''
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Services Dropdown */}
            <div className="mt-2">
              <button
                className="flex items-center justify-between w-full py-3 px-2 font-medium text-gray-700 hover:text-[#0271E8] hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => toggleMobileCategory('services')}
              >
                <span>Services</span>
                {openMobileCategories.has('services') ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {openMobileCategories.has('services') && (
                <div className="pl-4 mt-2 space-y-3">
                  {servicesData.map((category) => (
                    <div key={category.id}>
                      <button
                        className="flex items-center justify-between w-full py-2 px-2 text-sm font-medium text-gray-600 hover:text-[#0271E8]"
                        onClick={() => toggleMobileCategory(category.id)}
                      >
                        <span>• {category.title}</span>
                        {openMobileCategories.has(category.id) ? (
                          <ChevronUp className="w-3 h-3" />
                        ) : (
                          <ChevronDown className="w-3 h-3" />
                        )}
                      </button>

                      {openMobileCategories.has(category.id) && (
                        <div className="pl-4 mt-1 space-y-1">
                          {category.items.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="block py-1.5 px-2 text-sm text-gray-500 hover:text-[#0271E8] hover:bg-blue-50 rounded transition-colors duration-200"
                              onClick={closeMobileMenu}
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Contact Button */}
            <button
              className="mt-6 flex items-center justify-center gap-2 bg-[#0271E8] text-white px-4 py-3 rounded-lg hover:bg-[#0260c9] transition-colors duration-200 font-medium"
              onClick={closeMobileMenu}
            >
              <Phone className="w-4 h-4" />
              2152
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;