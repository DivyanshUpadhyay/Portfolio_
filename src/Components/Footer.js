import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/">
            <span className="footer-logo-text">Divyansh Upadhyay</span>
          </Link>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li>
                <Link to="/about-me">About Me</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/certificate">Certification</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Me</h3>
            <ul>
              <li>
                <a href="https://github.com/DivyanshUpadhyay/" aria-label="Github">
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/divyansh_upadhyay03" aria-label="Instagram">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/divyansh_upadhyay03" aria-label="Facebook">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="https://flowbite.com/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="https://flowbite.com/terms-conditions">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/divyansh_upadhyay03" aria-label="Facebook">
            <BsFacebook />
          </a>
          <a href="https://www.instagram.com/divyansh_upadhyay03" aria-label="Instagram">
            <BsInstagram />
          </a>
          <a href="https://github.com/DivyanshUpadhyay/" aria-label="Github">
            <BsGithub />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Divyansh Upadhyay. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
