import { getPrayerTimes } from "@/services/api";

import { useEffect, useState } from "react";

function Salah() {

  // Store prayer times
  const [prayerTimes, setPrayerTimes] =
    useState(null);

  useEffect(() => {

    // Function to fetch prayer times
    const fetchPrayerTimes =
      async () => {

        try {

          // Get data from API
          const data =
            await getPrayerTimes("Nairobi");

          // Check returned data
          console.log(data);

          // Save timings only
          setPrayerTimes(
            data.data.timings
          );

        } catch (error) {

          console.log(error);
        }
      };

    // Call function
    fetchPrayerTimes();

  }, []);

  // Loading state
  if (!prayerTimes) {
    return <h1>Loading...</h1>;
  }

  return (

    <div>

      <h1>Prayer Times</h1>

      <h2>
        Fajr: {prayerTimes.Fajr}
      </h2>

      <h2>
        Dhuhr: {prayerTimes.Dhuhr}
      </h2>

      <h2>
        Asr: {prayerTimes.Asr}
      </h2>

      <h2>
        Maghrib: {prayerTimes.Maghrib}
      </h2>

      <h2>
        Isha: {prayerTimes.Isha}
      </h2>

    </div>
  );
}

export default Salah;