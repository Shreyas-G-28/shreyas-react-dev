import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Youtube Clone",
      description:
        "Leveraged React Hooks, Redux, JavaScript, and Tailwind CSS, boosting development efficiency by 40%. Built a high-performance search with debouncing and caching, reducing latency. Achieved 95% test coverage using Jest for unit and integration testing. Designed an nth-level nested comment system and infinite scroll, increasing user engagement by 30%.",
      link: "https://youtube-clone-g1ymk7j79-shreyas-acharyas-projects-4983bbe8.vercel.app/",
    },
    {
      title: "News App: NewSphere​",
      description:
        "Developed a React.js application with Tailwind CSS, enabling users to search and filter articles by date, category, and source. Optimized performance with lazy loading, pagination, and debounce-based real-time search. Integrated third-party REST APIs for up-to-date news and ensured mobile responsiveness for seamless access across devices.",
      link: "https://news-app-iota-self.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2>Career Journey</h2>
        <div className="experience-item">
          <h3>Niveus Solutions Pvt. Ltd, Udupi</h3>
          <p>
            <strong>Cloud Associate</strong>
          </p>
          <p>Jan 2022 - Present</p>

          {/* Customer Service Request */}
          <div className="experience-details">
            <h4>
              Customer Service Request – Banking Web Application (2 Years 4
              Months)
            </h4>
            <ul>
              <li>
                Developed a comprehensive service request system for a banking
                application, enabling customers to raise service requests, track
                their status, and communicate with support teams.
              </li>
              <li>
                Built new document upgrade components, improving document
                submission and verification processes.
              </li>
              <li>
                Optimized performance and API handling, reducing server response
                time by 40% and enhancing user experience.
              </li>
              <li>
                Ensured seamless UI/UX flow, improving customer satisfaction and
                retention rates.
              </li>
            </ul>
          </div>

          {/* Money to World */}
          <div className="experience-details">
            <h4>Money to World – Banking Application (6 months)</h4>
            <ul>
              <li>
                Designed and developed features for customers to add
                beneficiaries and raise payment requests for various financial
                transactions.
              </li>
              <li>
                Built new components for document upgrades and optimized
                existing React.js components for better performance.
              </li>
              <li>
                Improved application speed and responsiveness, leading to
                smoother transaction processing.
              </li>
            </ul>
          </div>

          {/* Next.js Banking Application */}
          <div className="experience-details">
            <h4>
              Next.js Banking Application - Salary Account Login (4 months)
            </h4>
            <ul>
              <li>
                Created reusable components for the login page and OTP
                implementation, ensuring scalability and maintainability.
              </li>
              <li>
                Integrated REST APIs for secure data exchange and used Redux for
                state management.
              </li>
              <li>
                Enhanced authentication flows to improve user security and
                experience.
              </li>
            </ul>
          </div>

          {/* Additional Contributions */}
          <div className="experience-details">
            <h4>Additional Contributions</h4>
            <ul>
              <li>
                Built a React.js banking app with Tailwind CSS and REST APIs,
                enabling users to pay dues, check credit scores, and download IT
                certificates, increasing customer retention by 25%.
              </li>
              <li>
                Developed 20+ reusable components, improving code
                maintainability and reducing redundancy by 50%.
              </li>
              <li>Led a team of 4, driving project success.</li>
              <li>
                Conducted client analysis sessions, boosting satisfaction by 25%
                and repeat business by 40%.
              </li>
              <li>
                Optimized performance from 35 to 90 points, cutting page load
                time by 20% through code splitting, lazy loading, and image
                optimization.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="background-graphic"></div>
      <div className="background-graphic"></div>
      <div className="background-graphic"></div>

      <h2>Things I Built</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
