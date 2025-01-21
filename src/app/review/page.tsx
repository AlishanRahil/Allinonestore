// 'use client';
// import { useState } from 'react';

// export default function ReviewPage() {
//   const [reviews, setReviews] = useState([]);
//   const [name, setName] = useState('');
//   const [review, setReview] = useState('');

//   const handleAddReview = () => {
//     if (name && review) {
//       setReviews([...reviews, { name, review }]);
//       setName('');
//       setReview('');
//     }else if(!name  || !review){
//         alert('Please Fill This TO GIve the review')
//     }
//   };

//   return (
//     <div className="min-h-screen p-8 bg-gray-100 flex  justify-center">
//       <h1 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h1>

//       {/* Review Form */}
//       <div className="bg-white p-6 shadow rounded mb-8 mt-20">
//         <h2 className="text-lg font-semibold mb-4 text-center ">Leave a Review</h2>
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <textarea
//           placeholder="Your Review"
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           className="w-full mb-4 p-2 border rounded"
//         ></textarea>
//         <button
//           onClick={handleAddReview}
//           className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
//         >
//           Submit Review
//         </button>
//       </div>

//       {/* Reviews Display */}
//       <div>
//         <h2 className="text-lg font-semibold mb-4">All Reviews</h2>
//         {reviews.map((r, index) => (
//           <div key={index} className="bg-white p-4 shadow rounded mb-4">
//             <p className="font-bold">{r.name}</p>
//             <p>{r.review}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



'use client';
import { useState } from 'react';

export default function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleAddReview = () => {
    if (name && review) {
      setReviews([...reviews, { name, review }]);
      setName('');
      setReview('');
    } else if (!name || !review) {
      alert('Please fill out all fields to submit a review.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h1>

        {/* Review Form */}
        <div className="bg-white p-6 shadow rounded mb-8">
          <h2 className="text-lg font-semibold mb-4 text-center">Leave a Review</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
          <textarea
            placeholder="Your Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          ></textarea>
          <button
            onClick={handleAddReview}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
          >
            Submit Review
          </button>
        </div>

        {/* Reviews Display */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-center">All Reviews</h2>
          {reviews.map((r, index) => (
            <div key={index} className="bg-white p-4 shadow rounded mb-4">
              <p className="font-bold">{r.name}</p>
              <p>{r.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
