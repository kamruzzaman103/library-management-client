import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home"; // Add this if you create a home page
import Navbar from "./components/Navbar";
import PrivateRoute from "./routes/PrivateRoute";
import AddBook from "./pages/AddBook";
import AllBooks from "./pages/AllBooks";
import BookDetails from "./pages/BookDetails";
import MyBorrowedBooks from "./pages/MyBorrowedBooks";
import UpdateBook from "./pages/UpdateBook";
import CategoryPage from "./pages/CategoryPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/add-book" element={<PrivateRoute><AddBook /></PrivateRoute>}/>
        <Route path="/book/:id" element={<PrivateRoute><BookDetails /></PrivateRoute>} />
        <Route path="/my-borrowed" element={<PrivateRoute><MyBorrowedBooks /></PrivateRoute>} />
        <Route path="/update-book/:id" element={<PrivateRoute><UpdateBook /></PrivateRoute>} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />

      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>

  );
};

export default App;
