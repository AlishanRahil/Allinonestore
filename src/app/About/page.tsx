

'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaAnchor } from 'react-icons/fa';
import asets from '../Assets/300 (1).jpeg'
import assets2 from '../Assets/300 (2).jpeg'
import assets from '../Assets/300.jpeg'
import Image from 'next/image';
import WhatWeOffer from '../components/Whatweoffer';

const page = () => {
  return (
    <section>
      {/* About Us Hero Section */}
      <motion.div
        className="bg-blue-600 text-white py-20"
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
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We are passionate about providing the best products and services to our customers.
          </motion.p>
        </div>
      </motion.div>

      {/* About Us Content Section */}
      <motion.div
        className="py-20 bg-white shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.p
            className="text-lg text-gray-700"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our mission is to create a platform that delivers an exceptional shopping experience for everyone. With a wide variety of products, competitive prices, and top-notch customer service, we strive to make your online shopping experience seamless and enjoyable.
          </motion.p>
          <motion.p
            className="mt-4 text-lg text-gray-700"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            We believe in quality, integrity, and customer satisfaction. We are committed to providing the best shopping experience for our community.
          </motion.p>
        </div>
      </motion.div>

      {/* Meet the Team Section */}
      <motion.div
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.h2
            className="text-3xl font-bold text-gray-800"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Meet the Team
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Our dedicated team works hard to make sure your experience is exceptional.
          </motion.p>

          {/* Team Member Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
     <Image src={assets2} alt='myimage'  className="w-32 h-32 rounded-full mx-auto" />
               <h3 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
 <Image src={asets} alt='myimage'  className="w-32 h-32 rounded-full mx-auto" />   
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Marketing Director</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Image src={assets} alt='myimage'  className="w-32 h-32 rounded-full mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Alex Johnson</h3>
              <p className="text-gray-600">Product Manager</p>
            </motion.div>
          </div>
        </div>
      </motion.div>



      <WhatWeOffer/>
    </section>
  );
};

export default page;
