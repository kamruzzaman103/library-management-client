import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AddBook = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [imageFile, setImageFile] = useState(null);

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    category: "",
    quantity: "",
    description: "",
    rating: "",
    image: "",
  });

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      if (imageFile) {
        // Simulate image upload with temporary local URL
        imageUrl = URL.createObjectURL(imageFile);
      }

      const finalBook = {
        ...bookData,
        quantity: parseInt(bookData.quantity),
        rating: parseFloat(bookData.rating),
        image: imageUrl,
        email: user?.email,
      };

      const res = await axios.post("http://localhost:5000/api/books", finalBook);

      if (res.data.insertedId) {
        toast.success("✅ Book added successfully!");
        setBookData({
          title: "",
          author: "",
          category: "",
          quantity: "",
          description: "",
          rating: "",
          image: "",
        });
        setImageFile(null);
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to add book!");
    }
  };

  if (!user) {
    return <div className="text-center mt-10 text-red-600">⚠️ Unauthorized Access</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">📚 Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={bookData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={bookData.author}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <select
          name="category"
          value={bookData.category}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="Novel">Novel</option>
          <option value="Thriller">Thriller</option>
          <option value="History">History</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={bookData.quantity}
          onChange={handleChange}
          min="1"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={bookData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Short Description"
          value={bookData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <div className="text-sm text-gray-600 italic">
          📘 Book content should provide readers with engaging, informative and inspiring experiences.
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
