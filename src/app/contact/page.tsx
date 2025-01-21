// 'use client';
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function Page() {
//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   // Error state
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   // Validation function
//   const validate = () => {
//     const newErrors: Record<string, string> = {};
//     if (!formData.name) newErrors.name = 'Name is required.';
//     if (!formData.email) {
//       newErrors.email = 'Email is required.';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email address.';
//     }
//     if (!formData.message) newErrors.message = 'Message is required.';
//     return newErrors;
//   };

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' }); // Clear errors on input
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       alert('Form submitted successfully!');
//       setFormData({ name: '', email: '', message: '' }); // Reset form
//     }
//   };

//   return (
//     <motion.div
//       className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
//       <motion.form
//         onSubmit={handleSubmit}
//         animate={{
//           x: errors.name || errors.email || errors.message ? [0, -10, 10, 0] : 0,
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         {/* Name Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             className={`w-full p-3 border ${
//               errors.name ? 'border-red-500' : 'border-gray-300'
//             } rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
//           />
//           {errors.name && (
//             <motion.p
//               className="text-red-500 text-sm mt-1"
//               initial={{ opacity: 0, y: -5 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               {errors.name}
//             </motion.p>
//           )}
//         </div>

//         {/* Email Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             className={`w-full p-3 border ${
//               errors.email ? 'border-red-500' : 'border-gray-300'
//             } rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
//           />
//           {errors.email && (
//             <motion.p
//               className="text-red-500 text-sm mt-1"
//               initial={{ opacity: 0, y: -5 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               {errors.email}
//             </motion.p>
//           )}
//         </div>

//         {/* Message Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Enter your message"
//             className={`w-full p-3 border ${
//               errors.message ? 'border-red-500' : 'border-gray-300'
//             } rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
//           />
//           {errors.message && (
//             <motion.p
//               className="text-red-500 text-sm mt-1"
//               initial={{ opacity: 0, y: -5 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               {errors.message}
//             </motion.p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             Submit
//           </button>
//         </div>
//       </motion.form>
//     </motion.div>
//   );
// }



'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false); // State for success popup

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData); // Log form data to console
      setShowSuccess(true); // Show success popup
      setTimeout(() => setShowSuccess(false), 3000); // Auto-hide after 3 seconds
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <motion.div
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
      <motion.form
        onSubmit={handleSubmit}
        animate={{
          x: errors.name || errors.email || errors.message ? [0, -10, 10, 0] : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={`w-full p-3 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
          />
          {errors.name && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full p-3 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
          />
          {errors.email && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className={`w-full p-3 border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring focus:ring-blue-300`}
          />
          {errors.message && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </motion.form>

      {/* Success Popup */}
      {showSuccess && (
        <motion.div
          className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Form submitted successfully!
        </motion.div>
      )}
    </motion.div>
  );
}
