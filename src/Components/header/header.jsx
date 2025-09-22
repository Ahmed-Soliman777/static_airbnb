
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; 
import "./Header.css";
import logo from "../../assets/logo.svg"; 

function Header() {
  return (
    <header className="header">
      {/* Logo + Title */}
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Airbnb Logo" />
        </Link>
        <span className="logo-text">Airbnb Newsroom</span>
      </div>

      <div className="right-section">
        <nav className="nav">
          <Link to="/home">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/service">Services</Link>
        </nav>

        {/* Search Icon */}
        <FaSearch className="search-icon" />

        <div className="auth">
          <Link to="/login" className="login-btn">Log in</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
