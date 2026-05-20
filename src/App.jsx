import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Salah from "./pages/salah";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";
import Islam from "./pages/islam";

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

        
        <Route
          path="/islam"
          element={
            <ProtectedRoute>
              <Islam />
            </ProtectedRoute>
          }
        />

      </Routes>

    </>
  );
}

export default App;