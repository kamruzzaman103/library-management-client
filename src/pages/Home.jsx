

// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import PopularBooks from "../components/PopularBooks";
import NewReleases from "../components/NewReleases";
// import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <section>
        {/* Banner/Slider */}
        {/* <Slider /> */}
      </section>

      {/* Book Categories */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold mb-6">Book Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Novel Category */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Novel</h3>
            <img
              src="https://via.placeholder.com/200"
              alt="Novel"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <Link to="/category/Novel" className="text-blue-500 hover:underline">
              View All Books
            </Link>
          </div>

          {/* Thriller Category */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Thriller</h3>
            <img
              src="https://via.placeholder.com/200"
              alt="Thriller"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <Link to="/category/Thriller" className="text-blue-500 hover:underline">
              View All Books
            </Link>
          </div>

          {/* History Category */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">History</h3>
            <img
              src="https://via.placeholder.com/200"
              alt="History"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <Link to="/category/History" className="text-blue-500 hover:underline">
              View All Books
            </Link>
          </div>

          {/* Drama Category */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Drama</h3>
            <img
              src="https://via.placeholder.com/200"
              alt="Drama"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <Link to="/category/Drama" className="text-blue-500 hover:underline">
              View All Books
            </Link>
          </div>
        </div>
      </section>

    <section>
      <PopularBooks></PopularBooks>
    </section>

      {/* Extra Section 2: New Releases */}
      <section>
        <NewReleases></NewReleases>
      </section>
    </div>
  );
};

export default Home;
