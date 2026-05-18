import { AppContext } from "@/context/AppContex";
import React from "react";
import { useContext } from "react";


function Home() {
  const { state } = useContext(AppContext);
  return (
    <>
      <div className="bg-amber-200   min-h-screen flex flex-col justify-items-start items-center">
        <h1 className="text-3xl text-center font-bold mb-4">
          Deen Path Application
        </h1>
        <h2>Welcome {state.user?.displayName}</h2>
      </div>
    </>
  );
}

export default Home;
