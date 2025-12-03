import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/ateliers-pratique">Ateliers</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/participants">Participants</Link>
      <Link to="/communication">Communication</Link>
    </nav>
  );
}
