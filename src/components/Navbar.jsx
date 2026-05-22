import { Link } from "react-router-dom";
import { useContext } from "react";

// Context
import { AppContext } from "@/context/AppContex";

// Firebase Auth
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

function Navbar() {
  const { state, dispatch } =
    useContext(AppContext);

  // =====================================
  // LOGOUT FUNCTION
  // =====================================
  const handleLogout = async () => {
    try {
      await signOut(auth);

      dispatch({
        type: "SET_USER",
        payload: null,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-[#1e293b] flex justify-between items-center p-4">
      {/* ===================================== */}
      {/* LEFT LINKS */}
      {/* ===================================== */}
      <div className="flex gap-5">
        <Link
          to="/"
          className="text-white hover:text-emerald-400 transition"
        >
          Home
        </Link>

        <Link
          to="/salah"
          className="text-white hover:text-emerald-400 transition"
        >
          Salah
        </Link>

        <Link
          to="/islam"
          className="text-white hover:text-emerald-400 transition"
        >
          Islam
        </Link>

        <Link
          to="/zakat"
          className="text-white hover:text-emerald-400 transition"
        >
          Zakat
        </Link>

        <Link
          to="/quran"
          className="text-white hover:text-emerald-400 transition"
        >
          Quran
        </Link>
      </div>

      {/* ===================================== */}
      {/* RIGHT CONTROLS */}
      {/* ===================================== */}
      <div className="flex gap-4 items-center">
        {/* THEME TOGGLE */}
        <button
          onClick={() =>
            dispatch({
              type: "TOGGLE_THEME",
            })
          }
          className="text-white bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 transition"
        >
          {state.theme === "light"
            ? "🌙 Dark"
            : "☀️ Light"}
        </button>

        {/* AUTH TOGGLE */}
        {state.user ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;