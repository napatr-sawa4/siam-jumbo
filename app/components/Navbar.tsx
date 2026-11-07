"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
                SIAMJUMBO
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="#products"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Products
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
            <button className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-6 py-2 rounded-full font-medium hover:from-amber-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-amber-600 focus:outline-none focus:text-amber-600 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#products"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <button className="w-full bg-gradient-to-r from-amber-500 to-red-600 text-white px-6 py-2 rounded-full font-medium hover:from-amber-600 hover:to-red-700 transition-all duration-300">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
