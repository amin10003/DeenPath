import { useEffect, useState } from "react";

import { getPrayerTimes } from "@/Services/Api";

function Salah() {
  const [prayerTimes, setPrayerTimes] =
    useState(null);

  useEffect(() => {
    const fetchPrayerTimes =
      async () => {
        const data =
          await getPrayerTimes("Nairobi");

        setPrayerTimes(data.data.timings);
      };

    fetchPrayerTimes();
  }, []);

  if (!prayerTimes) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
        <h1>Prayer Times</h1>
      <h2>Fajr: {prayerTimes.Fajr}</h2>

      <h2>Dhuhr: {prayerTimes.Dhuhr}</h2>

      <h2>Asr: {prayerTimes.Asr}</h2>
      
    </div>
  );
}

export default Salah;