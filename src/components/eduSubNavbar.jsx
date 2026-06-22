import { Link } from "react-router-dom";

const EduSubNavbar = ({ activeSubTab }) => {
  return (
    <nav className="edu-sub-navbar">
      <div className="edu-page-container edu-sub-nav-flex">

        <Link
          to="/education"
          className={`edu-sub-nav-btn ${
            activeSubTab === "education" ? "active-sub-tab" : ""
          }`}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
          </svg>
          Education
        </Link>

        <Link
          to="/projects"
          className={`edu-sub-nav-btn ${
            activeSubTab === "projects" ? "active-sub-tab" : ""
          }`}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          Projects
        </Link>

        <Link
          to="/publications"
          className={`edu-sub-nav-btn ${
            activeSubTab === "publications" ? "active-sub-tab" : ""
          }`}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          Publications
        </Link>

      </div>
    </nav>
  );
};

export default EduSubNavbar;