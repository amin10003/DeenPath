import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSurah } from "../services/api";
import { AppContext } from "@/context/AppContex";

function Surah() {
  const { id } = useParams();

  // Global theme
  const { state } = useContext(AppContext);

  // Store surah
  const [surah, setSurah] = useState(null);

  // Loading state
  const [loading, setLoading] = useState(true);

  // AUDIO STATE
  const [audio, setAudio] = useState(null);

  // =========================
  // FETCH SURAH
  // =========================
  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await getSurah(id);

        setSurah(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchSurah();
  }, [id]);

  // =========================
  // PLAY SURAH AUDIO
  // =========================
  const playSurahAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    const newAudio = new Audio(
      `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${id}.mp3`,
    );

    newAudio.play();
    setAudio(newAudio);
  };

  // =========================
  // STOP AUDIO
  // =========================
  const stopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  // =========================
  // LOADING UI
  // =========================
  if (loading) {
    return (
      <div
        className={`min-h-screen p-6 ${
          state.theme === "dark"
            ? "bg-slate-950 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        <h1 className="text-2xl font-bold">Loading Surah...</h1>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-200 ${
        state.theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* Surah Title */}
      <h1 className="text-4xl font-bold mb-4">{surah?.englishName}</h1>

      {/* AUDIO CONTROLS */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={playSurahAudio}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          ▶ Play Surah
        </button>

        <button
          onClick={stopAudio}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          ⏹ Stop
        </button>
      </div>

      {/* AYAH LIST */}
      <div className="space-y-6">
        {surah?.ayahs?.map((ayah) => (
          <div
            key={ayah.number}
            className={`p-5 rounded-xl ${
              state.theme === "dark"
                ? "bg-slate-900 border border-slate-800"
                : "bg-white shadow"
            }`}
          >
            {/* Arabic Text */}
            <p className="text-3xl text-right leading-loose">{ayah.text}</p>

            {/* Ayah Number */}
            <p
              className={`text-sm mt-4 ${
                state.theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Ayah {ayah.numberInSurah}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Surah;
