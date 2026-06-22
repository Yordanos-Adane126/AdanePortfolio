import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission action or API endpoint here
  };

  // References Array: Numbers formatted to trigger clean cross-device direct call actions
  const references = [
    {
      initial: "P",
      name: "Prof. Eneyew Adego",
      role: "Research & Community Service Vice President",
      org: "Bahir Dar University",
      address: "P.O.Box 79, Bahir Dar, Ethiopia",
      email: "enyewadgo@gmail.com",
      phone: "+251918765621" // Removed internal separator hyphens for instant link mapping
    },
    {
      initial: "D",
      name: "Dr. Asmare Dejene",
      role: "Associate Professor of Agricultural Entomology; General Director",
      org: "Amhara Region Agricultural Research Institute",
      address: "Bahir Dar, Ethiopia",
      email: "asmaredejene@gmail.com",
      phone: "+251910318104"
    },
    {
      initial: "M",
      name: "Mr. Nesibu Yasin",
      role: "Deputy Commissioner",
      org: "Ethiopian Disaster Risk Management Commission",
      address: "Addis Ababa, Ethiopia",
      email: "nesibuyasin2016@gmail.com",
      phone: "+251922949770" // Standardized to direct international dial routing 
    }
  ];

  return (
    <div className="cont-page-wrapper">
      <Navbar />

      {/* Hero Header Banner */}
      <header className="cont-hero-header">
        <div className="cont-container">
          <div className="cont-breadcrumb">
            Home &gt; <span className="cont-breadcrumb-active">Contact</span>
          </div>
          <h1 className="cont-main-title">Get In Touch</h1>
          <p className="cont-hero-subtitle">
            Feel free to reach out for collaboration, consultancy, training facilitation, or academic inquiries.
          </p>
        </div>
      </header>

      {/* Main Structural Grid Section */}
      <main className="cont-main-content">
        <div className="cont-container">
          <div className="cont-layout-grid">
            
            {/* Left Column: Form Section */}
            <div className="cont-form-card">
              <h2>Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="cont-input-group">
                  <label htmlFor="name">Your Name</label>
                  <div className="cont-input-wrapper">
                    <span className="cont-input-icon">👤</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="cont-input-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="cont-input-wrapper">
                    <span className="cont-input-icon">✉️</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="cont-input-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Collaboration Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="cont-input-group">
                  <label htmlFor="message">Message</label>
                  <div className="cont-input-wrapper cont-textarea-wrapper">
                    <span className="cont-input-icon cont-textarea-icon">💬</span>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="cont-submit-btn">
                  <span>🚀</span> Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Contact info & Quick Bio Profile Card */}
            <div className="cont-info-column">
              
              {/* Direct Info Channels Card - Clickable Link System Active */}
              <div className="cont-details-card">
                <h2>Contact Information</h2>
                <div className="cont-info-list">
                  <div className="cont-info-item">
                    <div className="cont-info-icon-badge">✉️</div>
                    <div>
                      <p className="cont-info-label">Email (Yahoo)</p>
                      <a href="mailto:adane126yem@yahoo.com" className="cont-info-value">
                        adane126yem@yahoo.com
                      </a>
                    </div>
                  </div>

                  <div className="cont-info-item">
                    <div className="cont-info-icon-badge">✉️</div>
                    <div>
                      <p className="cont-info-label">Email (Gmail)</p>
                      <a href="mailto:adane126@gmail.com" className="cont-info-value">
                        adane126@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="cont-info-item">
                    <div className="cont-info-icon-badge">📞</div>
                    <div>
                      <p className="cont-info-label">Cell Phone</p>
                      <a href="tel:+251918761349" className="cont-info-value">
                        +251-0918761349
                      </a>
                    </div>
                  </div>

                  <div className="cont-info-item">
                    <div className="cont-info-icon-badge">📞</div>
                    <div>
                      <p className="cont-info-label">Cell Phone 2</p>
                      <a href="tel:+251970774405" className="cont-info-value">
                        +251-0970774405
                      </a>
                    </div>
                  </div>

                  <div className="cont-info-item">
                    <div className="cont-info-icon-badge">📍</div>
                    <div>
                      <p className="cont-info-label">Mailing Address</p>
                      <p className="cont-info-value cont-text-dark">P.O.Box 5501, Bahir Dar, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Meta Profile Summary Box */}
              <div className="cont-profile-summary-box">
                <h3>Dr. Adane Tesfaye Lema (PhD)</h3>
                <p className="cont-profile-tagline">Assistant Professor in Agricultural Risk Management</p>
                <div className="cont-profile-divider"></div>
                <p className="cont-profile-desc">
                  Director, Institute of Disaster Risk Management and Food Security Studies (IDRMFSS) <br />
                  Bahir Dar University, College of Agriculture and Environmental Sciences <br />
                  P.O. Box 5501, Bahir Dar, Ethiopia
                </p>
              </div>

            </div>
          </div>

          {/* Bottom Row: Professional References Section with Interactive Anchors */}
          <section className="cont-references-section">
            <h2 className="cont-references-heading">Professional References</h2>
            <div className="cont-references-grid">
              {references.map((ref, idx) => (
                <div key={idx} className="cont-ref-card">
                  <div className="cont-ref-avatar">{ref.initial}</div>
                  <h3 className="cont-ref-name">{ref.name}</h3>
                  <p className="cont-ref-role">{ref.role}</p>
                  <p className="cont-ref-org">{ref.org}</p>
                  <p className="cont-ref-meta">{ref.address}</p>
                  
                  <div className="cont-ref-contact-links">
                    <p>
                      ✉️ <a href={`mailto:${ref.email}`} className="cont-reference-anchor">{ref.email}</a>
                    </p>
                    <p>
                      📞 <a href={`tel:${ref.phone}`} className="cont-reference-anchor">
                        {ref.phone.slice(0, 4) + "-" + ref.phone.slice(4)}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}