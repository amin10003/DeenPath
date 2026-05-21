import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "@/context/AppContex";

function Navbar() {

  const { state, dispatch } =
    useContext(AppContext);

  return (

    <nav className="bg-[#1e293b] flex justify-between p-4">

      {/* LEFT LINKS */}
      <div className="flex gap-5">

        <Link to="/" className="text-white">
          Home
        </Link>

        <Link to="/salah" className="text-white">
          Salah
        </Link>

        <Link to="/islam" className="text-white">
          Islam
        </Link>

        <Link to="/zakat" className="text-white">
          Zakat
        </Link>

        <Link to="/quran" className="text-white">
          Quran
        </Link>

      </div>

      {/* RIGHT CONTROLS */}
      <div className="flex gap-4 items-center">

        {/* THEME TOGGLE */}
        <button
          onClick={() =>
            dispatch({
              type: "TOGGLE_THEME",
            })
          }
          className="text-white"
        >

          {state.theme === "light"
            ? "🌙 Dark"
            : "☀️ Light"}

        </button>

      </div>

    </nav>
  );
}

export default Navbar;