import { Link } from "react-router-dom";
import { useContext } from "react";

import { AppContext } from "@/context/AppContex";

function SurahCard({ surah }) {

  // Access global theme
  const { state } =
    useContext(AppContext);

  return (

    <Link to={`/surah/${surah.number}`}>

      <div
        className={`
          p-4 rounded-xl transition hover:shadow-lg

          ${
            state.theme === "dark"

              ? "bg-slate-900 border border-slate-800 text-white"

              : "bg-white shadow text-black"
          }
        `}
      >

        {/* Surah number */}
        <h2 className="text-xl font-bold">

          {surah.number}.
          {" "}
          {surah.englishName}

        </h2>

        {/* Meaning */}
        <p
          className={
            state.theme === "dark"
              ? "text-gray-300"
              : "text-gray-600"
          }
        >

          {surah.englishNameTranslation}

        </p>

        {/* Revelation type */}
        <p className="text-sm text-green-600 mt-2">

          {surah.revelationType}

        </p>

        {/* Ayah count */}
        <p
          className={
            state.theme === "dark"
              ? "text-gray-400"
              : "text-gray-500"
          }
        >

          {surah.numberOfAyahs} Ayahs

        </p>

      </div>

    </Link>
  );
}

export default SurahCard;