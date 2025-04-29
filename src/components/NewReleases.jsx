import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StarRating from "../components/StarRating";

const NewReleases = () => {
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://library-management-server-theta-swart.vercel.app/api/books")
      .then((res) => {
        const books = res.data;
        const sortedByRelease = books
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);

        setNewBooks(sortedByRelease);
      })
      .catch((err) => {
        console.error("Failed to fetch books", err);
      });
  }, []);

  return (
    <section className="bg-white p-8 mb-8">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-red-500 via-green-500  to-sky-500 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center mb-5">New Releases</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newBooks.map((book) => (
          <div key={book._id} className="bg-gray-100 rounded-lg shadow overflow-hidden">
            {book.image && (
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-1">{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Category: {book.category}</p>
              <p>Quantity: {book.quantity}</p>
              <div className="items-center inline-flex gap-2">
                <p >Rating: </p>
                <StarRating rating={Math.round(book.rating)} />
              </div>
              <div>
                <Link
                  to={`/book/${book._id}`}
                  className="text-blue-500 hover:underline"
                >
                  Details
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
