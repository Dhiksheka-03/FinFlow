import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="navbar">
      <input type="text" placeholder="🔍 Search..." />

      <div className="nav-right">
        <span>{today}</span>
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </div>
  );
}

export default Navbar;