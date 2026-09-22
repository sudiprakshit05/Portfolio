import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaArrowUp
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h2>
            <span>&lt;</span>Sudip<span>/&gt;</span>
          </h2>

          <p>
            Building software, learning continuously,
            and turning ideas into reality.
          </p>
        </div>

        <div className="footer-socials">

          <a
            href="https://github.com/sudiprakshit05"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sudip-rakshit-a50269316/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:your-email@gmail.com">
            <FaEnvelope />
          </a>

          <a
            href="https://www.instagram.com/sudiprakshit05/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100091473738017"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>

        </div>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sudip Rakshit. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;