import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${id}`).then((res) => {
      setBook(res.data);
    });
  }, [id]);

  const handleBorrow = () => {
    // API call to borrow book (optional based on backend logic)
    toast.success("📘 Book Borrowed Successfully!");
  };

  if (!book) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={book.image}
          alt={book.title}
          className="w-full md:w-1/2 rounded-lg shadow"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{book.title}</h2>
          <p className="text-gray-600">✍️ {book.author}</p>
          <p className="text-gray-700">{book.description}</p>
          <p className="text-green-700 font-semibold">Available: {book.quantity}</p>

          <button
            onClick={handleBorrow}
            disabled={book.quantity === 0}
            className={`mt-4 px-4 py-2 rounded text-white ${
              book.quantity > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            📚 {book.quantity > 0 ? "Borrow Now" : "Not Available"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
