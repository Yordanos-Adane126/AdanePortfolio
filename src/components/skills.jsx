import Navbar from "../components/Navbar";
import Footer from "../components/Footer";  // Adjusted based on your mentioned path

const SkillsPage = () => {
  // Core Competencies Data Structure
  const competencies = [
    {
      id: "comp-tech",
      title: "Computer & Technical Skills",
      icon: (
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      tags: [
        "MS-DOS & Windows 95+", "MS Word 2000+", "MS Excel", 
        "MS Access", "MS PowerPoint", "MS STATC", 
        "SPSS (Statistical Package)", "SAS (Statistical Analysis)", "R Programming (Statistical)"
      ]
    },
    {
      id: "res-anal",
      title: "Research & Analytical Skills",
      icon: (
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
      tags: [
        "Research Proposal Writing", "Scientific Paper Writing", "Report Writing", 
        "Participatory Rural Appraisal (PRA) Tools", "Farmer Field School Approaches", 
        "Baseline Survey & Assessment", "Household Economy Analytical Framework", 
        "Seasonal Assessment Tools", "Systemic Review & Meta-Analysis", "Mixed Model Analysis (SAS & R)"
      ]
    },
    {
      id: "train-facil",
      title: "Training & Facilitation Skills",
      icon: (
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      tags: [
        "Adult Learning Principles", "Both Formal and Informal Training", "Module & Curriculum Development", 
        "Participatory Training Materials Development (Write Shop)", "Multiagency Coordination Facilitation", 
        "Exercise Design, Delivery & Evaluation", "Training of Trainers (ToT) Facilitation", 
        "Community Based DRM Tools", "Disaster Communication & Warning"
      ]
    },
    {
      id: "mgmt-lead",
      title: "Management & Leadership Skills",
      icon: (
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      tags: [
        "Strategic Project Planning & Management", "Participatory Planning, Monitoring & Evaluation", 
        "Teamwork & Leadership", "Human Resource Management", "Budget Management", 
        "Partnership & Network Management", "Institutional Leadership", 
        "Annual & Biannual Report Preparation", "Second Standard Driving License"
      ]
    }
  ];

  // DRM Modules Developed Data Structure
  const drmModules = [
    "Local Level Model DRM Volunteers Group Training", "Basic Disaster Risk Management",
    "Advanced DRM Leadership", "Gender Responsive Budgeting",
    "Multiagency Coordination Systems", "Emergency Coordination Centers (EOC)",
    "Incident Command Systems (ICS)", "All Hazard Incident Management Team",
    "Disaster Preparedness & Response Planning", "Disaster Communication & Early Warning",
    "Table Top Exercise Design, Development, Delivery & Evaluation", "PRA Techniques for Hazard, Vulnerability & Risk Assessment",
    "Forest Insect Pest Monitoring & Management in Ethiopia", "Horticultural Crops Insect Pest Monitoring & Management",
    "Community Disaster Risk Management Practice in Ethiopia", "Natural Hazards",
    "Anthropogenic Hazards", "Principles of Early Warning Systems & Information Communication"
  ];

  // Short-Term Trainings Attended Data Structure
  const shortTermTrainings = [
    { year: 2023, title: "Organizational Capacity Assessment Tools Training", provider: "USAID / Headlight Consulting, Addis Ababa" },
    { year: 2022, title: "Systemic Review & Meta-Analysis Training", provider: "Bahir Dar University / Africa Uninet" },
    { year: 2019, title: "Leadership & Change Management ToT", provider: "Bahir Dar University, Dangila" },
    { year: 2016, title: "Mixed Model Using SAS & R", provider: "Addis Ababa University, Statistics Dept." },
    { year: 2014, title: "DART/RMT Training Course", provider: "OFDA, Washington DC, USA" },
    { year: 2012, title: "ICS Planning Processes", provider: "MOA–DRMFSS, USAID & USFS, Addis Ababa" },
    { year: 2012, title: "Exercise Designing & Course Delivery", provider: "MOA–DRMFSS, USAID & USFS, Addis Ababa" },
    { year: 2012, title: "Comprehensive Emergency Preparedness & Response Planning", provider: "MOA–DRMFSS, USAID & USFS" },
    { year: 2012, title: "All Hazard Incident Management Team", provider: "MOA–DRMFSS, USAID & USFS" },
    { year: 2011, title: "Multiagency Coordination Facilitation Guide", provider: "MOA–DRMFSS, USAID & USFS" },
    { year: 2011, title: "Master Trainers of Training – MACS, EOC, ICS", provider: "MOA–DRMFSS, USAID & USFS" },
    { year: 2009, title: "Household Economy Approach & Seasonal Assessment", provider: "MOA–DRMFSS, USAID & LIU" },
    { year: 2006, title: "Community Based DRM Trainer of Trainers", provider: "IIRR & Save the Children USA, Hawassa" },
    { year: 2004, title: "Training Module Development ToT", provider: "Amhara BOA, ARARI & USAID, Adet" },
    { year: 2003, title: "Strategic Planning & Management", provider: "ARARI & Ethiopian Management Institute, Bahir Dar" },
    { year: 2003, title: "Agricultural Technology Assessment Tour", provider: "ARARI / RELMA / ICRAF – Kenya & Uganda" },
    { year: 2000, title: "Utilization of Natural Products in Developing Countries", provider: "University of West Indies, Kingston, Jamaica" },
    { year: 1999, title: "ToT – Farmer Participatory IPM / Farmers Field School", provider: "Save the Children UK / Amhara BOA / CABI" }
  ];

  return (
    <div className="skills-page">
      <Navbar />

      {/* Hero Section */}
      <section className="skills-page-hero">
        <div className="skills-page-hero-container">
          <p className="skills-page-breadcrumb">Home &gt; Skills</p>
          <h1>Skills & Expertise</h1>
          <div className="skills-page-hero-line"></div>
          <p className="skills-page-hero-desc">
            Twenty years of multidisciplinary training, practice, and leadership have produced a comprehensive and evolving skill set.
          </p>
        </div>
      </section>

      {/* Core Competencies Container Grid */}
      <section className="skills-page-competencies">
        <div className="skills-page-section-wrapper">
          <h2 className="skills-page-section-title">Core Competencies</h2>
          <div className="skills-page-comp-grid">
            {competencies.map((comp) => (
              <div key={comp.id} className="skills-page-comp-card">
                <div className="skills-page-comp-header">
                  <div className={`skills-page-icon-box ${comp.id}`}>
                    {comp.icon}
                  </div>
                  <h3>{comp.title}</h3>
                </div>
                <div className="skills-page-tag-container">
                  {comp.tags.map((tag, idx) => (
                    <span key={idx} className="skills-page-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRM Training Modules Developed Section */}
      <section className="skills-page-drm-modules">
        <div className="skills-page-section-wrapper">
          <div className="drm-modules-container-card">
            <h2>DRM Training Modules Developed</h2>
            <p className="drm-modules-subtitle">
              Practical training resources created for disaster risk management practitioners across Ethiopia and East Africa.
            </p>
            <div className="drm-modules-grid">
              {drmModules.map((module, idx) => (
                <div key={idx} className="drm-module-item">
                  <span className="drm-module-bullet"></span>
                  <p>{module}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Short-Term Trainings Attended Section */}
      <section className="skills-page-trainings">
        <div className="skills-page-section-wrapper">
          <h2 className="skills-page-section-title">Short-Term Trainings Attended</h2>
          <div className="trainings-timeline-container">
            {shortTermTrainings.map((item, idx) => (
              <div key={idx} className="training-timeline-row">
                <div className="training-year-badge">{item.year}</div>
                <div className="training-info-block">
                  <h3>{item.title}</h3>
                  <p>{item.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SkillsPage;