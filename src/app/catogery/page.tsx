'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Fetch Categories
const fetchCategories = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  return res.json();
};

// Fetch Category Products
const fetchCategoryProducts = async (category:any) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  return res.json();
};

// Navbar Component
const Navbar = ({ cartLength, toggleSidebar }:any) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl">AllinOne</h1>
        <button
          className="text-white text-xl flex items-center gap-2"
          onClick={toggleSidebar}
        >
          🛒 Cart ({cartLength})
        </button>
      </div>
    </nav>
  );
};

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Fetch categories when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const categoryData = await fetchCategories();
      setCategories(categoryData);
    };

    fetchData();
  }, []);

  // Handle Category Click
  const handleCategoryClick = async (category:any) => {
    setSelectedCategory(category);
    const productsData = await fetchCategoryProducts(category);
    setProducts(productsData);
  };

  // Add Product to Cart
  const addToCart = (product:any) => {
    setCart([...cart, product]);
  };

  // Toggle Sidebar Visibility
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar cartLength={cart.length} toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      {sidebarVisible && (
        <div className="fixed top-0 right-0 bg-gray-800 bg-opacity-75 w-80 h-full z-50 p-6 overflow-y-auto">
          <button
            className="text-white text-xl absolute top-4 right-4"
            onClick={toggleSidebar}
          >
            ❌
          </button>
          <h2 className="text-2xl text-white mb-6">Cart</h2>
          {cart.length === 0 ? (
            <p className="text-white">Your cart is empty!</p>
          ) : (
            <div>
              {cart.map((product:any, index) => (
                <div key={index} className= " bg-white p-4 rounded-lg mb-4 shadow-md">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p>{product.description.slice(0, 50)}...</p>
                  <p>${product.price}</p>
                  <button className=' px-5 py-2 bg-yellow-500 rounded-lg flex'>Order Now</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        {/* Categories Section */}
        <h1 className="text-center font-bold text-3xl mt-10 mb-6" data-aos="fade-up">
          Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out flex items-center justify-center cursor-pointer"
              data-aos="fade-up"
              onClick={() => handleCategoryClick(category)}
            >
              <h2 className="text-xl font-semibold text-gray-800 capitalize">{category}</h2>
            </div>
          ))}
        </div>

        {/* Selected Category Products */}
        {selectedCategory && (
          <>
            <h2 className="text-center font-bold text-2xl mt-10 mb-6">
              Products in "{selectedCategory}" Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {products.map((product:any) => (
                <div
                  key={product.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                  data-aos="fade-up"
                >
                  <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <p className="text-gray-700 mb-4">{product.description.slice(0, 100)}...</p>
                  <div className="flex justify-between items-center mt-4">
                    <Link
                      className="bg-blue-600 font-bold rounded-md px-4 py-2 text-white hover:bg-yellow-300"
                      href={`./products/${product.id}`}
                    >
                      View Details
                    </Link>
                    <button
                      className="bg-blue-600 font-bold rounded-md px-4 py-2 text-white hover:bg-yellow-300"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
