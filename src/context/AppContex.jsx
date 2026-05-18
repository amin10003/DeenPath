import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";

export const AppContext = createContext();

const initialState = {
  quran: [],
  hadith: [],
  prayerTimes: {},
  user: null,
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
