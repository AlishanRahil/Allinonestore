
'use client'

import React from "react";
import ecom from '../Assets/hero.webp';
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Hero = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-2">
          {/* Left Content with Animation */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -100 }}  // Initial state
            animate={{ opacity: 1, x: 0 }}    // Final state
            transition={{ duration: 1 }}      // Transition time
          >
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to <span className="text-blue-600">AllInOne Online Store</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg md:w-3/4 lg:w-1/2 mx-auto md:mx-0">
              Discover the best products in one place! From fashion to gadgets,
              we’ve got everything you need to elevate your lifestyle. Experience
              seamless shopping with unbeatable prices.
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500">
                See More
              </button>
              <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">
                Shop Now
              </button>
            </div>
          </motion.div>

          {/* Right Image with Animation */}
          <motion.div
            className="mt-10 md:mt-0 flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.8 }}  // Initial state for the image
            animate={{ opacity: 1, scale: 1 }}    // Final state for the image
            transition={{ duration: 1.2 }}        // Transition time for the image
          >
            <Image
              src={ecom}
              alt="E-commerce Hero Banner"
              className="rounded-lg shadow-lg"
              width={400}  // Explicitly setting width
              height={400} // Explicitly setting height
              objectFit="cover" // Ensures the image maintains aspect ratio
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
