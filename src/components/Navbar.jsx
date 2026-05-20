import { Link } from "react-router-dom";

// Logout component
import Logout from "./Logout";

function Navbar() {
  return (
    <nav className="bg-[#1e293b] flex justify-between p-4">
      {/* Left side links */}
      <div className="flex gap-5">
        <Link to="/" className="text-white">
          Home
        </Link>

        <Link to="/salah" className="text-white">
          Salah
        </Link>
           <Link to="/islam" className="text-white">
          islam
        </Link>
      </div>

      {/* Right side logout */}
      <Logout />
    </nav>
  );
}

export default Navbar;
