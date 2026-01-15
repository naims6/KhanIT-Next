"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp, Phone } from "lucide-react";
import { serviceCategories } from "@/data/navServices";
import Container from "./Container";
import Button from "./ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(
    null
  );
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState<string | null>(
    null
  );

  const handleSubDropdownClick = (title: string) => {
    if (isSubDropdownOpen === title) {
      setIsSubDropdownOpen(null);
      return;
    }
    setIsSubDropdownOpen(title);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur transition-colors ${
        isScrolled ? "bg-white/80 shadow-sm" : "bg-white/80 lg:bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-5">
          <div className="w-35 lg:w-50">
            <Image
              src="/assets/images/logo.png"
              alt="Khan IT Logo"
              width={200}
              height={50}
              priority
            />
          </div>

          <nav className="hidden lg:flex items-center gap-6 font-medium">
            <Link href="#" className="text-[#0271E8]">
              Home
            </Link>
            <Link href="#" className="hover:text-[#0271E8]">
              About
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#0271E8] cursor-pointer">
                Services
                <ChevronDown className="w-5 h-5 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute left-0 top-full mt-2 w-75 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-y-2 group-hover:translate-y-0">
                <div className="p-4 space-y-4 max-h-125 overflow-y-auto">
                  {serviceCategories.map((category) => (
                    <div key={category.title}>
                      <h3 className="text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                        • {category.title}
                      </h3>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li key={item}>
                            <Link
                              href="#"
                              className="block text-gray-600 hover:text-[#0271E8] hover:bg-blue-50 px-3 py-2 rounded-md text-sm"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="#" className="hover:text-[#0271E8]">
              SEO Case Study
            </Link>
            <Link href="#" className="hover:text-[#0271E8]">
              Contact Us
            </Link>
          </nav>

          <Button>
            <Phone className="w-5 h-5" />
            +8801404282727
          </Button>

          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </Container>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E7EB] shadow-sm overflow-y-auto max-h-[80vh]">
          <nav className="flex flex-col gap-4 px-6 py-6 font-medium">
            <Link href="#" className="text-[#0271E8]">
              Home
            </Link>
            <Link href="#">About</Link>

            <div>
              <button
                className={`${
                  openMobileCategory ? "text-blue-600!" : ""
                } flex items-center justify-between w-full text-left font-medium hover:text-blue-600`}
                onClick={() =>
                  setOpenMobileCategory(openMobileCategory ? null : "services")
                }
              >
                Services
                {openMobileCategory ? (
                  <ChevronUp className="w-8 h-8" />
                ) : (
                  <ChevronDown className="w-8 h-8" />
                )}
              </button>

              {openMobileCategory === "services" && (
                <div className="px-4 mt-2">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="mb-2">
                      <p
                        onClick={() => handleSubDropdownClick(category.title)}
                        className={`${
                          isSubDropdownOpen === category.title
                            ? "text-blue-600"
                            : "text-gray-700"
                        } py-2 text-sm font-medium flex justify-between items-center`}
                      >
                        • {category.title}{" "}
                        {isSubDropdownOpen === category.title ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </p>
                      {/* Subdropdown */}
                      {isSubDropdownOpen === category.title && (
                        <div className="pl-3 space-y-1">
                          {category.items.map((item) => (
                            <Link
                              key={item}
                              href="#"
                              className="block py-1 text-sm text-gray-600"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="#">SEO Case Study</Link>
            <Link href="#">Contact Us</Link>

            <button className="primary-btn mt-4 w-full flex justify-center gap-2">
              <Phone className="w-5 h-5" />
              +8801404282727
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
