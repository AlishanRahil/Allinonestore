'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaShippingFast, FaCheckCircle, FaTag } from 'react-icons/fa';

const WhatWeOffer = () => {
  return (
    <section>
      {/* What We Offer Hero Section */}
      <motion.div
        className="bg-green-600 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            What We Offer
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Discover the unique benefits we bring to your shopping experience.
          </motion.p>
        </div>
      </motion.div>

      {/* Offer Details Section */}
      <motion.div
        className="py-20 bg-white shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Fast Shipping */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaShippingFast className="text-green-600 text-5xl mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Fast Shipping</h3>
            <p className="mt-2 text-gray-600">
              Enjoy quick and reliable delivery for every order you place with us.
            </p>
          </motion.div>

          {/* Quality Products */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <FaCheckCircle className="text-green-600 text-5xl mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Quality Products</h3>
            <p className="mt-2 text-gray-600">
              We provide top-notch products to meet your expectations and needs.
            </p>
          </motion.div>

          {/* Affordable Prices */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <FaTag className="text-green-600 text-5xl mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Affordable Prices</h3>
            <p className="mt-2 text-gray-600">
              Get the best value for your money without compromising on quality.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWeOffer;
