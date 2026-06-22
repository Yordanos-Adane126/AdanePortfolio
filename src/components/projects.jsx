import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EduSubNavbar from "../components/eduSubNavbar"; 

const ProjectsPage = () => {
  // Keeps active state highlighted correctly on the inner navigation subbar
  const [activeSubTab, setActiveSubTab] = useState('projects');

  // Exact Project Array Extracted From Images p22.png - p27.png
  const projectsData = [
    {
      title: "Ethiopian National Incident Management System (NIMS)",
      amount: "USD 5,000,000",
      duration: "October 2009 – January 2015",
      role: "Program Country Liaison & Co-Developer",
      description: "Developed and implemented Ethiopia's National Incident Management System through a capacity building partnership between the Government of the United States and the Government of Ethiopia. Enhanced Ethiopia's Disaster Risk Management coordination structures including establishment of Emergency Coordination Centers.",
      tags: ["USAID", "USFS", "Government of Ethiopia", "EDRMC"]
    },
    {
      title: "DRM Professionalization Young Leadership Project",
      amount: "USD 7,680,000",
      duration: "2022 – 2026",
      role: "Training & Supervision Coordinator",
      description: "Currently serving as Training and Supervision Coordinator for this major USAID-funded project aimed at professionalizing disaster risk management through structured fellowship programs and capacity building across Ethiopian universities and host organizations.",
      tags: ["USAID", "Bahir Dar University", "Multiple Ethiopian Universities"]
    },
    {
      title: "North–South–South Consortium for DRM Capacity Building",
      amount: "~EUR 200,000",
      duration: "June 2020 – 2023",
      role: "Project Developer & Lead",
      description: "Developed and implemented a consortium project to enhance DRM system capacity in Horn of Africa countries. The North-South-South model connected Netherlands (North) with Ethiopia, South Sudan, and Somaliland (South) to share expertise and build institutional capacity.",
      tags: ["Netherlands", "Ethiopia", "South Sudan", "Somaliland"]
    },
    {
      title: "Africa Uninet – Gender-Specific Climate Change Effects on Agroforestry",
      amount: "~EUR 25,000",
      duration: "June 2021 – December 2023",
      role: "Project Developer",
      description: "Developed and implemented a study project examining gender-specific climate change effects on agroforestry practices, with publication and knowledge-sharing outputs across African partner universities.",
      tags: ["Africa Uninet", "Bahir Dar University"]
    },
    {
      title: "Amhara & Afar DRM Strategy Development",
      amount: "Consultancy",
      duration: "April 2019 – July 2020",
      role: "Lead Consultant",
      description: "Developed comprehensive Disaster Risk Management Strategy and Implementation Guidelines for Amhara National Regional State (Apr 2020 – Jul 2020) and Afar National Regional State (Oct 2019 – Mar 2020), contributing to institutional strengthening of regional DRM systems.",
      tags: ["Amhara Region Government", "Afar Region Government"]
    },
    {
      title: "Bugna District Food Security Project",
      amount: "Plan-Ethiopia / AAU",
      duration: "May 2004 – March 2005",
      role: "Baseline Survey Lead",
      description: "Conducted baseline survey of Bugna District and prepared a comprehensive five-year food security project proposal in collaboration with Plan-Ethiopia and Addis Ababa University.",
      tags: ["Plan-Ethiopia", "Addis Ababa University"]
    },
    {
      title: "COVID-19 Prevention – ANRS Emergency Coordination",
      amount: "Government Initiative",
      duration: "March 2020 – Ongoing",
      role: "Technical Expert",
      description: "Involved and contributed to the Amhara National Regional State (ANRS) COVID-19 prevention task force and emergency coordination since the onset of the pandemic.",
      tags: ["Amhara Regional State Government", "Bahir Dar University"]
    }
  ];

  return (
    <div className="proj-page">
      <Navbar />

      {/* Main Hero Header Banner - Synced with Image p21 */}
      <section className="proj-page-hero">
        <div className="proj-page-container">
          <p className="proj-page-breadcrumb">Home &gt; Education</p>
          <h1>Education & Academic Record</h1>
          <p className="proj-page-hero-desc">
            Explore academic qualifications, professional experience, funded projects, and publications.
          </p>
        </div>
      </section>

      {/* Sub-Tab Navigation Bar Component */}
      <EduSubNavbar activeSubTab={activeSubTab} setActiveSubTab={setActiveSubTab} />

      {/* Main Content Area */}
      <main className="proj-page-content-wrapper">
        <div className="proj-page-container">
          
          <div className="proj-section-intro">
            <h2 className="proj-section-heading">Funded Projects & Development Innovations</h2>
          </div>

          <div className="proj-list-layout">
            {projectsData.map((project, idx) => (
              <div key={idx} className="proj-card">
                
                {/* Project Title */}
                <h3 className="proj-title-text">{project.title}</h3>
                
                {/* Meta details row: Funding Badge & Duration */}
                <div className="proj-meta-row">
                  <span className={`proj-amount-badge ${project.amount === 'Consultancy' || project.amount === 'Government Initiative' ? 'text-badge' : 'currency-badge'}`}>
                    {project.amount}
                  </span>
                  <span className="proj-time-text">{project.duration}</span>
                </div>

                {/* Assigned Professional Role */}
                <div className="proj-role-text">
                  <strong>Role:</strong> {project.role}
                </div>

                {/* Description Statement */}
                <p className="proj-description-text">{project.description}</p>

                {/* Bottom Tags Wrapper */}
                <div className="proj-tags-container">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="proj-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;