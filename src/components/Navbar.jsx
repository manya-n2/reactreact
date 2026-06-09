import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/">All Notifications</Link>

      <Link to="/priority">
        Priority Inbox
      </Link>
    </div>
  );
}