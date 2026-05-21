import { getPrayerTimes } from "@/services/api";

import { useContext, useEffect, useState } from "react";

import { AppContext } from "@/context/AppContex";

import NextPrayerCard from "@/components/NextPrayerCard";

import PrayerCard from "@/components/PrayerCard";

function Salah() {
  const { state } = useContext(AppContext);

  // Store prayer times
  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    // Function to fetch prayer times
    const fetchPrayerTimes = async () => {
      try {
        // Get data from API
        const data = await getPrayerTimes("Nairobi");

        // Save timings only
        setPrayerTimes(data.data.timings);
      } catch (error) {
        console.log(error);
      }
    };

    // Call function
    fetchPrayerTimes();
  }, []);

  // Loading state
  if (!prayerTimes) {
    return (
      <h1
        className={`p-6 min-h-screen ${
          state.theme === "dark"
            ? "bg-slate-950 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        Loading Prayer Times...
      </h1>
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
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-6">Prayer Times</h1>

      {/* HERO SECTION */}
      <NextPrayerCard timings={prayerTimes} />

      {/* PRAYER CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <PrayerCard prayerName="Fajr" prayerTime={prayerTimes.Fajr} />

        <PrayerCard prayerName="Dhuhr" prayerTime={prayerTimes.Dhuhr} />

        <PrayerCard prayerName="Asr" prayerTime={prayerTimes.Asr} />

        <PrayerCard prayerName="Maghrib" prayerTime={prayerTimes.Maghrib} />

        <PrayerCard prayerName="Isha" prayerTime={prayerTimes.Isha} />
      </div>
    </div>
  );
}

export default Salah;
