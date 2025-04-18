import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    category: "",
    quantity: 1,
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/books", bookData);
      if (res.data.insertedId) {
        toast.success("✅ Book added successfully!");
        setBookData({
          title: "",
          author: "",
          category: "",
          quantity: 1,
          description: "",
          image: "",
        });
      }
    } catch (err) {
      toast.error("❌ Failed to add book!");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">📚 Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          placeholder="Author"
          value={bookData.author}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={bookData.category}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={bookData.quantity}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={bookData.image}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={bookData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
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
