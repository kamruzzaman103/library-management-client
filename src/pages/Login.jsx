import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import emailIcone from '../assets/image/email.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <h2 className="text-4xl mb-4 font-bold text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" required />
        <p className="text-red-500">{error}</p>
        <button type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                focus:ring-green-200 dark:focus:ring-green-800  rounded-lg text-sm px-5 py-2.5 w-full font-bold">Login</button>
      </form>
      {/* <button onClick={handleGoogle} className="mt-4 text-blue-600 underline">
        Login with Google
      </button>
      <p className="mt-2">
        New here? <Link to="/register" className="text-blue-500">Register</Link>
      </p> */}
      <div className="mt-4">
        <button
          onClick={handleGoogle}
          className="w-full bg-gray-100 text-black p-2 rounded mb-2 flex items-center justify-center font-bold"
        >
          <img src={emailIcone} alt="" className='size-6 mr-2' />
          <span>Login with Google</span>
        </button>
        <p className="text-center my-2">
          <Link to={`/forgot-password?email=${encodeURIComponent(email)}`} className="text-blue-600">
            Forgot Password?
          </Link>
        </p>
        <p>
          Don't have an account? <Link to="/register" className='text-green-600'>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
