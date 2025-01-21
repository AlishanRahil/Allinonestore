// 'use client';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';

// const fetchProducts = async () => {
//   const res = await fetch('https://fakestoreapi.com/products');
//   const products = await res.json();
//   return products;
// };

// export default function Page() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [popup, setPopup] = useState('');
//   const [amount, setAmount] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       const productData = await fetchProducts();
//       setProducts(productData);
//     };

//     fetchData();
//   }, []);

//   const calculateTotal = () => {
//     const totalAmount = cart.reduce((acc, item:any) => acc + item.price, 0);
//     setAmount(totalAmount);
//   };

//   const addToCart = (product:any) => {
//     setCart((prev) => [...prev, product]);
//     setPopup(`Added ${product.title} to the cart`);

//     setTimeout(() => {
//       setPopup('');
//     }, 3000);
//   };

//   return (
//     <>
//     <Navbar/>
//       {popup && (
//         <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 shadow-lg rounded-lg z-50">
//           {popup}
//         </div>
//       )}

//       <div>
//         <h1
//           className="text-center font-bold mt-10 text-3xl"
//           data-aos="fade-up"
//         >
//           All Products
//         </h1>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10 p-4">
//         {products.map((product:any, id) => (
//           <div
//             key={product.id}
//             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
//             data-aos="fade-up"
//           >
//             <h3 className="text-xl font-semibold mb-4">{id + 1}: {product.title}</h3>
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-48 object-cover mb-4 rounded"
//             />
//             <p className="text-gray-700 mb-4">{product.description.slice(0, 100)}...</p>
//             <div className="flex justify-between items-center mt-4">
//               <Link
//                 className="bg-blue-600 font-bold rounded-md px-4 py-2 text-white hover:bg-yellow-300"
//                 href={`./products/${product.id}`}
//               >
//                 View Details
//               </Link>
//               <button
//                 className="bg-blue-600 font-bold rounded-md px-4 py-2 text-white hover:bg-yellow-300"
//                 onClick={() => addToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Cart Section */}
//       <div className="mt-10 p-6 bg-gray-100 max-w-5xl mx-auto rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold">Cart</h2>
//         {cart.length > 0 ? (
//           <>
//             {cart.map((item:any, index) => (
//               <div key={index} className="flex justify-between p-2 border-b border-gray-300">
//                 <p>{index + 1}. {item.title}</p>
//                 <p className="font-semibold">{'$' + item.price}</p>
//               </div>
//             ))}
//             <div className="mt-4 flex flex-col items-center">
//               <button
//                 className="bg-blue-600 font-bold rounded-md px-4 py-2 text-white hover:bg-yellow-300"
//                 onClick={calculateTotal}
//               >
//                 Show Total Amount
//               </button>
//               <p className="text-lg font-bold mt-2">
//                 Total Amount: {'$' + amount}
//               </p>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-600">Your cart is empty. Add some products!</p>
//         )}
//       </div>
//     </>
//   );
// }



'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return products;
};

export default function Page() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState('');
  const [amount, setAmount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
      setFilteredProducts(productData);
    };

    fetchData();
  }, []);

  const calculateTotal = () => {
    const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);
    setAmount(totalAmount);
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setPopup(`Added ${product.title} to the cart`);

    setTimeout(() => {
      setPopup('');
    }, 3000);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterProducts(e.target.value, selectedCategory);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    filterProducts(searchTerm, e.target.value);
  };

  const filterProducts = (search, category) => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === '' || product.category === category)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Navbar />
      {popup && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 shadow-lg rounded-lg z-50">
          {popup}
        </div>
      )}

      <div className="max-w-7xl mx-auto mt-10 p-4">
        <h1 className="text-center font-bold text-3xl mb-6">All Products</h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="border p-2 rounded-md w-full md:w-1/3"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            className="border p-2 rounded-md w-full md:w-1/3"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {Array.from(new Set(products.map((product) => product.category))).map(
              (category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              )
            )}
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, id) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold mb-4">
                {id + 1}: {product.title}
              </h3>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <p className="text-gray-700 mb-4">
                {product.description.slice(0, 100)}...
              </p>
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
      </div>

      {/* Cart Section */}
      <div className="mt-10 p-6 bg-gray-100 max-w-5xl mx-auto rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Cart</h2>
        {cart.length > 0 ? (
          <>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between p-2 border-b border-gray-300">
                <p>
                  {index + 1}. {item.title}
                </p>
                <p className="font-semibold">{'$' + item.price}</p>
              </div>
            ))}
            <div className="mt-4 flex flex-col items-center">
              <button
                className="bg-blue-600 font-bold rounded-md px-4 py-2 text-white hover:bg-yellow-300"
                onClick={calculateTotal}
              >
                Show Total Amount
              </button>
              <p className="text-lg font-bold mt-2">Total Amount: {'$' + amount}</p>
            </div>
          </>
        ) : (
          <p className="text-gray-600">Your cart is empty. Add some products!</p>
        )}
      </div>
    </>
  );
}
