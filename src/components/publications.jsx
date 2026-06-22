import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EduSubNavbar from "../components/eduSubNavbar"; 

const PublicationsPage = () => {
  // Hardcoded key selection keeping 'publications' tab highlighted visually on this route
  const activeSubTab = 'publications';

  // Book Publications Data Array
  const books = [
    {
      year: "2023",
      role: "Co-Author (Lead: Adane Tesfaye Lema)",
      title: "TPLF's Virulent Hatred and its Genocide Crime against the Amhara People",
      publisher: "Forum for Higher Education in Amhara Region. 277pp.",
      hasLink: true
    },
    {
      year: "2017",
      role: "Author: Adane Tesfaye Lema",
      title: "Bionomics of Pea Aphid (Acyrthosiphon pisum harris) on Highland Legumes Grown in North Western Ethiopia",
      publisher: "LAP Lambert Academic Publishing. ISBN–10: 62022004819. 80pp.",
      hasLink: false
    },
    {
      year: "1998",
      role: "Contributor (Chapter author)",
      title: "Leaving Behind Disaster in Ethiopian Perspective",
      publisher: "IRRI Book Publication, 1998",
      hasLink: false
    }
  ];

  // Peer-Reviewed Journal Articles Data Array (Items 1 to 35 Complete)
  const journals = [
    {
      id: 1,
      authors: "Zemenu Alamirew et al. and Adane Tesfaye Lema.",
      year: "2026",
      title: "Addressing Agricultural Pesticide Residue Risks: Promoting Preharvest Interval Adherence Among Ethiopian Farmers for Public Health Protection.",
      journal: "Journal of Applied and Environmental Soil Science. John Wiley & Sons Ltd.",
      hasLink: true
    },
    {
      id: 2,
      authors: "Negesse Asnake Ayalew and Adane Tesfaye Lema.",
      year: "2025",
      title: "The Triple Nexus of Peace, Security and Disaster Risk Management Actors for Conflict Prevention: The Case of Ataye, North Shewa, Ethiopia.",
      journal: "Integrated Journal of Disaster Risk Management. 15(2)",
      hasLink: false
    },
    {
      id: 3,
      authors: "Lemat Teshome Ayele and Adane Tesfaye Lema.",
      year: "2025",
      title: "Management of Tomato Leaf Miner (Tuta absoluta) on Tomato through Integration of Botanical and Synthetic Insecticide in Fogera Irrigation Conditions, NW Ethiopia.",
      journal: "Journal of Agriculture and Horticulture Research. 8(1): 01-11",
      hasLink: true
    },
    {
      id: 4,
      authors: "Negesse Asnake Ayalew and Adane Tesfaye Lema.",
      year: "2025",
      title: "Conflict Risk Monitoring for Conflict Prevention in Ethiopia: The Case of Ataye Town, North Shewa, Amhara Region.",
      journal: "International Journal of Disaster Risk Management. 7(1): 177–202",
      hasLink: false
    },
    {
      id: 5,
      authors: "Agemasu Getu, Abaynew Jemal Jenber, Adane Tesfaye and Bewket Wubshet.",
      year: "2024",
      title: "Survey and Management of Fall Armyworm (Spodoptera frugiperda) on Maize (Zea mays L.), Ethiopia.",
      journal: "Entomology and Applied Science Letters. 11(1): 30-39",
      hasLink: true
    },
    {
      id: 6,
      authors: "Merkuz Abera, Bizuayehu Jemaneh and Adane Tesfaye.",
      year: "2024",
      title: "Management of White Mango Scale (Aulacaspis tubercularis) in Assosa District, Benishangul Gumuz Region, Western Ethiopia.",
      journal: "International Journal of Agricultural and Natural Sciences. 17(2): 197-215",
      hasLink: false
    },
    {
      id: 7,
      authors: "Melkamu Andargie, Merkuz Abera, Adane Tesfaye and Esuyawkal Demis.",
      year: "2024",
      title: "Occurrence, Distribution and Management Experiences of Rice (Oryza sativa L.) Major Diseases and Pests in Ethiopia: A Review.",
      journal: "Cogent Food & Agriculture. 10:1, 2300558",
      hasLink: true
    },
    {
      id: 8,
      authors: "Eneyew Azene Meharie, Mentesinot Azene Taye, Adane Tesfaye Lema and Melkamu Meseret Alemu.",
      year: "2023",
      title: "Analysis of Spatiotemporal Variability and Trends of Rainfall Among the Agro-Climatic Zone of Abiya Watershed, Northwest Ethiopia.",
      journal: "Research Square (Preprint). DOI: 10.21203/rs.3.rs-3279164/v1",
      hasLink: false
    },
    {
      id: 9,
      authors: "Eneyew Azene Meharie, Mentesinot Azene Taye, Melkamu Meseret Alemu and Adane Tesfaye Lema.",
      year: "2023",
      title: "Extreme Rainfall Indices and its Effect on Meher Season Crop Calendar: An Agro-Climatic Zone Based Study.",
      journal: "Advances in Modern Agriculture. 4(2):2697",
      hasLink: false
    },
    {
      id: 10,
      authors: "Etagegn Mulu, Abaynew Jemal Jenber, Adane Tesfaye and Besfat Belay.",
      year: "2023",
      title: "Integrated Management of Onion Thrips on Onion, Mecha District, Ethiopia.",
      journal: "World Journal of Environmental Biosciences. 12(1): 32-40",
      hasLink: false
    },
    {
      id: 11,
      authors: "Merkuz Abera, Bizuayehu Jemaneh and Adane Tesfaye.",
      year: "2023",
      title: "Factors Influencing White Mango Scale (Aulacaspis tubercularis) Infestation Status at Assosa and Bambasi Districts, Benishangul Gumuz Region, Western Ethiopia.",
      journal: "Agricultural Science Digest. 45(5): 681–687",
      hasLink: false
    },
    {
      id: 12,
      authors: "Abebe Yilma, Merkuz Abera Admassu and Adane Tesfaye Lema.",
      year: "2022",
      title: "Mycotoxin Contamination in Maize (Zea mays): Prevalence and Management Strategies in Ethiopia: A Review.",
      journal: "Journals of Plant Pathology Research. 4(1): 62-69",
      hasLink: false
    },
    {
      id: 13,
      authors: "Adane Tesfaye, Abaynew Jemal Jenber and Melesech Mintesnot.",
      year: "2021",
      title: "Survey of Storage Insect Pests and Management of Rice Weevil Using Botanicals on Sorghum at Jawi District, Northwestern Ethiopia.",
      journal: "Archives of Phytopathology & Plant Protection",
      hasLink: true
    },
    {
      id: 14,
      authors: "Gebremariam Asaye Emrie, Merkuz Abera Admassu and Adane Tesfaye Lema.",
      year: "2021",
      title: "The Assessment of Potato Late Blight Disease in Western Amhara Region, Ethiopia.",
      journal: "SSRN",
      hasLink: true
    },
    {
      id: 15,
      authors: "Merkuz Abera, Bizuayehu Jemaneh and Adane Tesfaye.",
      year: "2021",
      title: "Survey of White Mango Scale (Aulacaspis Tubercularis) Distribution on Mango Production at Assosa and Bambasi Districts, Benishangul Gumuz Region.",
      journal: "International Journal of Entomology Research. 6(3): 148-160",
      hasLink: false
    },
    {
      id: 16,
      authors: "Tigabu Redae Alie, Adane Tesfaye Lema and Seid Muhie Dawud.",
      year: "2020",
      title: "Infestation, Damage & Distribution of Blue Gum Chalcid on Eucalyptus camaldulensis Dehnh in Eastern Amhara, Ethiopia.",
      journal: "Abyssinia Journal of Science and Technology. 5(2):1-8",
      hasLink: false
    },
    {
      id: 17,
      authors: "Tigabu Redae Alie, Adane Tesfaye Lema and Seid Muhie Dawud.",
      year: "2020",
      title: "Management of Blue Gum Chalcid (Leptocybe invasa) on Different Species of Eucalyptus in Kalu District, Eastern Amhara, Ethiopia.",
      journal: "Ethiopian Journal of Science & Technology. 13(3): 199-217",
      hasLink: false
    },
    {
      id: 18,
      authors: "Gebremariam Assaye, Merkuz Abera and Adane Tesfaye.",
      year: "2020",
      title: "The Fungicides and Variety Integration Effect on Late Blight (Phytophthora infestans) of Potato in Western Amhara Region, Ethiopia.",
      journal: "International Journal of Sustainable Agricultural Research. 7(1): 15-29",
      hasLink: false
    },
    {
      id: 19,
      authors: "Tebkew Damte, Kemale Ali, Adane Tesfaye and Mekasha Chichaybelu.",
      year: "2018",
      title: "Progresses in Insect Pest Management Research in Highland Food Legumes of Ethiopia.",
      journal: "Ethiopian Journal of Crop Science. 6(3): 343–368",
      hasLink: false
    },
    {
      id: 20,
      authors: "Hailegebrial Knife and Adane Tesfaye.",
      year: "2018",
      title: "Yield Performance and Adoption of Released Sorghum Varieties in Ethiopia.",
      journal: "Edelweiss Applied Science and Technology. 2(1):46–55",
      hasLink: false
    },
    {
      id: 21,
      authors: "Adane Tesfaye, Melaku Wale and Ferdu Azerefegne.",
      year: "2015",
      title: "Dispersion Patterns and Sampling Plans for the Pea Aphid, Acyrthosiphon pisum (Harris), on Grass Pea.",
      journal: "International Journal of Pest Management",
      hasLink: false
    },
    {
      id: 22,
      authors: "Adane Tesfaye, Melaku Wale and Ferdu Azerefegne.",
      year: "2013",
      title: "Acyrthosiphon pisum (Harris) Feeding Preference and Performance on Cool-Season Food Legumes in Northwestern Ethiopia.",
      journal: "International Journal of Pest Management. 59(4):319–328",
      hasLink: false
    },
    {
      id: 23,
      authors: "Adane Tesfaye, Melaku Wale and Ferdu Azerefegne.",
      year: "2012",
      title: "Seasonal Dynamics of Pea Aphid, Acyrthosiphon pisum Harris and Reaction to the Performance of Grass Pea in Northwestern Ethiopia.",
      journal: "International Journal of Current Research. 4(88): 053–061",
      hasLink: false
    },
    {
      id: 24,
      authors: "Asmare Dejen and Adane Tesfaye.",
      year: "2009",
      title: "Push-pull Strategies for the Management of Stem Borer and Striga in Sorghum Based Farming System of Northeastern Ethiopia.",
      journal: "International Journal of Agriculture. 1(1): 31–36",
      hasLink: false
    },
    {
      id: 25,
      authors: "Adane Tesfaye, Asmare Dejen and Eshetu Belete.",
      year: "2006",
      title: "Evaluation of Neem (Azadirachta indica) Derivatives for Management of Sorghum Stem Borers.",
      journal: "Ethiopian Journal of Science and Technology. 3(2): 44-56",
      hasLink: false
    },
    {
      id: 26,
      authors: "Adane Tesfaye, Gautam R.D. and Besjewet P.",
      year: "2005",
      title: "Effects of Insecticides on the Biology of Chrysoperla carnea Stephens (Neuroptera: Chrysopidae).",
      journal: "Pest Management Journal of Ethiopia. 9:63–69",
      hasLink: false
    },
    {
      id: 27,
      authors: "Adane Tesfaye and Asmare Dejen.",
      year: "2005",
      title: "Use of Plant Extracts for Crop Pest Management in North Eastern Ethiopia, Wollo: Appraisal and Validation of Farmers' Experience.",
      journal: "Ethiopian Journal of Science and Technology. 3(1): 25–44",
      hasLink: false
    },
    {
      id: 28,
      authors: "Adane Tesfaye and Gautam R.D.",
      year: "2003",
      title: "Biology and Feeding Potential of Green Lacewing.",
      journal: "Pest Management Journal of Ethiopia. 7: 59–72",
      hasLink: false
    },
    {
      id: 29,
      authors: "Adane Tesfaye and Gautam R.D.",
      year: "2003",
      title: "Traditional Pest Management Practices and Lesser-Exploited Natural Products in Ethiopia and India: Appraisal and Revalidation.",
      journal: "Indian Journal of Traditional Knowledge. 2(2): 189–201",
      hasLink: false
    },
    {
      id: 30,
      authors: "Adane Tesfaye and Gautam R.D.",
      year: "2002",
      title: "Effect of Adult Food Supplements on Reproductive Attributes and Longevity of Chrysoperla carnea Stephens.",
      journal: "Ann. Pl. Protec. Sci.. 10(2): 198–201",
      hasLink: false
    },
    {
      id: 31,
      authors: "Adane Tesfaye and Gautam R.D.",
      year: "2002",
      title: "Biology and Feeding Potential of Green Lacewing, Chrysoperla carnea on Non-Rice Moth Prey.",
      journal: "Indian Journal of Entomology. 64(4): 457–464",
      hasLink: false
    },
    {
      id: 32,
      authors: "Adane Tesfaye, Gautam R.D. and Garg A.K.",
      year: "2001",
      title: "Effect of Gamma Radiation on Biological Attributes of Chrysoperla carnea Stephens (Neuroptera: Chrysopidae).",
      journal: "Journal of Nuclear Agriculture and Biology. 30(3–4): 181–185",
      hasLink: false
    },
    {
      id: 33,
      authors: "Gautam R.D. and Adane Tesfaye.",
      year: "2001",
      title: "Potential of Green Lacewing, Chrysoperla carnea (Stephens) in Crop Pest Management.",
      journal: "New Agriculturist. 13: 1–12",
      hasLink: false
    },
    {
      id: 34,
      authors: "Adane Tesfaye, Eshetu Belete and Getaw Tadesse.",
      year: "2000",
      title: "Participatory Analysis of Welo Bush Cricket (Decticoides brevinnes) Situation in Wollo.",
      journal: "Pest Management Journal of Ethiopia. 6(4): 26–31",
      hasLink: false
    },
    {
      id: 35,
      authors: "Girma Tesfahun, Wondimu Bayu and Adane Tesfaye.",
      year: "2000",
      title: "Indigenous Techniques of Crop Pest Control in Ethiopia.",
      journal: "Pest Management Journal of Ethiopia. 6(4): 62–70",
      hasLink: false
    }
  ];

  return (
    <div className="edu-page">
      <Navbar />

      {/* Hero Module (Kept uniform with Education page view) */}
      <section className="edu-page-hero">
        <div className="edu-page-container">
          <p className="edu-page-breadcrumb">Home &gt; <span>Education</span></p>
          <h1>Education & Academic Record</h1>
          <div className="edu-page-hero-line"></div>
          <p className="edu-page-hero-desc">
            Explore academic qualifications, professional experience, funded projects, and publications.
          </p>
        </div>
      </section>

      {/* Tab Controls Menu */}
      <EduSubNavbar activeSubTab={activeSubTab} />

      {/* Publications View Content Block */}
      <main className="edu-page-content-wrapper">
        <div className="edu-page-container">
          
          {/* Section Dynamic Summary Header Control Panel */}
          <div className="pub-header-wrapper">
            <h2 className="edu-section-heading" style={{ margin: 0 }}>Publications</h2>
            <div className="pub-counter-group">
              <div className="pub-counter-badge primary">35 Journal Articles</div>
              <div className="pub-counter-badge secondary">3 Books</div>
            </div>
          </div>

          {/* ==========================================================================
             BOOK PUBLICATIONS BLOCK SEGMENT (Reference p28_2.jpg & p29_2.png)
             ========================================================================== */}
          <h3 className="pub-section-title">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Book Publications
          </h3>

          <div className="pub-list-container">
            {books.map((book, index) => (
              <div key={index} className="pub-card text-card-layout">
                <div className="pub-card-content">
                  <div className="pub-meta-row">
                    <span className="pub-year-badge">{book.year}</span>
                    <span className="pub-authors">{book.role}</span>
                  </div>
                  <h4 className="pub-title">{book.title}</h4>
                  <p className="pub-journal-meta">{book.publisher}</p>
                </div>
                {book.hasLink && (
                  <button className="pub-action-btn" aria-label="Open Document link">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1.15em" width="1.15em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* ==========================================================================
             JOURNAL ARTICLES BLOCK SEGMENT (Reference p30_2.png to p40_2.png)
             ========================================================================== */}
          <h3 className="pub-section-title">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Peer-Reviewed Journal Articles (35)
          </h3>

          <div className="pub-list-container">
            {journals.map((item) => (
              <div key={item.id} className="pub-card indexed-card-layout">
                {/* Visual Number Indicator Matrix Column */}
                <div className="pub-index-box">{item.id}</div>
                
                <div className="pub-card-content">
                  <div className="pub-meta-row">
                    <span className="pub-authors">{item.authors}</span>
                    <span className="pub-year-badge-inline">{item.year}</span>
                  </div>
                  <h4 className="pub-title">{item.title}</h4>
                  <p className="pub-journal-meta">{item.journal}</p>
                  
                  {item.hasLink && (
                    <a href="#view" className="pub-inline-link">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      View Article
                    </a>
                  )}
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

export default PublicationsPage;