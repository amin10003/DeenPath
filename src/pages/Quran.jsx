import { useEffect, useState, useContext } from "react";

import { getAllSurahs } from "../services/api";

import SurahCard from "../components/SurahCard";

import SearchBar from "@/components/SearchBar";

import { AppContext } from "@/context/AppContex";

function Quran() {
  // Global state
  const { state } = useContext(AppContext);

  // Store surahs
  const [surahs, setSurahs] = useState([]);

  // Search input
  const [search, setSearch] = useState("");

  // Loading state
  const [loading, setLoading] = useState(true);

  // ===========================
  // FETCH ALL SURAHS
  // ===========================
  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const data = await getAllSurahs();

        // Save surahs
        setSurahs(data.data);

        setLoading(false);
      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  // ===========================
  // FILTER SEARCH
  // ===========================
  const filteredSurahs = surahs.filter((surah) =>
    surah.englishName.toLowerCase().includes(search.toLowerCase()),
  );

  // ===========================
  // LOADING UI
  // ===========================
  if (loading) {
    return (
      <div
        className={`
          min-h-screen p-6

          ${
            state.theme === "dark"
              ? "bg-slate-950 text-white"
              : "bg-gray-100 text-black"
          }
        `}
      >
        <h1 className="text-2xl font-bold">Loading Quran...</h1>
      </div>
    );
  }

  return (
    <div
      className={`
        min-h-screen p-6
        transition-colors duration-200

        ${
          state.theme === "dark"
            ? "bg-slate-950 text-white"
            : "bg-gray-100 text-black"
        }
      `}
    >
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-6">Holy Quran</h1>

      {/* SEARCH BAR */}
      <div className="mb-6">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {/* SURAH GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
        "
      >
        {filteredSurahs.map((surah) => (
          <SurahCard key={surah.number} surah={surah} />
        ))}
      </div>
    </div>
  );
}

export default Quran;
