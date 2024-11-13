
import { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from '../assets/pulse-logo.svg'; // replace with your actual logo path

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo1} alt="Pulse Logo" />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="nav-links desktop-only">
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/customer-stories">Customer Stories</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/signup" className="sign-up-button">Sign Up</Link></li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger-icon mobile-only" onClick={toggleMenu}>
        ☰
      </div>

      {/* Mobile Dropdown Menu */}
      <ul className={`nav-links mobile-menu ${menuOpen ? "open" : ""}`}>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/customer-stories">Customer Stories</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li>
          <Link to="/signup" className="sign-up-button-full">
            Sign Up for a Free 30-Day Trial
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;




