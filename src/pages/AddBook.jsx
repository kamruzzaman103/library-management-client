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
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "book_upload"); 
        formData.append("cloud_name", "dnvxxv2v8"); 

        const cloudRes = await fetch(
          "https://api.cloudinary.com/v1_1/dnvxxv2v8/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const cloudData = await cloudRes.json();
        imageUrl = cloudData.secure_url;
      }

      const finalBook = {
        ...bookData,
        quantity: parseInt(bookData.quantity),
        rating: parseFloat(bookData.rating),
        image: imageUrl,
        email: user?.email,
        createdAt: new Date().toISOString(),
      };

      const res = await axios.post("https://library-management-server-theta-swart.vercel.app/api/books", finalBook);

      if (res.data.insertedId) {
        toast.success("Book added successfully!");
        setBookData({
          title: "",
          author: "",
          category: "",
          quantity: "",
          description: "",
          rating: "",
          image: "",
          createdAt: new Date().toISOString(),
        });
        setImageFile(null);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to add book!");
    }
  };

  if (!user) {
    return (
      <div className="text-center mt-10 text-red-600">
        ⚠️ Unauthorized Access
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 mb-10 p-6 shadow-lg bg-white rounded-lg">
      <div className="justify-center items-center flex mb-5">
      <span className="text-3xl mr-4">📚</span><h2 className="text-4xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-red-700 via-blue-700  to-green-500 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center"> Add a New Book</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
        />
        {/* Optional: Show image preview */}
        {imageFile && (
          <img
            src={URL.createObjectURL(imageFile)}
            alt="preview"
            className="w-32 h-32 object-cover mt-2 border rounded"
          />
        )}

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
          📘 Book content should provide readers with engaging, informative and
          inspiring experiences.
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          ➕ Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
