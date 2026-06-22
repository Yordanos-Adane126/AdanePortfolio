import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Experience() {
  const trainingData = [
    { date: "Feb 17–21, 2026", title: "Emergency Management Systems / ENIMS Training", location: "Bahir Dar University, Bahir Dar" },
    { date: "Jan 1–5, 2026", title: "Ethiopian National Incident Management Systems (ENIMS) Training of Trainers", location: "Adama, Ethiopia" },
    { date: "Dec 17–19, 2025", title: "Livelihood and Livelihood Recovery for DRM Leaders", location: "Adama, Ethiopia" },
    { date: "Dec 02–05, 2025", title: "Early Warning, Preparedness and Response Training", location: "Lalibella, Ethiopia (Bugna Woreda & North Wollo)" },
    { date: "May–Jul 2024", title: "Model DRM Volunteers Group Establishment and Training", location: "Bahir Dar, Samara & Hawassa" },
    { date: "Jan 22–27, 2024", title: "Training Facilitation Skill Training for 11 Public Universities", location: "USAID Response Leadership, Ethiopia" },
    { date: "Jan 1–5, 2024", title: "DRM Fellows Host Organizations – Gender Responsive Budgeting", location: "Addis Ababa Ethiopia Hotel" },
    { date: "May 2023 & Feb 2024", title: "Cohort 1 & 2 Fellows Training – Basic & Advanced DRM Leadership", location: "Bahir Dar University" },
    { date: "Jan–Feb 2023", title: "USAID Response Leadership ToT on Basic & Advanced DRM Leadership", location: "Ethiopia" },
    { date: "Nov 25–29, 2019", title: "Urban Seasonal Livelihoods Programming Consultation Workshop", location: "Bahir Dar (BDU, Bahir Dar City & WFP)" },
    { date: "Oct 28 – Nov 1, 2019", title: "Integrated DRR Science and Action Training – Africa Risk Method School", location: "Addis Ababa (PERIPHERY U / BDU / UNESCO)" },
    { date: "Jun–Jul 2015 & May 2015", title: "Irrigation Agronomy, Soil Fertility and IPM Training", location: "Zewaye & Woldia (IWMI & ILRI – LIVES Project)" },
    { date: "Jan–Oct 2015", title: "East African DRM Course Facilitation – ICS, EOC, Disaster Communication, Preparedness Planning", location: "Nairobi, Kenya (IPSTC-HPSS) – Ethiopia, Uganda, Tanzania, Kenya, Rwanda" },
    { date: "Mar–Sept 2011", title: "Master Trainers Training on MACS, EOC, ICS and Related Systems", location: "Federal & Regional Levels, Ethiopia" },
    { date: "Jan 2012 – Dec 2014", title: "Cascade Training on MACS, EOC, ICS at Federal & All Regional Levels", location: "Addis Ababa, Oromia, Somali, Amhara, Tigray, Afar & SNNPR" },
    { date: "Jan–Mar 2008", title: "Participatory Rural Appraisal Training for Amhara Region Food Security Experts", location: "Amhara National Regional State (3 phases)" }
  ];

  const researchData = [
    "Senior Technical Expert at Ethiopian Agricultural Transformation Agency (ATA), Addis Ababa (Mar 2018 – Jan 2019)",
    "Senior Forest Entomologist & Forest Protection Research Coordinator/Director at EEFRI, Addis Ababa (Sep 2016 – Mar 2018)",
    "Developed various research program proposals on crop and forest pest survey & management (Jul 1995 – present)",
    "Conducted various crop and forest pest survey and management experiments across Amhara and other Ethiopian regions",
    "Led and participated in baseline surveys and seasonal assessments at district and national levels",
    "Participated in Farmers Field School approaches: planning, implementation, monitoring & evaluation in Eastern Amhara Region (South Wollo, North Wollo, Waghimra) in collaboration with Zonal Agriculture Office, Save the Children UK, and Sida-AMHARA Rural Development Program",
    "Coordinated crop research programs planned by Sirinka Agricultural Research Center",
    "Member of National Seed Releasing Committee for Oil Crops (Nov 2001 – Dec 2004)"
  ];

  const consultancyData = [
    { title: "ANRS COVID-19 Prevention Task Force", role: "Technical Expert / Coordinator", date: "Mar 2020 – Ongoing" },
    { title: "Amhara Region DRM Strategy & Implementation Guideline Development", role: "Lead Consultant", date: "Apr – Jul 2020" },
    { title: "Afar Region DRM Strategy & Implementation Guideline Development", role: "Lead Consultant", date: "Oct 2019 – Mar 2020" },
    { title: "NIMS Selected Components & Ethiopian DRM Coordination Structures Assessment and Mapping", role: "Assessment Lead", date: "Feb – Mar 2013" },
    { title: "International Experience: USA, Mozambique, Kenya, South Sudan, Somaliland", role: "DRM Technical Expert", date: "Ongoing" },
    { title: "Bugna District Baseline Survey & 5-Year Food Security Project", role: "Survey Lead (with Plan-Ethiopia & AAU)", date: "May 2004 – Mar 2005" }
  ];

  const internationalData = [
    { country: "USA", desc: "Professional experience exchange in disaster management (Feb & Aug 2010, Jul 2011 & 2012, Apr/May 2014). DART/RMT Training, Washington DC (2014)." },
    { country: "India", desc: "MSc Studies at Indian Agricultural Research Institute, New Delhi (1999–2001). Training on Utilization of Natural Products, Jamaica (2000)." },
    { country: "Kenya", desc: "East African DRM Course Facilitation at IPSTC-HPSS, Nairobi (Jan–Oct 2015). Agricultural Technology Assessment Tour to Kenya & Uganda (2003)." },
    { country: "South Sudan", desc: "North–South–South Consortium project on DRM Capacity Building (2020–2023)." },
    { country: "Somaliland", desc: "North–South–South Consortium project on DRM Capacity Building – Horn of Africa (2020–2023)." },
    { country: "Mozambique", desc: "DRM technical expertise and collaboration on disaster management initiatives." },
    { country: "Uganda", desc: "East African DRM capacity building collaboration. Agricultural technology assessment tour (2003)." },
    { country: "Jamaica", desc: "Training on Utilization of Natural Products in Developing Countries, University of West Indies, Kingston (Jul 2000)." }
  ];

  return (
    <div className="exp-page-wrapper">
      <Navbar />

      {/* Hero Header Section */}
      <header className="exp-hero-header">
        <div className="exp-container">
          <div className="exp-breadcrumb">
            Home &gt; <span className="exp-breadcrumb-active">Experience</span>
          </div>
          <h1 className="exp-main-title">Professional Experience</h1>
          <p className="exp-hero-subtitle">
            Over 20 years of impactful work in training facilitation, research, consultancy, and
            international development across Ethiopia and beyond.
          </p>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="exp-main-content">
        <div className="exp-container">
          
          {/* 1. Training Facilitation Section */}
          <section className="exp-section">
            <div className="exp-section-header">
              <div className="exp-section-icon">🎙️</div>
              <div>
                <h2 className="exp-section-title">Training Facilitation Experience</h2>
                <p className="exp-section-subtitle">Selected national and international training events facilitated</p>
              </div>
            </div>
            
            <div className="exp-card exp-card-list">
              {trainingData.map((item, idx) => (
                <div key={idx} className="exp-row-item">
                  <div className="exp-date-badge">{item.date}</div>
                  <div className="exp-row-details">
                    <h3>{item.title}</h3>
                    <p>🌐 {item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Research & Development Section */}
          <section className="exp-section">
            <div className="exp-section-header">
              <div className="exp-section-icon">💡</div>
              <div>
                <h2 className="exp-section-title">Research &amp; Development Interventions</h2>
                <p className="exp-section-subtitle">Key research experiences across agriculture and disaster risk management</p>
              </div>
            </div>

            <div className="exp-card exp-bullet-card">
              <ul className="exp-bullet-list">
                {researchData.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Consultancy Experience Section */}
          <section className="exp-section">
            <div className="exp-section-header">
              <div className="exp-section-icon">👥</div>
              <div>
                <h2 className="exp-section-title">Consultancy Experience</h2>
                <p className="exp-section-subtitle">Technical advisory and consultancy roles in plant protection and DRM</p>
              </div>
            </div>

            <div className="exp-consultancy-list">
              {consultancyData.map((item, idx) => (
                <div key={idx} className="exp-card exp-consultancy-item">
                  <div className="exp-consultancy-left">
                    <h3>{item.title}</h3>
                    <p className="exp-consultancy-role">{item.role}</p>
                  </div>
                  <div className="exp-consultancy-date">{item.date}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. International Experience Section */}
          <section className="exp-intl-box-section">
            <div className="exp-intl-header">
              <span>🌐</span> International Experience
            </div>
            <div className="exp-grid-container">
              {internationalData.map((item, idx) => (
                <div key={idx} className="exp-intl-card">
                  <div className="exp-intl-card-header">
                    <span className="exp-intl-icon-wrap">🌐</span>
                    <h3>{item.country}</h3>
                  </div>
                  <p>{item.desc}</p>
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