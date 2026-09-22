import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";
import "./Projects.css";

function Projects() {

  const projects = [
    {
      title: "Spotify Clone",
      description:
        "A Spotify clone web application built with HTML, CSS, and JavaScript, allowing users to search and play music tracks.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/spotify.png",
      github: "https://github.com/sudiprakshit05/spotifyclone",
      demo: "https://fascinating-jalebi-aac654.netlify.app/"
    },
    {
      title: "Travel go",
      description:
        "A travel booking front end application built with HTML,CSS, JavaScript, allowing users to search and book travel packages.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/travel_go.png",
      github: "https://github.com/sudiprakshit05/travel-go",
      demo: "https://chimerical-naiad-c87a20.netlify.app/"
    },
    {
      title: "Vaultgen",
      description:
        "A password generator application built with HTML, CSS, and JavaScript for secure password management.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/vaultgen.png",
      github: "https://github.com/sudiprakshit05/password-generator",
      demo: "https://vaultgen.netlify.app/"
    },
    {
      title: "Melody slider",
      description:
        "A responsive image slider built with HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/melody_slider.png",
      github: "https://github.com/sudiprakshit05/image-slider",
      demo: "https://image-slider-pearl.vercel.app/"
    }
  ];

  return (
    <section className="projects-section" id="projects">

      <div className="projects-container">

        {/* Section Title */}
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p>MY WORK</p>
          <h2>
            Featured <span>Projects</span>
          </h2>
        </motion.div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >

              <motion.div
                className="project-image"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15 + 0.2
                }}
                viewport={{ once: true }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                />
              </motion.div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className="technology-list">

                  {project.technologies.map(
                    (technology, techIndex) => (
                      <span key={techIndex}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

                <div className="project-links">

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
