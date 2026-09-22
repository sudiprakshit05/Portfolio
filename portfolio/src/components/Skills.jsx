import React from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from "react-icons/fa";
import { SiDjango, SiMysql } from "react-icons/si";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "Java",
      icon: <FaJava />,
      color: "#007396"
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "#3776ab"
    },
    {
      name: "Django",
      icon: <SiDjango />,
      color: "#092e20"
    },
    {
      name: "React.js",
      icon: <FaReact />,
      color: "#61dafb"
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "#f7df1e"
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "#e34c26"
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "#264de4"
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "#00758f"
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "#f05033"
    }
  ];

  return (
    <section className="skills-section" id="skills">

      <div className="skills-container">

        <div className="section-title">
          <p>MY TECHNOLOGIES</p>
          <h2>My <span>Skills</span></h2>
        </div>

        <div className="skills-list">

          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>

              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;