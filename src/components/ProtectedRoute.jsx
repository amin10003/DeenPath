import { useContext } from "react";

import { Navigate } from "react-router-dom";

// Global context
import { AppContext } from "@/context/AppContex";

function ProtectedRoute({ children }) {

  // Access global state
  const { state } =
    useContext(AppContext);

  // Get logged in user
  const user = state.user;

  // If no user exists
  // redirect to login page
  if (!user) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // Otherwise show protected page
  return children;
}

export default ProtectedRoute;