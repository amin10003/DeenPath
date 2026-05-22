import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Salah from "./pages/salah";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";
import Islam from "./pages/islam";
import Zakat from "./pages/Zakat";
import { useContext } from "react";
import { AppContext } from "./context/AppContex";
import Quran from "./pages/Quran";
import Surah from "./pages/Surah";
import Dashboard from "/src/components/Dashboard.jsx"

function App() {
  const { state } = useContext(AppContext);

  return (
    <>
      <div
        className={
          state.theme === "dark"
            ? "bg-black text-white min-h-screen transition-all"
            : "bg-white text-black min-h-screen transition-all"
        }
      >
        {/* Navbar appears on all pages */}
        <ProtectedRoute>
          <Navbar />
        </ProtectedRoute>

        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/islam" element={<Islam />} />
          <Route path="/salah" element={<Salah />} />

          <Route
            path="/zakat"
            element={
              <ProtectedRoute>
                <Zakat />
              </ProtectedRoute>
            }
          />

          <Route path="/quran" element={<Quran />} />

          <Route path="/surah/:id" element={<Surah />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
