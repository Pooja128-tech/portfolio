import React from "react";
import { Mail, Phone } from "lucide-react";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#007bff">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">Let's connect! Feel free to reach out through any platform below.</p>

      <div className="contact-card-container">
        <div className="contact-card">
          <Phone size={36} color="#007bff" />
          <h3>Phone</h3>
          <p>+91 7395982654</p>
        </div>

        <div className="contact-card">
          <Mail size={36} color="#007bff" />
          <h3>Email</h3>
          <p>poojagokulan2306@gmail.com</p>
        </div>

        <div className="contact-card">
          <LinkedinIcon />
          <h3>LinkedIn</h3>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}