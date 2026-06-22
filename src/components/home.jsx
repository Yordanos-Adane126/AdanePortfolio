import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import contact from "../components/contact";
import adanePhoto from "../assets/adanePhoto.jpg";

export default function Home() {
  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="profile-image">
          <div className="circle">
            <img
              src={adanePhoto}
              alt="Dr. Adane Tesfaye Lema"
              className="profile-photo"
            />
          </div>

          <div className="phd-badge">PhD</div>
        </div>

        <div className="hero-content">
          <span className="tag">
            Assistant Professor & Agricultural Risk Management
          </span>

          <h1 className="hero-title">
            Dr Adane
            <span>Tesfaye Lema</span>
          </h1>

          <h3>
            Director, Institute of Disaster Risk Management &
            Food Security Studies
          </h3>

          <p>📍 Bahir Dar University, Bahir Dar, Ethiopia</p>

          <div className="hero-buttons">
            <Link to="/about">
              <button className="learn-btn">Learn More</button>
            </Link>

            <Link to="/contact">
              <button className="contact-btn">Contact Me</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat-card">
          <h2>20+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h2>35+</h2>
          <p>Journal Articles</p>
        </div>

        <div className="stat-card">
          <h2>30+</h2>
          <p>MSc Students Supervised</p>
        </div>

        <div className="stat-card">
          <h2>12+</h2>
          <p>Curricula Developed</p>
        </div>
      </section>

      {/* Expertise */}
      <section className="expertise">
        <h2>Areas of Expertise</h2>
        <div className="underline"></div>

        <p className="subtitle">
          Over two decades of experience spanning academia, research,
          leadership and international development.
        </p>

        <div className="cards">
          <div className="card">
            <div className="icon">
              <span className="icon-dot"></span>
            </div>
            <h3>Agricultural Risk Management</h3>
            <p>
              Expert in integrated pest management, crop protection, and
              agricultural risk strategies.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <span className="icon-dot"></span>
            </div>
            <h3>Disaster Risk Management</h3>
            <p>
              Founder of DRM program at Bahir Dar University and Ethiopian
              National Incident Management Systems.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <span className="icon-dot"></span>
            </div>
            <h3>Research & Academia</h3>
            <p>
              35+ peer-reviewed journal publications and extensive curriculum
              development across multiple programs.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <span className="icon-dot"></span>
            </div>
            <h3>Leadership & Projects</h3>
            <p>
              Led multi-million USD projects including a $7.68M USAID capacity
              building initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Contact - Fully Clickable & Click-to-Call Linked */}
      <section className="contact-section">
        <div className="contact-box">
          <h3>✉</h3>
          <p>Email</p>
          <a href="mailto:adane126yem@yahoo.com" className="contact-link">
            adane126yem@yahoo.com
          </a>
          <a href="mailto:adane126@gmail.com" className="contact-link secondary-email">
            adane126@gmail.com
          </a>
        </div>

        <div className="contact-box">
          <h3>☎</h3>
          <p>Phone</p>
          <a href="tel:+251918761349" className="contact-link">
            +251-918761349
          </a>
          <a href="tel:+251970774405" className="contact-link secondary-phone">
            +251-970774405
          </a>
        </div>

        <div className="contact-box">
          <h3>📍</h3>
          <p>Location</p>
          <strong className="location-text">P.O.Box 5501, Bahir Dar, Ethiopia</strong>
        </div>
      </section>

      <Footer />
    </div>
  );
}