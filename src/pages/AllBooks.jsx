import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import LoadingSpinner from "../components/LoadingSpinner";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewType, setViewType] = useState("card");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredBooks = showAvailableOnly
    ? books.filter((book) => book.quantity > 0)
    : books;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="justify-center items-center flex mb-5">
        <span className="text-3xl mr-4">📚</span><h2 className="text-4xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-red-700 via-blue-700  to-green-500 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center"> All Books</h2>
      </div>


      {loading ? (
        <div className="flex justify-center items-center h-60">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <button
              onClick={() => setShowAvailableOnly(!showAvailableOnly)}
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {showAvailableOnly ? "Show All Books" : "Show Available Books"}
            </button>

            <select
              value={viewType}
              onChange={(e) => setViewType(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded"
            >
              <option value="card">📦 Card View</option>
              <option value="table">📋 Table View</option>
            </select>
          </div>

          {filteredBooks.length === 0 ? (
            <p className="text-center text-gray-500">No books available.</p>
          ) : viewType === "card" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <div
                  key={book._id}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-48 object-cover rounded"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">{book.title}</h3>
                    <p className="text-sm text-gray-600">By {book.author}</p>
                    <p className="text-sm text-gray-500">
                      📚 Category: {book.category}
                    </p>
                    <p className="text-sm text-gray-500">
                    Quantity: {book.quantity}
                    </p>

                    <div className="items-center inline-flex gap-2">
                      <p className="text-sm text-yellow-600">Rating:</p>
                      <StarRating rating={Math.round(book.rating)} />
                    </div>
                    {/* <p className="mt-2 text-gray-700">
                      {book.description?.slice(0, 80)}...
                    </p> */}
                  </div>
                  <div className="mt-4 flex justify-between gap-2">
                    <Link
                      to={`/book/${book._id}`}
                      className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                      📖 View Details
                    </Link>
                    <Link
                      to={`/update-book/${book._id}`}
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                      ✏️ Update
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Image</th>
                    <th className="p-2 border">Title</th>
                    <th className="p-2 border">Author</th>
                    <th className="p-2 border">Category</th>
                    <th className="p-2 border">Rating</th>
                    <th className="p-2 border">Quantity</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBooks.map((book) => (
                    <tr key={book._id} className="text-center hover:bg-gray-50">
                      <td className="p-2 border">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-20 h-16 object-cover mx-auto"
                        />
                      </td>
                      <td className="p-2 border">{book.title}</td>
                      <td className="p-2 border">{book.author}</td>
                      <td className="p-2 border">{book.category}</td>
                      <td className="p-2 border">
                        <StarRating rating={Math.round(book.rating)} />
                      </td>
                      <td className="p-2 border">{book.quantity}</td>
                      <td className="p-2 border flex flex-col items-center gap-1">
                        <Link
                          to={`/book/${book._id}`}
                          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2"
                        >
                          📖 Details
                        </Link>
                        <Link
                          to={`/update-book/${book._id}`}
                          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2"
                        >
                          ✏️ Update
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllBooks;
