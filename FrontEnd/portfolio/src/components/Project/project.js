import React from 'react'
import './project.css';
const Project = () => {
  return (
    <section id="project">
        <span className="projectTitle">
            Project
        </span>
      <h2 className="project-heading">
        Krishi Bridge - <span>Farmer-Transporter Portal</span>
      </h2>
      <ul className="project-details">
        <li>
          Developed a full-stack web application for vehicle booking and goods
          transportation between farmers and transporters.
        </li>
        <li>
          Technologies: React.js, Node.js, MongoDB
        </li>
        <li>
          Features: User authentication, real-time vehicle listings, request management system.
        </li>
        <li>
          Goal: To streamline agricultural logistics and promote farmer-transporter collaboration.
        </li>
      </ul>
    </section>
  );
};

export default Project;
