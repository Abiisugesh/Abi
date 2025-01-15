import React from 'react'
import "./Skills.css" 
import { FaHtml5, } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

const Skills = () => {

    const skills = [
        { icon: <FaReact />, name: "REACT J.S" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS 3" },
        { icon: <FaJs />, name: "JAVA SCRIPT" },
        { icon: <FaJava />, name: "JAVA" },
        { icon: <SiSpringboot />, name: "SPRING BOOT" },
        { icon: <SiMysql />, name: "MY SQL" },
        { icon: <FaWordpress />, name: "WORDPRESS" },
      ];


  return (
    <div className="skills" id="skills">
      <h2>MY SKILLS</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
