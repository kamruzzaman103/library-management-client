// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import ReactStars from "react-rating-stars-component";

// const CategoryPage = () => {
//   const { categoryName } = useParams();
//   const [books, setBooks] = useState([]);


//   // useEffect(() => {
//   //   axios.get(`http://localhost:5000/api/books?category=${categoryName}`)
//   //     .then(res => {
//   //       console.log("API Response:", res.data);
//   //       setBooks(res.data);
//   //     })
//   //     .catch(err => console.error("API Error:", err));
//   // }, [categoryName]);

//   // useEffect(() => {
//   //   axios
//   //     .get(`http://localhost:5000/api/books?category=${encodeURIComponent(categoryName)}`)
//   //     .then((res) => {
//   //       console.log("API Response:", res.data);
//   //       setBooks(res.data);
//   //     })
//   //     .catch((err) => console.error("API Error:", err));
//   // }, [categoryName]);
//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/books?category=${categoryName}`)
//       .then(res => setBooks(res.data))
//       .catch(err => console.error(err));
//   }, [categoryName]);

//   return (
//     <div className="p-8">
//       <h2 className="text-3xl font-bold mb-6">Category: {categoryName}</h2>
//       {books.length === 0 ? (
//         <p>No books found in this category.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {books.map(book => (
//             <div key={book._id} className="bg-white p-6 rounded shadow">
//               <img
//                 src={book.image}
//                 alt={book.name}
//                 className="w-full h-40 object-cover mb-4 rounded"
//               />
//               <h3 className="text-xl font-semibold">{book.name}</h3>
//               <p>Author: {book.author}</p>
//               <p>Category: {book.category}</p>
//               <p>Quantity: {book.quantity}</p>
//               <div className="flex items-center">
//                 <span className="mr-2">Rating:</span>
//                 <ReactStars
//                   count={5}
//                   size={20}
//                   value={book.rating}
//                   edit={false}
//                   isHalf={true}
//                   activeColor="#ffd700"
//                 />
//               </div>
//               <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                 Details
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import axios from "axios";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books?category=${categoryName}`)
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, [categoryName]);

  return (
    <div className="p-8">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-red-700 via-blue-700  to-green-500 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center mb-3">Category: {categoryName}</h2>
      {books.length === 0 ? (
        <p>No books found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map(book => (
            <div key={book._id} className="bg-white p-6 rounded shadow">
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold">{book.name}</h3>
              <p>Author: {book.author}</p>
              <p>Category: {book.category}</p>
              <p>Quantity: {book.quantity}</p>
              <div className="items-center inline-flex gap-2 mb-2">
                <p className="text-sm text-yellow-600">Rating: </p>
                <StarRating rating={Math.round(book.rating)} />
              </div><br></br>
              <Link
                to={`/book/${book._id}`}
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2"
              >
                📖 View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
