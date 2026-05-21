import { useContext } from "react";
import { AppContext } from "@/context/AppContex";

function PrayerCard({ prayerName, prayerTime }) {
  const { state } = useContext(AppContext);

  return (
    <div
      className={`p-5 rounded-xl transition-colors duration-200 ${
        state.theme === "dark"
          ? "bg-slate-900 border border-slate-800 text-white"
          : "bg-white shadow-md text-gray-900"
      }`}
    >
      {/* Prayer Name */}
      <h2 className="text-2xl font-bold">{prayerName}</h2>

      {/* Prayer Time */}
      <p
        className={`mt-3 text-lg ${
          state.theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {prayerTime}
      </p>
    </div>
  );
}

export default PrayerCard;
