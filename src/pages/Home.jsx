// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
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
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Fiction</h3>
            <img
              src="https://via.placeholder.com/200"
              alt="Fiction"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <Link to="/category/fiction" className="text-blue-500 hover:underline">
              View All Books
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Science</h3>
            <img
              src="https://via.placeholder.com/200"
              alt="Science"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <Link to="/category/science" className="text-blue-500 hover:underline">
              View All Books
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">History</h3>
            <img
              src="https://via.placeholder.com/200"
              alt="History"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <Link to="/category/history" className="text-blue-500 hover:underline">
              View All Books
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Technology</h3>
            <img
              src="https://via.placeholder.com/200"
              alt="Technology"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <Link to="/category/technology" className="text-blue-500 hover:underline">
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Extra Section 1 */}
      <section className="bg-gray-100 p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-6">Popular Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Book 1</h3>
            <p>Author: John Doe</p>
            <p>Rating: ★★★★☆</p>
            <Link to="/book/1" className="text-blue-500 hover:underline">
              Details
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Book 2</h3>
            <p>Author: Jane Doe</p>
            <p>Rating: ★★★★☆</p>
            <Link to="/book/2" className="text-blue-500 hover:underline">
              Details
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Book 3</h3>
            <p>Author: Jack Smith</p>
            <p>Rating: ★★★☆☆</p>
            <Link to="/book/3" className="text-blue-500 hover:underline">
              Details
            </Link>
          </div>
        </div>
      </section>

      {/* Extra Section 2 */}
      <section className="bg-blue-600 text-white p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-6">New Releases</h2>
        <div className="flex space-x-6 overflow-x-scroll">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">New Book 1</h3>
            <img
              src="https://via.placeholder.com/150"
              alt="New Book 1"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <Link to="/book/4" className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">New Book 2</h3>
            <img
              src="https://via.placeholder.com/150"
              alt="New Book 2"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <Link to="/book/5" className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">New Book 3</h3>
            <img
              src="https://via.placeholder.com/150"
              alt="New Book 3"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <Link to="/book/6" className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
