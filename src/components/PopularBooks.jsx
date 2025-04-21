import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books/popular")
      .then((res) => {
        setPopularBooks(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch popular books", err);
      });
  }, []);

  return (
    <section className="bg-gray-100 p-8 mb-8">
      <h2 className="text-3xl font-semibold mb-6">Popular Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularBooks.map((book) => (
          <div key={book._id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Quantity: {book.quantity}</p>
            <p>Rating: {book.rating} ★</p>
            <Link to={`/book/${book._id}`} className="text-blue-500 hover:underline">
              Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularBooks;
