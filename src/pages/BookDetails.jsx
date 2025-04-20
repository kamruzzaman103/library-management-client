import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import StarRating from "../components/StarRating";
// import { AuthContext } from "../contexts/AuthProvider";
import { useAuth } from "../hooks/useAuth";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${id}`).then((res) => {
      setBook(res.data);
    });
  }, [id]);

  const handleBorrowSubmit = async (e) => {
    e.preventDefault();

    if (!returnDate) {
      toast.error("📅 Please select a return date.");
      return;
    }

    const borrowInfo = {
      bookId: book._id,
      userName: user.displayName,
      userEmail: user.email,
      returnDate,
      title: book.title,
      image: book.image,
    };

    try {
      const res = await axios.post(`http://localhost:5000/api/borrow`, borrowInfo);

      if (res.data.success) {
        toast.success("📘 Book Borrowed Successfully!");
        setBook((prev) => ({
          ...prev,
          quantity: prev.quantity - 1,
        }));
        setShowModal(false);
      } else {
        toast.error("❌ Failed to borrow book");
      }
    } catch (err) {
      toast.error("❌ Error borrowing book");
    }
  };

  if (!user) {
    navigate("/login");
    return null;
  }

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
          <div className="items-center inline-flex gap-2">
            <p className="text-sm text-yellow-600">Rating: </p>
            <StarRating rating={Math.round(book.rating)} />
          </div>
          <p className="text-green-700 font-semibold">Available: {book.quantity}</p>

          <button
            onClick={() => setShowModal(true)}
            disabled={book.quantity === 0}
            className={`mt-4 px-4 py-2 rounded text-white ${book.quantity > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            📚 {book.quantity > 0 ? "Borrow Now" : "Not Available"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">Borrow Book</h3>
            <form onSubmit={handleBorrowSubmit} className="space-y-4">
              <div>
                <label className="block font-medium">Name</label>
                <input
                  type="text"
                  value={user.displayName}
                  disabled
                  className="w-full p-2 border rounded bg-gray-100"
                />
              </div>
              <div>
                <label className="block font-medium">Email</label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full p-2 border rounded bg-gray-100"
                />
              </div>
              <div>
                <label className="block font-medium">Return Date</label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                  Confirm Borrow
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;

