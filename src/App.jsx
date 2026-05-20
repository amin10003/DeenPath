import { Routes, Route } from "react-router-dom";

import Navbar from "./components/ui/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Salah from "./pages/salah";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <>

      {/* Navbar appears on all pages */}
      <Navbar />

      <Routes>

        {/* ================================= */}
        {/* PUBLIC ROUTES */}
        {/* ================================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<SignUp />}
        />

        {/* ================================= */}
        {/* PROTECTED ROUTES */}
        {/* ================================= */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/salah"
          element={
            <ProtectedRoute>
              <Salah />
            </ProtectedRoute>
          }
        />

      </Routes>

    </>
  );
}

export default App;