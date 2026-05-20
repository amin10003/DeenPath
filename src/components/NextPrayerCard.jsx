import { useEffect, useState } from "react";

function NextPrayerCard({ timings }) {

  // Store next prayer
  const [nextPrayer, setNextPrayer] =
    useState("");

  // Store countdown
  const [countdown, setCountdown] =
    useState("");

  useEffect(() => {

    // Update every second
    const interval =
      setInterval(() => {

        // Current time
        const now = new Date();

        // Prayer list
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

        // Find next prayer
        for (let prayer of prayers) {

          const [hours, minutes] =
            prayer.time.split(":");

          const prayerTime =
            new Date();

          prayerTime.setHours(hours);
          prayerTime.setMinutes(minutes);
          prayerTime.setSeconds(0);

          // Future prayer found
          if (prayerTime > now) {

            // Save next prayer
            setNextPrayer(prayer.name);

            // Time difference
            const diff =
              prayerTime - now;

            // Convert to hours/minutes/seconds
            const hrs =
              Math.floor(
                diff / 1000 / 60 / 60
              );

            const mins =
              Math.floor(
                (diff / 1000 / 60) % 60
              );

            const secs =
              Math.floor(
                (diff / 1000) % 60
              );

            // Save countdown
            setCountdown(
              `${hrs}h ${mins}m ${secs}s`
            );

            break;
          }
        }

      }, 1000);

    // Cleanup
    return () =>
      clearInterval(interval);

  }, [timings]);

  return (

    <div className="bg-white rounded-xl shadow-md mt-10 p-5">

      <h2 className="text-2xl font-bold mb-4">

        Next Prayer

      </h2>

      <p className="text-lg">
        {nextPrayer}
      </p>

      <p className="text-gray-600 mt-2">
        Starts In:
      </p>

      <h3 className="text-2xl font-semibold mt-2">
        {countdown}
      </h3>

    </div>
  );
}

export default NextPrayerCard;