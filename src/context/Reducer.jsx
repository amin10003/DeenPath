export function Reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case "SET_QURAN":
      return {
        ...state,
        quran: action.payload,
      };

    case "SET_HADITH":
      return {
        ...state,
        hadith: action.payload,
      };

    case "SET_PRAYER":
      return {
        ...state,
        prayerTimes: action.payload,
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };

    default:
      return state;
  }
}
