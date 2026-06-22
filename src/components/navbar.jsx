import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo-circle">📖</div>

        <div>
          <h2>Dr. Adane T. Lema</h2>
          <p>Asst. Professor | DRM Expert</p>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/skills">Skills</Link>
        </li>

        <li>
          <Link to="/education">Education</Link>
        </li>

        <li>
          <Link to="/experience">Experience</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}