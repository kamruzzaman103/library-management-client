// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Website Name */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">Library Management</span>
        </div>

        {/* Menu Items */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/add-book" className="hover:text-blue-400">
            Add Books
          </Link>
          <Link to="/all-books" className="hover:text-blue-400">
            All Books
          </Link>
          <Link to="/borrowed-books" className="hover:text-blue-400">
            Borrowed Books
          </Link>
        </div>

        {/* Conditional rendering based on user login status */}
        <div className="flex items-center space-x-6">
          {!user ? (
            <>
              <Link to="/login" className="hover:text-blue-400">
                Login
              </Link>
              <Link to="/register" className="hover:text-blue-400">
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center space-x-3">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="h-8 w-8 rounded-full"
                  title={user.displayName}
                />
                <button onClick={onLogout} className="hover:text-blue-400">
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
