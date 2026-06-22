import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EduSubNavbar from "../components/eduSubNavbar"; // Uses your correct folder path tracking link

const EducationPage = () => {
  // Hardcoded selection keeping 'education' tab visually highlighted on this file route view
  const activeSubTab = 'education';

  // Academic Qualifications Data
  const qualifications = [
    {
      degree: "PhD Degree",
      subject: "Agricultural Entomology",
      institution: "Haramaya University",
      location: "Dire Dawa, Ethiopia",
      date: "January 2014",
      thesis: "Host Preference and Population Dynamics of Pea Aphid (Acyrthosiphon pisum) in Different Legume Species and Interaction with Grass Pea Genotypes"
    },
    {
      degree: "MSc Degree",
      subject: "Entomology – Agricultural Pest Management",
      institution: "Indian Agricultural Research Institute",
      location: "New Delhi, India",
      date: "September 2001",
      thesis: "Radiation, Food and Insecticide Effects on the Biological Attributes of Chresoperla carnia (Stephens) (Chresopidae: Neuroptera)"
    },
    {
      degree: "BSc Degree",
      subject: "Agriculture – Plant Science",
      institution: "Alemaya University",
      location: "Dire Dawa, Ethiopia",
      date: "July 1994",
      thesis: null
    }
  ];

  // Curricula Developed Data
  const curricula = [
    "Undergraduate Curriculum of Plant Science at Bahir Dar University",
    "Undergraduate Curriculum of Disaster Risk Management & Sustainable Development",
    "MSc. Curriculum of Plant Protection",
    "MSc. Curriculum of Agricultural Entomology",
    "MSc. Curriculum of Plant Pathology",
    "MSc. Curriculum of Plant Quarantine & Agricultural Pesticides",
    "MSc. Curriculum of Disaster Risk Management & Sustainable Development",
    "MSc. Curriculum of Disaster Risk Management & Food System Resilience",
    "MSc. Curriculum of Livelihood and Food Security",
    "PhD Curriculum of Plant Pathology",
    "PhD Curriculum of Entomology",
    "PhD Curriculum of Disaster Risk Science"
  ];

  return (
    <div className="edu-page">
      <Navbar />

      {/* Main Hero Header banner */}
      <section className="edu-page-hero">
        <div className="edu-page-container">
          <p className="edu-page-breadcrumb">Home &gt; Education</p>
          <h1>Education & Academic Record</h1>
          <div className="edu-page-hero-line"></div>
          <p className="edu-page-hero-desc">
            Explore academic qualifications, professional experience, funded projects, and publications.
          </p>
        </div>
      </section>

      {/* Extracted Secondary Inner Tab Navigation Bar Component */}
      <EduSubNavbar activeSubTab={activeSubTab} />

      {/* Primary Main Content View Layout */}
      <main className="edu-page-content-wrapper">
        <div className="edu-page-container">
          
          {/* Academic Qualifications List Segment */}
          <h2 className="edu-section-heading">Academic Qualifications</h2>
          <div className="edu-qualifications-list">
            {qualifications.map((item, idx) => (
              <div key={idx} className="edu-qual-card">
                <div className="edu-qual-card-top">
                  <div className="edu-qual-icon-title-group">
                    <div className="edu-qual-icon-box">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="edu-degree-badge">{item.degree}</span>
                      <h3 className="edu-subject-title">{item.subject}</h3>
                    </div>
                  </div>
                  <div className="edu-date-badge">{item.date}</div>
                </div>

                <div className="edu-qual-card-body">
                  <h4>{item.institution}</h4>
                  <p className="edu-location-text">{item.location}</p>
                  
                  {item.thesis && (
                    <div className="edu-thesis-box">
                      <h5>THESIS / DISSERTATION</h5>
                      <p>{item.thesis}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Curricula Developed Container Segment */}
          <div className="edu-curricula-section">
            <div className="edu-curricula-card">
              <div className="edu-curricula-header">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                  <line x1="12" y1="22" x2="12" y2="15.5"></line>
                  <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                  <polyline points="2 15.5 12 15.5 22 15.5"></polyline>
                </svg>
                <h2>Curricula Developed at Bahir Dar University</h2>
              </div>
              
              <div className="edu-curricula-grid">
                {curricula.map((course, idx) => (
                  <div key={idx} className="edu-curricula-item">
                    <span className="edu-curricula-bullet"></span>
                    <p>{course}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EducationPage;