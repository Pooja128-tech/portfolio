import React from "react";

export default function About() {
  return (
    <div className="about-section">
      <h2 className="about-section-title">About Me</h2>
      <p className="about-section-description">
        A passionate Web Developer and Manual Testing Engineer student who loves building and perfecting digital experiences and innovative projects.
      </p>

      <div className="about-cards">
        {/* Education Card */}
        <div className="about-card">
          <h3>🎓 Education</h3>
          <ul>
            <li>B.Tech in Information Technology, Jeppiaar Engineering College (2022-2026)</li>
            <li>HSC - Sree Narayana Guru Matriculation Higher Secondary School (2021-2022) - 12th Grade: 83.7%</li>
            <li>SSLC - Sree Narayana Guru Matriculation Higher Secondary School (2019-2020) - 10th Grade: 87.7%</li>
          </ul>
        </div>

        {/* Skills Card */}
        <div className="about-card">
          <h3>💻 Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li>Node.js</li>
            <li>Java</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Manual Testing</li>
            <li>Automation Testing</li>
          </ul>
        </div>

        {/* Internships Card */}
        <div className="about-card">
          <h3>📝 Internships</h3>
          <ul>
            <li>
              <strong>Java Full Stack Developer</strong> <br />
              Duration: 3 months <br />
              Organization: Test Yantra Software Solution (India) Pvt. Ltd.
            </li>
            <li>
              <strong>Core Java</strong> <br />
              Duration: 2 weeks <br />
              Organization: NSIC-Technical Services Center
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
