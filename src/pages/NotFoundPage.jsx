import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center py-24 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="text-center text-white px-6 py-12 max-w-md mx-auto rounded-lg shadow-2xl bg-opacity-80">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-lg mb-8">It seems like you may have mistyped the URL, or the page might have moved.</p>
        <Link to="/" className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
