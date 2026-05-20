import { useContext, useState } from "react";

import { signOut } from "firebase/auth";

import { auth } from "../firebase";

import { AppContext } from "@/context/AppContex";

// Navigation
import { useNavigate } from "react-router-dom";

function Logout() {
  const [message, setMessage] = useState("");
  // Access global dispatch
  const { dispatch } = useContext(AppContext);

  // Used for page navigation
  const navigate = useNavigate();

  // =================================
  // HANDLE LOGOUT
  // =================================
  const handleLogout = async () => {
    try {
      // Logout user from Firebase
      await signOut(auth);

      // Remove user from global state
      dispatch({
        type: "SET_USER",
        payload: null,
      });

      // Redirect to login page
      navigate("/login");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogout} className="text-white">
        Logout
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Logout;
