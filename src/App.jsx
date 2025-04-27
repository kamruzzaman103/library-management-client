import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home"; 
import Navbar from "./components/Navbar";
import PrivateRoute from "./routes/PrivateRoute";
import AddBook from "./pages/AddBook";
import AllBooks from "./pages/AllBooks";
import BookDetails from "./pages/BookDetails";
import MyBorrowedBooks from "./pages/MyBorrowedBooks";
import UpdateBook from "./pages/UpdateBook";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import ForgotPassword from './components/ForgotPassword';
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {

  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home || LMS",
      "/login": "Login || LMS",
      "/register": "Register || LMS",
      "/forgot-password": "forgot-password || LMS",
      "/all-books": "All-Books || LMS",
      "/add-book": "Add-Book || LMS",
      "/my-borrowed": "My-Borrowed || LMS",
      "/category": "Category || LMS",
      "/update-book/:id": "Update-Book || LMS",
      "/*": "Notfound || LMS",
    };

    // Default title if route not found
    document.title = titles[location.pathname] || "Library-Management-System";
  }, [location.pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
  
      {/* Main content area between Navbar and Footer */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/all-books" element={<AllBooks />} />
          <Route path="/add-book" element={<PrivateRoute><AddBook /></PrivateRoute>} />
          <Route path="/book/:id" element={<PrivateRoute><BookDetails /></PrivateRoute>} />
          <Route path="/my-borrowed" element={<PrivateRoute><MyBorrowedBooks /></PrivateRoute>} />
          <Route path="/update-book/:id" element={<PrivateRoute><UpdateBook /></PrivateRoute>} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </div>
  
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
  
};

export default App;
