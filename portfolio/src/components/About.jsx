import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* Section Title */}
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p>GET TO KNOW ME</p>
          <h2>
            About <span>Me</span>
          </h2>
        </motion.div>

        <div className="about-content">

          {/* About Text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3>
              I'm an aspiring <span>Software Developer</span>
            </h3>

            <p>
              I am an Information Technology student with a strong
              interest in software development and web technologies.
              I enjoy building applications that solve real-world
              problems and provide a good user experience.
            </p>

            <p>
              I have worked with technologies such as Java, Python,
              Django, React.js, JavaScript, HTML, CSS and SQL.
              I am continuously improving my programming and
              problem-solving skills.
            </p>

            <p>
              My goal is to start my career as a software developer
              where I can apply my technical knowledge, learn new
              technologies and contribute to meaningful projects.
            </p>

          </motion.div>

          {/* About Cards */}
          <motion.div
            className="about-cards"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >

            <motion.div
              className="about-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <FaGraduationCap />
              <h4>Education</h4>
              <p>Information Technology</p>
            </motion.div>

            <motion.div
              className="about-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <FaCode />
              <h4>Development</h4>
              <p>Web & Software Development</p>
            </motion.div>

            <motion.div
              className="about-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <FaLaptopCode />
              <h4>Projects</h4>
              <p>Real-world Applications</p>
            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;

