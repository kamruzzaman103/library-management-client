import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home"; // Add this if you create a home page
import Navbar from "./components/Navbar";
import PrivateRoute from "./routes/PrivateRoute";
import AddBook from "./pages/AddBook";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
        path="/add-book"
        element={
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        }
      />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>

  );
};

export default App;
