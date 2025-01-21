'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // For stars

export default function FeedbackSection() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate:any) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && feedback) {
      setSubmitted(true);
      // Here, you can send the feedback to your server or API
      // Resetting form after submission
      setRating(0);
      setFeedback("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 py-16 px-8 text-white mb-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">We Value Your Feedback!</h2>
        <p className="text-lg mb-6">Your feedback helps us improve and serve you better. Please take a moment to share your experience.</p>

        {submitted ? (
          <div className="bg-green-600 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Thank you for your feedback!</h3>
            <p className="mt-2">We appreciate your time and effort in providing us with valuable insights.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white text-black p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Rate Your Experience</h3>
              <div className="flex justify-center items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    size={30}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Your Feedback</h3>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="4"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your experience..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-3 text-white font-semibold text-lg rounded-lg hover:from-pink-600 hover:to-yellow-600 transition-all duration-300"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
