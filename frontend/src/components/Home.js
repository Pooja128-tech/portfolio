import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Home() {
  return (
    <div className="home-animated-container">
      <div className="home-animated-overlay"></div>
      <div className="home-animated-content">
        <h1 className="home-animated-title">Hi this is Pooja's Portfolio</h1>
        <h2 className="home-animated-subtitle">Web Developer | Java - React - MongoDB | Manual Testing Enthusiast | Problem Solver</h2>
        <p className="home-animated-description">
          I love creating interactive, dynamic, and user-friendly web experiences
          using React, Node.js, and MongoDB. I'm passionate about building beautiful,functional websites and ensuring they work flawlessly.A curious Web Developer and a detail-oriented  Manual Testing Engineer,I love blending creativity with precision. Let’s build something amazing together!
        </p>
        <div className="home-animated-buttons">
          <Link to="/projects" className="home-btn home-btn-primary">
            🚀 View Projects
          </Link>
          <Link to="/contact" className="home-btn home-btn-secondary">
            💬 Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
