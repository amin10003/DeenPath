import { useContext, useEffect, useState } from "react";

// Context
import { AppContext } from "@/context/AppContex";

// API
import { getPrayerTimes } from "@/services/api";

// Components
import NextPrayerCard from "@/components/NextPrayerCard";

// Icons
import {
  CalendarDays,
  Clock3,
  MoonStar,
  BookOpen,
  HeartHandshake,
  Sunrise,
  Sunset,
  Sparkles,
} from "lucide-react";

function Islam() {
  const { state } = useContext(AppContext);

  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await getPrayerTimes("Nairobi");

        setDashboardData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDashboardData();
  }, []);

  if (!dashboardData) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          state.theme === "dark"
            ? "bg-zinc-950 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        <h1 className="text-3xl font-bold animate-pulse">
          Loading Islamic Dashboard...
        </h1>
      </div>
    );
  }

  const timings = dashboardData.timings;

  const hijri = dashboardData.date.hijri;

  const gregorian = dashboardData.date.gregorian;

  const cards = [
    {
      title: "Fajr Prayer",
      value: timings.Fajr,
      icon: Clock3,
      color: "text-emerald-500",
    },

    {
      title: "Maghrib Prayer",
      value: timings.Maghrib,
      icon: Sunset,
      color: "text-orange-500",
    },

    {
      title: "Sunrise",
      value: timings.Sunrise,
      icon: Sunrise,
      color: "text-amber-500",
    },

    {
      title: "Islamic Date",
      value: `${hijri.day} ${hijri.month.en} ${hijri.year} AH`,
      icon: CalendarDays,
      color: "text-blue-500",
    },
  ];

  const prayers = [
    {
      name: "Fajr",
      time: timings.Fajr,
    },

    {
      name: "Dhuhr",
      time: timings.Dhuhr,
    },

    {
      name: "Asr",
      time: timings.Asr,
    },

    {
      name: "Maghrib",
      time: timings.Maghrib,
    },

    {
      name: "Isha",
      time: timings.Isha,
    },
  ];

  const pillars = [
    {
      title: "Shahadah",
      description:
        "Believing only Allah deserves worship and Muhammad ﷺ is His Messenger.",
    },

    {
      title: "Salah",
      description: "Performing the five daily prayers.",
    },

    {
      title: "Zakat",
      description: "Giving charity to the needy.",
    },

    {
      title: "Sawm",
      description: "Fasting during Ramadan.",
    },

    {
      title: "Hajj",
      description: "Pilgrimage to Makkah for those able.",
    },
  ];

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${
        state.theme === "dark"
          ? "bg-zinc-950 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[40px] bg-linear-to-r from-emerald-700 to-teal-700 p-10">
        <div className="absolute top-0 right-0 opacity-10">
          <MoonStar size={300} />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <Sparkles />

            <p>Islamic Dashboard</p>
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Assalamu Alaikum,
            <span className="block mt-3">
              {state.user?.displayName || "Muslim"}
            </span>
          </h1>

          <p className="mt-8 text-lg max-w-3xl leading-9 text-white/80">
            Strengthen your connection with Allah through prayer,
            Quran, Islamic reminders, and worship guidance.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <div className="bg-black/20 px-6 py-4 rounded-2xl">
              <p className="text-white/70 text-sm">
                Gregorian Date
              </p>

              <h3 className="text-xl font-bold mt-2">
                {gregorian.day} {gregorian.month.en}{" "}
                {gregorian.year}
              </h3>
            </div>

            <div className="bg-black/20 px-6 py-4 rounded-2xl">
              <p className="text-white/70 text-sm">
                Islamic Date
              </p>

              <h3 className="text-xl font-bold mt-2">
                {hijri.day} {hijri.month.en} {hijri.year} AH
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className={`rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                state.theme === "dark"
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white shadow-lg"
              }`}
            >
              <Icon
                className={`${card.color} mb-5`}
                size={45}
              />

              <h2 className="text-2xl font-bold mb-3">
                {card.title}
              </h2>

              <p
                className={`text-lg ${
                  state.theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                {card.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* NEXT PRAYER */}
      <div className="mt-10">
        <NextPrayerCard timings={timings} />
      </div>
    </div>
  );
}

export default Islam;