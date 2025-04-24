import React from "react";
import { Link } from "react-router-dom";
import PopularBooks from "../components/PopularBooks";
import NewReleases from "../components/NewReleases";
import Slider from "../components/Slider";
import Novel from '../assets/novel.png';
import Thriller from '../assets/thriller.png';
import History from '../assets/history.png';
import Drama from '../assets/drama.png';

const Home = () => {
  return (
    <div>
      <section>
        {/* Banner/Slider */}
        <Slider />
      </section>

      {/* Book Categories */}
      <section className="p-8">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-red-700 via-blue-700  to-green-500 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center mb-3">Book Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Novel Category */}
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            {/* <h3 className="text-2xl font-semibold">Novel</h3> */}
            <img
              src={Novel}
              alt="Novel"
              className="w-full h-52 object-cover mb-4 rounded-lg"
            />
            <Link to="/category/Novel" className="text-blue-500 hover:underline">
              View All Books
            </Link>
          </div>

          {/* Thriller Category */}
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img
              src={Thriller}
              alt="Thriller"
              className="w-full h-52 object-cover mb-4 rounded-lg"
            />
            <Link to="/category/Thriller" className="text-blue-500 hover:underline">
              View All Books
            </Link>
          </div>

          {/* History Category */}
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img
              src={History}
              alt="History"
              className="w-full h-52 object-cover mb-4 rounded-lg"
            />
            <Link to="/category/History" className="text-blue-500 hover:underline">
              View All Books
            </Link>
          </div>

          {/* Drama Category */}
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img
              src={Drama}
              alt="Drama"
              className="w-full h-52 object-cover mb-4 rounded-lg"
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
