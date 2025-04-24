// import { useContext, useState } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import { useNavigate, Link } from "react-router-dom";

// const Register = () => {
//   const { createUser, googleSignIn } = useContext(AuthContext);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     createUser(email, password)
//       .then(() => {
//         navigate("/");
//       })
//       .catch((err) => {
//         setError(err.message);
//       });
//   };

//   const handleGoogle = () => {
//     googleSignIn().then(() => {
//       navigate("/");
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h2 className="text-2xl mb-4 font-bold">Register</h2>
//       <form onSubmit={handleRegister} className="space-y-4">
//         <input type="email" name="email" placeholder="Email" className="w-full p-2 border" required />
//         <input type="password" name="password" placeholder="Password" className="w-full p-2 border" required />
//         <p className="text-red-500">{error}</p>
//         <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
//       </form>
//       <button onClick={handleGoogle} className="mt-4 text-blue-600 underline">
//         Register with Google
//       </button>
//       <p className="mt-2">
//         Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;

import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify"; // Assuming you have react-toastify installed
import "react-toastify/dist/ReactToastify.css";
import emailIcone from '../assets/image/email.png';

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    // Password Validation (Uppercase, Lowercase, Minimum 6 characters)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
      toast.error("Password doesn't meet the criteria");
      return;
    }

    createUser(email, password)
      .then(() => {
        // Set the display name and photo URL after creating the user
        const user = { displayName: name, photoURL };
        // Optionally, update user details in your Firebase or Auth service
        toast.success("Registration successful!");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message); // Display error via toast
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successfully logged in with Google!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Google login failed: " + err.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-4xl mb-4 font-bold text-center">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4 mb-4">
        <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="url" name="photoURL" placeholder="Photo URL" className="w-full p-2 border rounded" />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" required />
        <p className="text-red-500">{error}</p>
        <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800  rounded-lg text-sm px-5 py-2.5 w-full font-bold">Register</button>
      </form>
      <button
        onClick={handleGoogle}
        className="w-full bg-gray-100 text-black p-2 rounded mb-2 flex items-center justify-center font-bold"
      >
        <img src={emailIcone} alt="" className='size-6 mr-2' />
        <span>Login with Google</span>
      </button>
      <p className="mt-2">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
};

export default Register;
