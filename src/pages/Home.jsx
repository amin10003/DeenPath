import { Link } from "react-router-dom";
import { useContext } from "react";

// Context
import { AppContext } from "@/context/AppContex";

// Icons
import {
  BookOpen,
  Clock3,
  HeartHandshake,
  MoonStar,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function Home() {
  const { state } = useContext(AppContext);

  const features = [
    {
      title: "Prayer Times",
      description:
        "Get accurate daily prayer times with upcoming prayer countdown.",
      icon: Clock3,
      color: "text-emerald-500",
    },

    {
      title: "Learn Islam",
      description:
        "Understand Islam, pillars of faith, worship, and Islamic guidance.",
      icon: BookOpen,
      color: "text-purple-500",
    },

    {
      title: "Daily Reminders",
      description:
        "Strengthen your faith with Quranic reminders and Islamic teachings.",
      icon: MoonStar,
      color: "text-amber-500",
    },

    {
      title: "Zakat & Worship",
      description:
        "Learn Islamic obligations including Zakat, Salah, and fasting.",
      icon: HeartHandshake,
      color: "text-blue-500",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        state.theme === "dark"
          ? "bg-zinc-950 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-600/20 to-teal-500/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 w-fit px-5 py-2 rounded-full mb-8">
              <Sparkles
                className="text-emerald-500"
                size={18}
              />

              <p className="text-sm">
                Your Complete Islamic Companion
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Strengthen Your
              <span className="block bg-linear-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Connection With Allah
              </span>
            </h1>

            <p
              className={`mt-8 text-xl leading-10 max-w-3xl ${
                state.theme === "dark"
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              An Islamic platform designed to help Muslims
              learn Islam, track prayer times, understand
              worship, and grow spiritually every day.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-5 mt-10">
              <Link
                to="/dashboard"
                className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300"
              >
                Open Dashboard

                <ArrowRight size={20} />
              </Link>

              <Link
                to="/dashboard"
                className={`px-8 py-4 rounded-2xl font-semibold border transition-all duration-300 ${
                  state.theme === "dark"
                    ? "border-slate-700 hover:bg-slate-900"
                    : "border-gray-300 hover:bg-white"
                }`}
              >
                Learn About Islam
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto p-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black">
            Everything You Need
          </h2>

          <p
            className={`mt-5 text-lg ${
              state.theme === "dark"
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Built to help Muslims learn, practice, and stay
            connected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  state.theme === "dark"
                    ? "bg-slate-900 border border-slate-800"
                    : "bg-white shadow-lg"
                }`}
              >
                <Icon
                  className={`${feature.color} mb-6`}
                  size={45}
                />

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p
                  className={`leading-8 ${
                    state.theme === "dark"
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;