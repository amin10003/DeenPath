import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        background: "#1e293b",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>

      <Link to="/login" style={{ color: "white" }}>
        Login
      </Link>

      <Link to="/signup" style={{ color: "white" }}>
        Signup
      </Link>
    </nav>
  );
}

export default Navbar;