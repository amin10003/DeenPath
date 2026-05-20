import { useState, useContext } from "react";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../firebase";

import { AppContext } from "@/context/AppContex";

import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Access global dispatch
  const { dispatch } = useContext(AppContext);

  // Used to navigate user to another page
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Firebase login function
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // Save logged in user globally
      dispatch({
        type: "SET_USER",
        payload: userCredential.user,
      });

      // Success message
      setMessage("Login successful");

      // Navigate to home page
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Open Google popup
      const result = await signInWithPopup(auth, googleProvider);

      // Save Google user globally
      dispatch({
        type: "SET_USER",
        payload: result.user,
      });

      setMessage("Google login successful");

      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  // HANDLE INPUT CHANGES

  const handleChanges = (e) => {
    // Get input name and value
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-100">
    <div className="flex flex-col justify-center items-center card shadow-md m-4 shadow-black w-112.5 p-4 rounded-lg bg-amber-400">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="w-full flex flex-col items-center"
      >
        {/* Email Input */}
        <input
          placeholder="Email"
          name="email"
          className="w-full p-2 my-2 border rounded"
          type="email"
          onChange={handleChanges}
        />

        {/* Password Input */}
        <input
          className="w-full p-2 my-2 border rounded"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChanges}
        />

        {/* Login Button */}
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded mt-3"
        >
          Login
        </button>
      </form>

      {/* Google Authentication Button */}
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Continue With Google
      </button>

      {/* Success/Error Message */}
      <div className="mt-3">{message && <p>{message}</p>}</div>

      {/* Toggle to Signup Page */}
      <p className="mt-4">
        Don't have an account?
        <Link to="/signup" className="text-blue-600 ml-2">
          Signup
        </Link>
      </p>
    </div>
    </div>
  );
}
