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
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
  
      {/* Main content area between Navbar and Footer */}
      <div className="flex-1 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/all-books" element={<AllBooks />} />
          <Route path="/add-book" element={<PrivateRoute><AddBook /></PrivateRoute>} />
          <Route path="/book/:id" element={<PrivateRoute><BookDetails /></PrivateRoute>} />
          <Route path="/my-borrowed" element={<PrivateRoute><MyBorrowedBooks /></PrivateRoute>} />
          <Route path="/update-book/:id" element={<PrivateRoute><UpdateBook /></PrivateRoute>} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </div>
  
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
  
};

export default App;
