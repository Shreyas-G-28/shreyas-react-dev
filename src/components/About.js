import React from "react";
import "./About.css";
import profilePhoto from "./images/shreyas_image.jpeg"; // Add your actual photo path
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side: Profile Image */}
        <div className="about-image">
          <img src={profilePhoto} alt="Shreyas Acharya" />
        </div>

        {/* Right Side: About Content */}
        <div className="about-content">
          <h1>Hi, I'm Shreyas Acharya</h1>
          <h3>Frontend Developer | React.js Specialist</h3>
          <p>
            Passionate about crafting interactive, scalable, and
            performance-driven web applications using React.js, JavaScript,
            HTML, and CSS. Experienced in building responsive UI, optimizing
            performance, and delivering seamless user experiences.
          </p>

          {/* Technology Icons */}
          <div className="tech-icons">
            <FaReact size={40} color="#61DAFB" title="React.js" />
            <FaJsSquare size={40} color="#F7DF1E" title="JavaScript" />
            <FaHtml5 size={40} color="#E34F26" title="HTML5" />
            <FaCss3Alt size={40} color="#1572B6" title="CSS3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
