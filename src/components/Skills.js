import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
  faBootstrap,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import {
  faMicrosoft,
  faGitlab,
  faJira,
  faTag,
  faGoogleAnalytics,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      name: "React Js",
      description: "Expert in building SPAs using React and its ecosystem.",
      icon: faReact,
    },
    {
      name: "React Native",
      description:
        "Experienced in building mobile applications using React Native.",
      icon: faReact,
    },
    {
      name: "JavaScript ES6",
      description: "Skilled in vanilla JavaScript and ES6+ features.",
      icon: faJsSquare,
    },
    {
      name: "HTML5",
      description: "Proficient in HTML5 and web semantics.",
      icon: faHtml5,
    },
    {
      name: "CSS3",
      description: "Experienced with modern CSS and preprocessors like SASS.",
      icon: faCss3Alt,
    },
    {
      name: "SEO",
      description: "Knowledgeable in search engine optimization techniques.",
      icon: faPencilRuler,
    },
    {
      name: "Tailwind",
      description: "Proficient in using Tailwind CSS for utility-first design.",
      icon: faCss3Alt,
    }, // Tailwind doesn't have a specific Font Awesome icon
    {
      name: "TypeScript",
      description: "Experienced with TypeScript for type-safe JavaScript.",
      icon: faJsSquare,
    },
    {
      name: "Redux",
      description: "Skilled in state management using Redux.",
      icon: faJsSquare,
    }, // No specific icon for Redux, using JS icon
    {
      name: "Bootstrap5",
      description: "Experienced with Bootstrap 5 for responsive design.",
      icon: faBootstrap,
    },
    {
      name: "Docker",
      description: "Experienced with containerization using Docker.",
      icon: faDocker,
    },
    {
      name: "Jest",
      description:
        "Proficient in using Jest for testing JavaScript applications.",
      icon: faJsSquare,
    }, // Jest doesn't have a specific Font Awesome icon
    {
      name: "Git",
      description: "Proficient in version control using Git and GitHub.",
      icon: faGitAlt,
    },
    {
      name: "Firebase",
      description: "Experienced with Firebase for backend services.",
      icon: faCode,
    }, // Firebase doesn't have a specific Font Awesome icon
    {
      name: "Data Structures and Algorithms",
      description: "Strong understanding of data structures and algorithms.",
      icon: faPencilRuler,
    }, // No specific icon for this
    {
      name: "NextJs",
      description:
        "Skilled in building server-side rendered applications with Next.js.",
      icon: faReact,
    },
  ];

  const tools = [
    {
      name: "MS Office",
      description: "Proficient in Microsoft Office Suite.",
      icon: faMicrosoft,
    },
    {
      name: "Excel",
      description: "Experienced with Excel for data manipulation.",
      icon: faCode,
    }, // No specific icon for Excel
    {
      name: "VS Code",
      description: "Skilled in using Visual Studio Code for development.",
      icon: faCode,
    },
    {
      name: "Git",
      description: "Experienced in version control using Git.",
      icon: faGitAlt,
    },
    {
      name: "GitLab",
      description: "Proficient with GitLab for CI/CD and version control.",
      icon: faGitlab,
    },
    {
      name: "JIRA",
      description: "Experienced with JIRA for project management.",
      icon: faJira,
    },
    {
      name: "Lighthouse",
      description: "Familiar with Lighthouse for performance audits.",
      icon: faCode,
    }, // No specific icon for Lighthouse
    {
      name: "PageSpeed",
      description:
        "Knowledgeable in PageSpeed Insights for performance optimization.",
      icon: faCode,
    }, // No specific icon for PageSpeed
    {
      name: "PostMan",
      description: "Proficient with PostMan for API testing.",
      icon: faCode,
    }, // No specific icon for PostMan
    // { name: 'GTM (Google Tag Manager)', description: 'Experienced with Google Tag Manager for analytics.', icon: faTag },
    // { name: 'GA (Google Analytics)', description: 'Skilled in using Google Analytics for tracking and insights.', icon: faGoogleAnalytics }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Core Competencies</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <FontAwesomeIcon
              icon={skill.icon}
              size="3x"
              className="skill-icon"
            />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

      <h2>Powering My Workflow</h2>
      <div className="skills-container">
        {" "}
        {/* Reusing the skills-container class for tools */}
        {tools.map((tool, index) => (
          <div key={index} className="skill-card">
            {" "}
            {/* Reusing the skill-card class for tools */}
            <FontAwesomeIcon
              icon={tool.icon}
              size="3x"
              className="skill-icon"
            />
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
