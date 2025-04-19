// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const AllBooks = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/books").then((res) => {
//       setBooks(res.data);
//     });
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold mb-6 text-center">📚 All Books</h2>

//       {books.length === 0 ? (
//         <p className="text-center text-gray-500">No books available.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {books.map((book) => (
//             <div
//               key={book._id}
//               className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
//             >
//               <img
//                 src={book.image}
//                 alt={book.title}
//                 className="w-full h-48 object-cover rounded"
//               />
//               <div className="mt-4">
//                 <h3 className="text-xl font-bold">{book.title}</h3>
//                 <p className="text-sm text-gray-600">By {book.author}</p>
//                 <p className="mt-2 text-gray-700">{book.description?.slice(0, 80)}...</p>
//               </div>
//               <Link
//                 to={`/book/${book._id}`}
//                 className="mt-4 inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
//               >
//                 📖 View Details
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllBooks;


import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating"; // adjust path if needed

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">📚 All Books</h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover rounded"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold">{book.title}</h3>
                <p className="text-sm text-gray-600">By {book.author}</p>
                <p className="text-sm text-gray-500">📚 Category: {book.category}</p>
                <div className="items-center inline-flex gap-2">
                  <p className="text-sm text-yellow-600">Rating: </p>
                  <StarRating rating={Math.round(book.rating)} />
                </div>


                <p className="mt-2 text-gray-700">{book.description?.slice(0, 80)}...</p>
              </div>
              <div className="mt-4 flex justify-between gap-2">
                <Link
                  to={`/book/${book._id}`}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  📖 View Details
                </Link>
                <Link
                  to={`/update-book/${book._id}`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  ✏️ Update
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
