import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [bookData, setBookData] = useState(null);
  const [newImageFile, setNewImageFile] = useState(null);

  useEffect(() => {
    axios.get(`https://library-management-server-theta-swart.vercel.app/api/books/${id}`).then((res) => {
      setBookData(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = bookData.image;

      if (newImageFile) {
        const formData = new FormData();
        formData.append("file", newImageFile);
        formData.append("upload_preset", "bookstore"); 
        formData.append("cloud_name", "dnvxxv2v8");

        const cloudinaryRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dnvxxv2v8/image/upload",
          formData
        );

        imageUrl = cloudinaryRes.data.secure_url;
      }

      const updatedBook = {
        ...bookData,
        rating: parseFloat(bookData.rating),
        image: imageUrl,
      };

      await axios.put(`https://library-management-server-theta-swart.vercel.app/api/books/${id}`, updatedBook);

      toast.success("Book updated successfully!");
      navigate("/all-books");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update book!");
    }
  };

  if (!user) {
    return <div className="text-center mt-10 text-red-600">⚠️ Unauthorized Access</div>;
  }

  if (!bookData) return <div className="text-center mt-10">Loading book info...</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 mb-10 p-6 shadow-lg bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">✏️ Update Book</h2>
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
          value={bookData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="author"
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
          <option value="Novel">Novel</option>
          <option value="Thriller">Thriller</option>
          <option value="History">History</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={bookData.rating}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={bookData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
           className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800  rounded-lg text-sm px-5 py-2.5 w-full font-bold"
        >
          ✅ Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
