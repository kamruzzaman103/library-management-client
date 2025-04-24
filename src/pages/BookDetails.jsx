import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import StarRating from "../components/StarRating";
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
      createdAt: new Date().toISOString(),
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
        toast.error(`❌ ${res.data.message}`);
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || "❌ Error borrowing book";
      toast.error(errorMsg);
    }
  };


  if (!user) {
    navigate("/login");
    return null;
  }

  if (!book) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-sm sm:max-w-2xl mx-auto p-6 mt-5 sm:mt-20">
      <div className="flex flex-col md:flex-row sm:gap-16 gap-5 sm:items-center p-4 rounded-xl border-2 border-solid">
        <img
          src={book.image}
          alt={book.title}
          className=" md:w-1/2 sm:max-w-[210px] rounded-lg shadow"
        />
        <div className="sm:space-y-3 space-y-1">
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
            className={`text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 ${book.quantity > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
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
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Cancel
                </button>
                <button type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5">
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

