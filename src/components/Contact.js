import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>
        If you’d like to get in touch, feel free to send me an email at{" "}
        <a href="mailto:your-email@example.com">shreyasgacharya@gmail.com</a>.
      </p>
      <p>Or find me on social media:</p>
      <ul className="social-media-list">
        <li>
          <a
            href="https://github.com/Shreyas-G-28"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="social-icon"
            />
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shreyas-acharyag/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="social-icon"
            />
            LinkedIn
          </a>
        </li>
        {/* Add more social media links as needed */}
      </ul>
    </section>
  );
};

export default Contact;
