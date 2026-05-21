const QURAN_BASE_URL =
  "https://api.alquran.cloud/v1";

const PRAYER_BASE_URL =
  "https://api.aladhan.com/v1";

// ===============================
// GET ALL SURAH LIST
// ===============================
export const getAllSurahs = async () => {

  const response =
    await fetch(`${QURAN_BASE_URL}/surah`);

  const data = await response.json();

  return data;
};

// ===============================
// GET SINGLE SURAH (Arabic + Translation)
// ===============================
export const getSurah = async (
  surahNumber
) => {

  // Fetch single surah
  const response = await fetch(
    `${QURAN_BASE_URL}/surah/${surahNumber}`
  );

  const data = await response.json();

  console.log("SURAH DATA:", data);

  return data;
};

// ===============================
// PRAYER TIMES
// ===============================
export const getPrayerTimes = async (city) => {

  const response =
    await fetch(
      `${PRAYER_BASE_URL}/timingsByCity?city=${city}&country=Kenya`
    );

  const data = await response.json();

  console.log("PRAYER DATA:", data);

  return data;
};