import { useState, useContext } from "react";

// Firebase authentication functions
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";

// Firebase configuration
import { auth, googleProvider } from "../firebase";

import { AppContext } from "@/context/AppContex";

import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [namee, setNamee] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Access global state and dispatch
  const { state, dispatch } = useContext(AppContext);

  // Used for page navigation
  const navigate = useNavigate();

  // HANDLE EMAIL/PASSWORD SIGNUP

  const handleSignup = async (e) => {
    // Prevent page refresh
    e.preventDefault();

    try {
      // Create account in Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Add user display name
      await updateProfile(userCredential.user, {
        displayName: namee,
      });

      // Save user globally
      dispatch({
        type: "SET_USER",
        payload: userCredential.user,
      });

      // Success message
      setMessage("Account created successfully");

      // Navigate to home page
      navigate("/");
    } catch (err) {
      // Show Firebase error
      setMessage(err.message);
    }
  };

  // HANDLE GOOGLE SIGNUP

   const handleGoogleSignup = async () => {
  };

  // HANDLE INPUT CHANGES

  const handleChanges = (e) => {
    // Get input name and value
    const { name, value } = e.target;

    if (name === "name") {
      setNamee(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen transition-colors duration-300 ${
        state.theme === "dark" ? "bg-zinc-950 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`flex flex-col justify-center items-center card shadow-md m-4 shadow-black w-112.5 p-4 rounded-lg ${
          state.theme === "dark" ? "bg-slate-900 border border-slate-800" : "bg-gray-400"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Signup Page</h2>

        {/* Signup Form */}
        <form
          onSubmit={handleSignup}
          className="w-full flex flex-col items-center"
        >
          <input
            className={`w-full p-2 my-2 border rounded ${
              state.theme === "dark" ? "bg-slate-800 text-white border-slate-700" : "bg-white text-black"
            }`}
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={handleChanges}
          />

          <input
            className={`w-full p-2 my-2 border rounded ${
              state.theme === "dark" ? "bg-slate-800 text-white border-slate-700" : "bg-white text-black"
            }`}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChanges}
          />

          <input
            className={`w-full p-2 my-2 border rounded ${
              state.theme === "dark" ? "bg-slate-800 text-white border-slate-700" : "bg-white text-black"
            }`}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChanges}
          />

          <button
            type="submit"
            className={`px-4 py-2 rounded mt-3 transition-colors duration-300 ${
              state.theme === "dark" ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-black text-white"
            }`}
          >
            Create Account
          </button>
        </form>

        <button
          onClick={handleGoogleSignup}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Continue With Google
        </button>

        <div className="mt-3">{message && <p>{message}</p>}</div>

        <p className="mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-600 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}