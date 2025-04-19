import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const MyBorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios.get(`http://localhost:5000/api/borrowed?email=${user.email}`).then((res) => {
        setBorrowedBooks(res.data);
      });
    }
  }, [user]);

  const handleReturn = (id) => {
    axios
      .delete(`http://localhost:5000/api/borrowed/${id}`)
      .then(() => {
        toast.success("✅ Book Returned!");
        setBorrowedBooks(borrowedBooks.filter((b) => b._id !== id));
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📘 My Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <p>No borrowed books yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {borrowedBooks.map((book) => (
            <div key={book._id} className="p-4 border rounded-lg shadow bg-white">
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-600">Author: {book.author}</p>
              <p className="text-sm text-gray-500">Borrowed Date: {book.borrowDate}</p>
              <button
                onClick={() => handleReturn(book._id)}
                className="mt-2 px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Return
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBorrowedBooks;
