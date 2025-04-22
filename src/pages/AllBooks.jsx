// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import StarRating from "../components/StarRating";

// const AllBooks = () => {
//   const [books, setBooks] = useState([]);
//   const [showAvailableOnly, setShowAvailableOnly] = useState(false);
//   const [viewType, setViewType] = useState("card"); // "card" or "table"

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/books").then((res) => {
//       setBooks(res.data);
//     });
//   }, []);

//   const filteredBooks = showAvailableOnly
//     ? books.filter((book) => book.quantity > 0)
//     : books;

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold mb-6 text-center">📚 All Books</h2>

//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
//         <button
//           onClick={() => setShowAvailableOnly(!showAvailableOnly)}
//           className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
//         >
//           {showAvailableOnly ? "Show All Books" : "Show Available Books"}
//         </button>

//         <select
//           value={viewType}
//           onChange={(e) => setViewType(e.target.value)}
//           className="border border-gray-300 px-3 py-2 rounded"
//         >
//           <option value="card">📦 Card View</option>
//           <option value="table">📋 Table View</option>
//         </select>
//       </div>

//       {filteredBooks.length === 0 ? (
//         <p className="text-center text-gray-500">No books available.</p>
//       ) : viewType === "card" ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredBooks.map((book) => (
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
//                 <p className="text-sm text-gray-500">📚 Category: {book.category}</p>
//                 <div className="items-center inline-flex gap-2">
//                   <p className="text-sm text-yellow-600">Rating:</p>
//                   <StarRating rating={Math.round(book.rating)} />
//                 </div>
//                 <p className="mt-2 text-gray-700">{book.description?.slice(0, 80)}...</p>
//               </div>
//               <div className="mt-4 flex justify-between gap-2">
//                 <Link
//                   to={`/book/${book._id}`}
//                   className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
//                 >
//                   📖 View Details
//                 </Link>
//                 <Link
//                   to={`/update-book/${book._id}`}
//                   className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
//                 >
//                   ✏️ Update
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 text-sm">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-2 border">Image</th>
//                 <th className="p-2 border">Title</th>
//                 <th className="p-2 border">Author</th>
//                 <th className="p-2 border">Category</th>
//                 <th className="p-2 border">Rating</th>
//                 <th className="p-2 border">Quantity</th>
//                 <th className="p-2 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredBooks.map((book) => (
//                 <tr key={book._id} className="text-center hover:bg-gray-50">
//                   <td className="p-2 border">
//                     <img src={book.image} alt={book.title} className="w-20 h-16 object-cover mx-auto" />
//                   </td>
//                   <td className="p-2 border">{book.title}</td>
//                   <td className="p-2 border">{book.author}</td>
//                   <td className="p-2 border">{book.category}</td>
//                   <td className="p-2 border">
//                     <StarRating rating={Math.round(book.rating)} />
//                   </td>
//                   <td className="p-2 border">{book.quantity}</td>
//                   <td className="p-2 border flex flex-col items-center gap-1">
//                     <Link
//                       to={`/book/${book._id}`}
//                       className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                     >
//                       📖 Details
//                     </Link>
//                     <Link
//                       to={`/update-book/${book._id}`}
//                       className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
//                     >
//                       ✏️ Update
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllBooks;


import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import LoadingSpinner from "../components/LoadingSpinner";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewType, setViewType] = useState("card");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredBooks = showAvailableOnly
    ? books.filter((book) => book.quantity > 0)
    : books;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">📚 All Books</h2>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <button
              onClick={() => setShowAvailableOnly(!showAvailableOnly)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              {showAvailableOnly ? "Show All Books" : "Show Available Books"}
            </button>

            <select
              value={viewType}
              onChange={(e) => setViewType(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded"
            >
              <option value="card">📦 Card View</option>
              <option value="table">📋 Table View</option>
            </select>
          </div>

          {filteredBooks.length === 0 ? (
            <p className="text-center text-gray-500">No books available.</p>
          ) : viewType === "card" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
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
                    <p className="text-sm text-gray-500">
                      📚 Category: {book.category}
                    </p>
                    <div className="items-center inline-flex gap-2">
                      <p className="text-sm text-yellow-600">Rating:</p>
                      <StarRating rating={Math.round(book.rating)} />
                    </div>
                    <p className="mt-2 text-gray-700">
                      {book.description?.slice(0, 80)}...
                    </p>
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
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Image</th>
                    <th className="p-2 border">Title</th>
                    <th className="p-2 border">Author</th>
                    <th className="p-2 border">Category</th>
                    <th className="p-2 border">Rating</th>
                    <th className="p-2 border">Quantity</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBooks.map((book) => (
                    <tr key={book._id} className="text-center hover:bg-gray-50">
                      <td className="p-2 border">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-20 h-16 object-cover mx-auto"
                        />
                      </td>
                      <td className="p-2 border">{book.title}</td>
                      <td className="p-2 border">{book.author}</td>
                      <td className="p-2 border">{book.category}</td>
                      <td className="p-2 border">
                        <StarRating rating={Math.round(book.rating)} />
                      </td>
                      <td className="p-2 border">{book.quantity}</td>
                      <td className="p-2 border flex flex-col items-center gap-1">
                        <Link
                          to={`/book/${book._id}`}
                          className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                        >
                          📖 Details
                        </Link>
                        <Link
                          to={`/update-book/${book._id}`}
                          className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                        >
                          ✏️ Update
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllBooks;
