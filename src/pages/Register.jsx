import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogle = () => {
    googleSignIn().then(() => {
      navigate("/");
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl mb-4 font-bold">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border" required />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 border" required />
        <p className="text-red-500">{error}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
      </form>
      <button onClick={handleGoogle} className="mt-4 text-blue-600 underline">
        Register with Google
      </button>
      <p className="mt-2">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
};

export default Register;
