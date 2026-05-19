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

  // Access global dispatch
  const { dispatch } = useContext(AppContext);

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
        password,
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
    try {
      // Create Firebase account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // Add display name
      await updateProfile(userCredential.user, {
        displayName: namee,
      });

      // Refresh current user
      await auth.currentUser.reload();

      // Save updated user globally
      dispatch({
        type: "SET_USER",
        payload: auth.currentUser,
      });

      // Success message
      setMessage("Account created successfully");

      // Navigate to home page
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
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
    <div className="flex flex-col justify-between items-center card shadow-md m-4 shadow-black w-112.5 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Signup Page</h2>

      {/* Signup Form */}
      <form
        onSubmit={handleSignup}
        className="w-full flex flex-col items-center"
      >
        {/* Name Input */}
        <input
          className="w-full p-2 my-2 border rounded"
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChanges}
        />

        {/* Email Input */}
        <input
          className="w-full p-2 my-2 border rounded"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChanges}
        />

        {/* Password Input */}
        <input
          className="w-full p-2 my-2 border rounded"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChanges}
        />

        {/* Create Account Button */}
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded mt-3"
        >
          Create Account
        </button>
      </form>

      {/* Google Signup Button */}
      <button
        onClick={handleGoogleSignup}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Continue With Google
      </button>

      {/* Success/Error Message */}
      <div className="mt-3">{message && <p>{message}</p>}</div>

      {/* Toggle to Login Page */}
      <p className="mt-4">
        Already have an account?
        <Link to="/login" className="text-blue-600 ml-2">
          Login
        </Link>
      </p>
    </div>
  );
}
