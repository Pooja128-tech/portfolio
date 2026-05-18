import React from "react";

export default function Projects() {
  return (
    <div className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="project-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A responsive React-based personal portfolio showcasing skills, projects, and contact information.</p>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Mobile Application Testing Document</h3>
          <p>Comprehensive documentation and testing of a mobile application, including test cases and bug reports.</p>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>Spam Email Detection using Multinomial Naive Bayes</h3>
          <p>Implemented a machine learning model to classify emails as spam or non-spam using Multinomial Naive Bayes algorithm.</p>
        </div>
      </div>
    </div>
  );
}
