import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const MyBorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/api/borrowed?email=${user.email}`)
        .then((res) => {
          setBorrowedBooks(res.data);
        });
    }
  }, [user]);

  const handleReturn = async (borrowedId, originalBookId) => {
    try {
      // Step 1: Delete the borrowed entry
      await axios.delete(`http://localhost:5000/api/borrowed/${borrowedId}`);

      // Step 2: Increase the quantity of the original book
      // await axios.patch(`http://localhost:5000/api/books/${originalBookId}/increase`);

      // Step 3: Remove from local state
      setBorrowedBooks(borrowedBooks.filter((b) => b._id !== borrowedId));
      toast.success("✅ Book Returned & Quantity Updated!");
    } catch (error) {
      console.error("Return failed:", error);
      toast.error("❌ Failed to return the book. Try again.");
    }
  };

  
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📘 My Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <p>No borrowed books yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {borrowedBooks.map((book) => (
            <div key={book._id} className="p-4 border rounded-lg shadow bg-white flex gap-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-24 h-32 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{book.title}</h3>
                <p className="text-gray-600">Author: {book.author}</p>
                <p className="text-gray-600">Category: {book.category}</p>
                <p className="text-sm text-gray-500">
                  Borrowed: {book.borrowDate}
                </p>
                <p className="text-sm text-gray-500">
                  Return by: {book.returnDate}
                </p>
                <button
                  onClick={() => handleReturn(book._id, book.bookId)}
                  className="mt-2 px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
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
