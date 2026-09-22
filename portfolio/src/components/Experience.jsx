import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap
} from "react-icons/fa";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">

      <div className="experience-container">

        <div className="section-title">
          <p>MY JOURNEY</p>
          <h2>
            Experience & <span>Education</span>
          </h2>
        </div>

        <div className="timeline">

          {/* Experience */}

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >

            <motion.div
              className="timeline-icon"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2
              }}
            >
              <FaBriefcase />
            </motion.div>

            <div className="timeline-content">

              <span className="timeline-date">
                May 2026 – Aug 2026
              </span>

              <h3>Trainee</h3>

              <h4>Nextgen Technohub</h4>

              <p>
                Worked on an E-learning project named
                <strong> EduNova</strong>.
              </p>

              <p>
                Gained practical experience in Django,
                web development and building features for
                a real-world application.
              </p>

            </div>

          </motion.div>


          {/* Education */}

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.2
            }}
          >

            <motion.div
              className="timeline-icon"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4
              }}
            >
              <FaGraduationCap />
            </motion.div>

            <div className="timeline-content">

              <span className="timeline-date">
                Engineering
              </span>

              <h3>Bachelor's Degree</h3>

              <h4>Information Technology</h4>

              <p>
                Currently pursuing an engineering degree
                in Information Technology with an interest
                in software development and web technologies.
              </p>

            </div>

          </motion.div>
          {/* Higher Secondary */}

<motion.div
  className="timeline-item"
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.7,
    delay: 0.2
  }}
>
  <motion.div
    className="timeline-icon"
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: 0.4
    }}
  >
    <FaGraduationCap />
  </motion.div>

  <div className="timeline-content">

    <h3>Higher Secondary</h3>

    <h4>Benachity high school</h4>

    <p>
      Completed Higher Secondary education with a
      focus on science and technical subjects and scored <b style={{ color: '#e7f20f', fontSize: '20px' }}>75%</b>. 
    </p>

  </div>
</motion.div>


{/* Secondary School */}

<motion.div
  className="timeline-item"
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.7,
    delay: 0.2
  }}
>
  <motion.div
    className="timeline-icon"
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: 0.4
    }}
  >
    <FaGraduationCap />
  </motion.div>

  <div className="timeline-content">

    <h3>Secondary School</h3>

    <h4>Benachity high school</h4>

    <p>
      Completed secondary education, scored <b style={{ color: '#daf036', fontSize: '20px' }}>83%</b> and developed
      an early interest in mathematics, science, computers
      and technology.
    </p>

  </div>
</motion.div>
        </div>

      </div>

    </section>
  );
}

export default Experience;