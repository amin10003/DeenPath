import { useContext } from "react";
import { AppContext } from "@/context/AppContex";

function ThemeToggle() {

  const { state, dispatch } =
    useContext(AppContext);

  return (

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
  );
}

export default ThemeToggle;