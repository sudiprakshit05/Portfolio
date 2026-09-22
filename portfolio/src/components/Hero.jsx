import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1>
          Sudip <span>Rakshit</span>
        </h1>
        <h2>Software Developer & IT Student</h2>
        <p className="hero-description">
          I build modern web applications using React, Django,
          JavaScript and Python. I enjoy turning ideas into
          useful and interactive digital experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="/sudip_rakshit_cv.pdf" className="secondary-btn" target="_blank" rel="noopener noreferrer">
            View resume
          </a>
        </div>
        <div className="social-links">
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

      </div>

      <div className="hero-image">
        <div className="profile-circle">
          <img src="/profesional_pic.jpeg" alt="Sudip Rakshit" />
        </div>
      </div>

    </section>
  );
}

export default Hero;