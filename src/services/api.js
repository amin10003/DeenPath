const QURAN_BASE_URL =
  "https://api.alquran.cloud/v1";

const HADITH_BASE_URL =
  "https://hadithapi.com/api";

export const getSurah = async (surahNumber) => {
  const response = await fetch(
    `${QURAN_BASE_URL}/surah/${surahNumber}`
  );

  const data = await response.json();

  console.log(data)
  return data;
};

export const getPrayerTimes = async (
  city
) => {
  const response = await fetch(
    `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Kenya`
  );

  const data = await response.json();

    console.log(data)


  return data;
};