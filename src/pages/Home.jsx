import { useContext, useEffect, useState } from "react";

// Global context
import { AppContext } from "@/context/AppContex";

// API function
import { getPrayerTimes } from "@/services/api";

// Icons
import { CalendarDays, Clock3, MoonStar, BookOpen } from "lucide-react";
import NextPrayerCard from "@/components/NextPrayerCard";

function Home() {
  // Access logged in user
  const { state } = useContext(AppContext);

  // Store prayer data
  const [prayerData, setPrayerData] = useState(null);

  // =====================================
  // FETCH API DATA
  // =====================================
  useEffect(() => {
    const fetchPrayerData = async () => {
      try {
        // Fetch Nairobi prayer data
        const data = await getPrayerTimes("Nairobi");

        console.log(data);

        // Save full API data
        setPrayerData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPrayerData();
  }, []);

  // Loading state
  if (!prayerData) {
    return <h1 className="text-3xl p-6">Loading...</h1>;
  }

  // Prayer timings
  const timings = prayerData.timings;

  // Islamic date
  const hijriDate = prayerData.date.hijri;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Dashboard Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Assalamu Alaikum, {state.user?.displayName || "Muslim"}
        </h1>

        <p className="text-gray-600 mt-2">Welcome to your Islamic Dashboard</p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Next Prayer */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex items-center gap-3 mb-4">
            <Clock3 className="text-green-600" />

            <h2 className="text-xl font-semibold">Fajr</h2>
          </div>

          <p className="text-gray-600">{timings.Fajr}</p>
        </div>

        {/* Islamic Date */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex items-center gap-3 mb-4">
            <CalendarDays className="text-blue-600" />

            <h2 className="text-xl font-semibold">Islamic Date</h2>
          </div>

          <p className="text-gray-600">
            {hijriDate.day} {hijriDate.month.en} {hijriDate.year} AH
          </p>
        </div>

        {/* Quran Card */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-purple-600" />

            <h2 className="text-xl font-semibold">Quran Reading</h2>
          </div>

          <p className="text-gray-600">Continue Surah Al-Baqarah</p>
        </div>

        {/* Islamic Event */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex items-center gap-3 mb-4">
            <MoonStar className="text-yellow-600" />

            <h2 className="text-xl font-semibold">Maghrib</h2>
          </div>

          <p className="text-gray-600">{timings.Maghrib}</p>
        </div>
      </div>

      {/* Extra Prayer Section */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Today's Prayer Times</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <p>Fajr: {timings.Fajr}</p>

          <p>Dhuhr: {timings.Dhuhr}</p>

          <p>Asr: {timings.Asr}</p>

          <p>Maghrib: {timings.Maghrib}</p>

          <p>Isha: {timings.Isha}</p>
        </div>
      </div>

      <NextPrayerCard  timings={timings} />
    </div>
  );
}

export default Home;
