// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const PopularBooks = () => {
//   const [popularBooks, setPopularBooks] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/books")
//       .then((res) => {
//         const books = res.data;

//         // রেটিং অনুযায়ী বড় থেকে ছোটে sort করে প্রথম ৩ টা বই নেওয়া
//         const sortedBooks = books
//           .sort((a, b) => b.rating - a.rating)
//           .slice(0, 3);

//         setPopularBooks(sortedBooks);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch books", err);
//       });
//   }, []);

//   return (
//     <section className="bg-gray-100 p-8 mb-8">
//       <h2 className="text-3xl font-semibold mb-6">Popular Books</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {popularBooks.map((book) => (
//           <div key={book._id} className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold">{book.title}</h3>
//             <p>Author: {book.author}</p>
//             <p>Category: {book.category}</p>
//             <p>Quantity: {book.quantity}</p>
//             <p>Rating: {book.rating} ★</p>
//             <Link
//               to={`/book/${book._id}`}
//               className="text-blue-500 hover:underline"
//             >
//               Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularBooks;



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => {
        const books = res.data;

        // রেটিং অনুযায়ী sort করবো, আর রেটিং এক হলে createdAt দেখে
        const sortedBooks = books
          .sort((a, b) => {
            if (b.rating !== a.rating) {
              return b.rating - a.rating;
            } else {
              // createdAt যেটা বেশি মানে সেটা নতুন → আগে আসবে
              return new Date(b.createdAt) - new Date(a.createdAt);
            }
          })
          .slice(0, 3);

        setPopularBooks(sortedBooks);
      })
      .catch((err) => {
        console.error("Failed to fetch books", err);
      });
  }, []);

  return (
    <section className="bg-gray-100 p-8 mb-2">
      <h2   className="text-4xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-yellow-400 via-blue-500  to-green-400 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center mb-5">Popular Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularBooks.map((book) => (
          <div key={book._id} className="bg-gray-100 rounded-lg shadow overflow-hidden">
          {book.image && (
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-1">{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Quantity: {book.quantity}</p>
            <p>Rating: {book.rating} ★</p>
            <p className="text-sm text-gray-600 mb-2">
              Added: {new Date(book.createdAt).toLocaleDateString()}
            </p>
            <Link
              to={`/book/${book._id}`}
              className="text-blue-500 hover:underline"
            >
              Details
            </Link>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default PopularBooks;
