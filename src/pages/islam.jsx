import { useContext, useEffect, useState } from "react";

// API function
import { getPrayerTimes } from "@/services/api";

// Icons
import { MoonStar, CalendarDays, Clock3, BookOpen } from "lucide-react";
import { AppContext } from "@/context/AppContex";

function Islam() {
  const { state } = useContext(AppContext);

  // Store API data
  const [islamData, setIslamData] = useState(null);

  // =====================================
  // FETCH ISLAMIC DATA
  // =====================================
  useEffect(() => {
    const fetchIslamicData = async () => {
      try {
        // Fetch prayer data
        const data = await getPrayerTimes("Nairobi");

        console.log(data);

        // Save API data
        setIslamData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchIslamicData();
  }, []);

  // Loading state
  if (!islamData) {
    return <h1 className="text-3xl p-6">Loading...</h1>;
  }

  // Hijri date
  const hijri = islamData.date.hijri;

  // Prayer timings
  const timings = islamData.timings;

  return (
    <div className="p-6 transition-colors duration-200">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Learn About Islam</h1>
        <p
          className={`mt-2 ${state.theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
        >
          Understand the foundations of Islam
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Hijri Date */}
        <div
          className={`p-6 rounded-xl ${state.theme === "dark" ? "bg-slate-900 border border-slate-800" : "bg-white shadow-md"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <CalendarDays className="text-blue-600" />
            <h2 className="text-2xl font-semibold">Hijri Date</h2>
          </div>
          <p
            className={`text-lg ${state.theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
          >
            {hijri.day} {hijri.month.en} {hijri.year} AH
          </p>
        </div>

        {/* Prayer Card */}
        <div
          className={`p-6 rounded-xl ${state.theme === "dark" ? "bg-slate-900 border border-slate-800" : "bg-white shadow-md"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Clock3 className="text-green-600" />
            <h2 className="text-2xl font-semibold">Fajr Prayer</h2>
          </div>
          <p
            className={`text-lg ${state.theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
          >
            {timings.Fajr}
          </p>
        </div>

        {/* Reminder Card */}
        <div
          className={`p-6 rounded-xl ${state.theme === "dark" ? "bg-slate-900 border border-slate-800" : "bg-white shadow-md"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <MoonStar className="text-yellow-600" />
            <h2 className="text-2xl font-semibold">Reminder</h2>
          </div>
          <p
            className={
              state.theme === "dark" ? "text-gray-200" : "text-gray-700"
            }
          >
            “Indeed, Allah is with the patient.”
          </p>
        </div>
      </div>

      {/* Text Blocks */}
      <div
        className={`mt-10 p-6 rounded-xl ${state.theme === "dark" ? "bg-slate-900 border border-slate-800" : "bg-white shadow-md"}`}
      >
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="text-purple-600" />
          <h2 className="text-3xl font-bold">What Is Islam?</h2>
        </div>
        <p
          className={`text-lg leading-8 ${state.theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          Islam is the religion revealed by Allah سبحانه وتعالى to Prophet
          Muhammad ﷺ.
        </p>
        <p
          className={`text-lg leading-8 mt-4 ${state.theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          The word “Islam” means submission to Allah alone with peace,
          obedience, and sincerity.
        </p>
        <p
          className={`text-lg leading-8 mt-4 ${state.theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          Islam teaches people how to worship Allah, build good character,
          establish justice, and live a meaningful life.
        </p>
      </div>

      {/* Who Can Become Muslim */}
      <div
        className={`mt-10 p-6 rounded-xl ${state.theme === "dark" ? "bg-slate-900 border border-slate-800" : "bg-white shadow-md"}`}
      >
        <h2 className="text-3xl font-bold mb-4">Who Can Become Muslim?</h2>
        <p
          className={`text-lg leading-8 ${state.theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          Any human being can become Muslim, regardless of nationality, race,
          language, or background.
        </p>
        <p
          className={`text-lg leading-8 mt-4 ${state.theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          A person enters Islam by sincerely believing that:
        </p>
        <ul
          className={`list-disc ml-8 mt-4 space-y-3 ${state.theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          <li>There is no god worthy of worship except Allah</li>
          <li>Muhammad ﷺ is the Messenger of Allah</li>
        </ul>
      </div>

      {/* Five Pillars */}
      <div
        className={`mt-10 p-6 rounded-xl ${state.theme === "dark" ? "bg-slate-900 border border-slate-800" : "bg-white shadow-md"}`}
      >
        <h2 className="text-3xl font-bold mb-6">The Five Pillars of Islam</h2>
        <div
          className={`space-y-4 text-lg ${state.theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          <div>
            <strong>1. Shahadah:</strong> Testifying that only Allah deserves
            worship and Muhammad ﷺ is His Messenger.
          </div>
          <div>
            <strong>2. Salah:</strong> Performing the five daily prayers.
          </div>
          <div>
            <strong>3. Zakat:</strong> Giving charity to the needy.
          </div>
          <div>
            <strong>4. Sawm:</strong> Fasting during Ramadan.
          </div>
          <div>
            <strong>5. Hajj:</strong> Pilgrimage to Makkah for those able.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Islam;
