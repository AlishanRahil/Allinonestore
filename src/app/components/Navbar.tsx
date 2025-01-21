'use client'
import React, { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">AllInOne</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="./" className="hover:text-gray-200">Home</Link>
            <a href="#product" className="hover:text-gray-200">Shop</a>
            <a href="./About" className="hover:text-gray-200">About</a>
            <a href="./contact" className="hover:text-gray-200">Contact</a>
            <Link href="./catogery" className="hover:text-gray-200">Categeries</Link>

            
          </div>

          {/* Icons */}
          <div className="hidden md:flex space-x-4">
            <FaSearch className="hover:text-gray-200 cursor-pointer" />
            <FaShoppingCart className="hover:text-gray-200 cursor-pointer" />
            <Link href={'./Admindashboard'}><FaUser  className="hover:text-gray-200 cursor-pointer" /></Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <a href="#home" className="block px-4 py-2 hover:bg-blue-500">Home</a>
          <a href="./About" className="block px-4 py-2 hover:bg-blue-500">Shop</a>
          <a href="#about" className="block px-4 py-2 hover:bg-blue-500">About</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-blue-500">Contact</a>
          <div className="flex justify-around py-4">
            <FaSearch className="hover:text-gray-200 cursor-pointer" />
            <FaShoppingCart className="hover:text-gray-200 cursor-pointer" />
            <FaUser className="hover:text-gray-200 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

