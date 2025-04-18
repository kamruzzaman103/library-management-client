import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
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
      <h2 className="text-2xl mb-4 font-bold">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border" required />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 border" required />
        <p className="text-red-500">{error}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
      <button onClick={handleGoogle} className="mt-4 text-blue-600 underline">
        Login with Google
      </button>
      <p className="mt-2">
        New here? <Link to="/register" className="text-blue-500">Register</Link>
      </p>
    </div>
  );
};

export default Login;
