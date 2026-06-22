import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 

function About() {
  return (
    <div className="about-page">
      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-breadcrumb">
            Home &nbsp; &gt; &nbsp; About
          </p>

          <h1>About Me</h1>

          <div className="about-line"></div>

          <p className="about-description">
            A dedicated academic, researcher, and development practitioner
            with over 20 years of transformative impact across Ethiopia and
            internationally.
          </p>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="about-summary-container">
        <div className="about-summary-card">

          <div className="about-section-header">
            <div className="about-icon-box">👤</div>

            <div>
              <h2>Summary Profile</h2>
              <p>Dr. Adane Tesfaye Lema (PhD)</p>
            </div>
          </div>

          <p>
            <strong>Dr. Adane Tesfaye Lema (PhD)</strong> is a highly
            accomplished Assistant Professor and expert with over
            <strong> 20 years of experience </strong>
            in Agricultural Pest Management and Disaster Risk Management (DRM).
            As the Founder of the Disaster Risk Management program and the
            College of Agriculture and Environmental Sciences at Bahir Dar
            University, Dr. Adane has made landmark contributions to disaster
            resilience in Ethiopia.
          </p>

          <p>
            He has a proven ability in teaching, curriculum development,
            research coordination, project management, training facilitation,
            and institutional leadership within academic and governmental
            settings.
          </p>

          <p>
            His international experience includes collaborative work in the
            USA, Mozambique, Kenya, South Sudan, Somaliland, Uganda, India,
            and Jamaica.
          </p>

          <div className="about-current-position">
            <h3>CURRENT POSITION</h3>

            <ul>
              <li>Assistant Professor in Agricultural Risk Management</li>
              <li>
                Director, Institute of Disaster Risk Management and Food
                Security Studies (IDRMFSS)
              </li>
              <li>
                Bahir Dar University, College of Agriculture and Environmental
                Sciences
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="about-details-section">

        <div className="about-details-card">
          <h2>Personal Details</h2>

          <div className="about-detail-row">
            <span>Full Name</span>
            <span>Adane Tesfaye Lema (PhD)</span>
          </div>

          <div className="about-detail-row">
            <span>Date of Birth</span>
            <span>12 October, 1972</span>
          </div>

          <div className="about-detail-row">
            <span>Sex</span>
            <span>Male</span>
          </div>

          <div className="about-detail-row">
            <span>Marital Status</span>
            <span>Married</span>
          </div>

          <div className="about-detail-row">
            <span>Nationality</span>
            <span>Ethiopian</span>
          </div>

          <div className="about-detail-row">
            <span>Country</span>
            <span>Ethiopia</span>
          </div>

          <div className="about-detail-row">
            <span>Languages</span>
            <span>Amharic & English</span>
          </div>

          <div className="about-detail-row">
            <span>Hobbies</span>
            <span>Reading, Visiting Historical Places</span>
          </div>
        </div>

        {/* Contact Information Cards - Fully Linked & Clickable */}
        <div className="about-details-card">
          <h2>Contact Information</h2>

          <div className="about-contact-item">
            <strong>Email (Yahoo)</strong>
            <p>
              <a href="mailto:adane126yem@yahoo.com" className="about-interactive-link">
                adane126yem@yahoo.com
              </a>
            </p>
          </div>

          <div className="about-contact-item">
            <strong>Email (Gmail)</strong>
            <p>
              <a href="mailto:adane126@gmail.com" className="about-interactive-link">
                adane126@gmail.com
              </a>
            </p>
          </div>

          <div className="about-contact-item">
            <strong>Cell Phone</strong>
            <p>
              <a href="tel:+251918761349" className="about-interactive-link">
                +251-0918761349
              </a>
            </p>
          </div>

          <div className="about-contact-item">
            <strong>Cell Phone 2</strong>
            <p>
              <a href="tel:+251970774405" className="about-interactive-link">
                +251-0970774405
              </a>
            </p>
          </div>

          <div className="about-contact-item">
            <strong>Address</strong>
            <p className="about-address-text">P.O.Box 5501, Bahir Dar, Ethiopia</p>
          </div>
        </div>

      </section>

      {/* ACHIEVEMENTS */}
      <section className="about-achievements">

        <div className="about-achievements-title">
          <h2>Key Achievements</h2>
        </div>

        <div className="about-achievements-grid">

          <div className="about-achievement-box">
            Founder of Disaster Risk Management program at Bahir Dar University
          </div>

          <div className="about-achievement-box">
            Founder of College of Agriculture and Environmental Sciences
          </div>

          <div className="about-achievement-box">
            Founder of Ethiopian National Incident Management Systems (ENIMS)
          </div>

          <div className="about-achievement-box">
            Led multi-million USD projects including $5M NIMS project and
            $7.68M USAID project
          </div>

          <div className="about-achievement-box">
            Supervised 30+ MSc students to successful graduation
          </div>

          <div className="about-achievement-box">
            Published 35+ peer-reviewed journal articles
          </div>

          <div className="about-achievement-box">
            Trained 500+ disaster risk management experts across Ethiopia and
            East Africa
          </div>

          <div className="about-achievement-box">
            Developed 12+ academic curricula at undergraduate and postgraduate
            levels
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;