// new
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Ensure this matches the export

const getActiveClass = (isActive) =>
  isActive
    ? 'text-green-500 underline font-semibold'
    : 'text-white hover:text-green-500';
const Navbar = () => {
  const { user, logout } = useAuth(); // Ensure AuthContext is working

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="dropdown lg:hidden">
        <button tabIndex="0" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <ul
          tabIndex="0"
          className="menu menu-sm dropdown-content bg-gray-500 rounded-box z-10 mt-2 w-36 p-2 shadow"
        >
          <li>
            <NavLink to="/" className={({ isActive }) => getActiveClass(isActive)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-books" className={({ isActive }) => getActiveClass(isActive)}>
              All Books
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/add-book" className={({ isActive }) => getActiveClass(isActive)}>
                  Add Books
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-borrowed" className={({ isActive }) => getActiveClass(isActive)}>
                  Borrowed Books
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <Link to="/" className="text-lg font-bold">
        Library Management
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-4 text-white">
        <NavLink to="/" className={({ isActive }) => getActiveClass(isActive)}>
          Home
        </NavLink>
        <NavLink to="/all-books" className={({ isActive }) => getActiveClass(isActive)}>
          All Books
        </NavLink>

        {user && (
          <>
            <NavLink to="/add-book" className={({ isActive }) => getActiveClass(isActive)}>
              Add Books
            </NavLink>
            <NavLink to="/my-borrowed" className={({ isActive }) => getActiveClass(isActive)}>
              Borrowed Books
            </NavLink>
          </>
        )}
      </nav>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-blue-700"
              title={user.displayName}
            />
            <button
              onClick={logout}
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

