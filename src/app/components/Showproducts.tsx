'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Showproducts = () => {
  const [products, setProducts] = useState([]);

  // Fetching data from FakeStoreAPI
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products?limit=6`);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="product">
        <motion.h2
          className="text-3xl font-bold text-gray-800 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-yellow-500">Products</span>
        </motion.h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
          {products.length === 0 ? (
            <div className="text-center text-lg text-gray-600">Loading...</div>
          ) : (
            products.map((product:any) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-lg text-gray-600 mt-2">{`$${product.price}`}</p>
                  <Link
                    href={`/products/${product.id}`}
                    className="mb-10 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Showproducts;
