import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/ui/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
  <>
      {/* Navbar appears on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>

      </>
    
  );
}

export default App;
