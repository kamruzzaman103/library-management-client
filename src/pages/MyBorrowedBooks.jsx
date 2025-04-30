import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

const MyBorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true); // 🔄 Add loading state

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axios
        .get(`https://library-management-server-84w7.onrender.com/api/borrowed?email=${user.email}`)
        .then((res) => {
          setBorrowedBooks(res.data);
          setLoading(false); 
        })
        .catch(() => {
          toast.error("Failed to load borrowed books.");
          setLoading(false);
        });
    }
  }, [user]);

  const handleReturn = async (borrowedId, originalBookId) => {
    try {
      await axios.delete(`https://library-management-server-84w7.onrender.com/api/borrowed/${borrowedId}`);
      setBorrowedBooks(borrowedBooks.filter((b) => b._id !== borrowedId));
      toast.success("Book Returned & Quantity Updated!");
    } catch (error) {
      console.error("Return failed:", error);
      toast.error("Failed to return the book. Try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="justify-center items-center flex mb-5">
        <span className="text-2xl mr-4">📘</span>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-yellow-600 via-blue-700  to-green-500 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center">
          My Borrowed Books
        </h2>
      </div>

      {loading ? (
        <LoadingSpinner /> 
      ) : borrowedBooks.length === 0 ? (
        <p>No borrowed books yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {borrowedBooks.map((book) => (
            <div key={book._id} className="p-4 border rounded-lg shadow bg-white flex gap-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-24 h-32 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Title: {book.title}</h3>
                <p className="text-gray-600">Category: {book.category}</p>
                <p className="text-sm text-gray-500">
                  Borrowed: {new Date(book.borrowedAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  Return by: {book.returnDate}
                </p>
                <button
                  onClick={() => handleReturn(book._id, book.bookId)}
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-1.5"
                >
                  Return
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBorrowedBooks;
