import React from 'react'
import "./Experience.css"

const Experience = () => {

    const experiences = [
        {
          company: "ENTERKEY SOLUTIONS",
          role: " Junior Software Developer",
          duration: "Aug 2024 - Present"
        },
        
      ];


  return (
        <section className="work-experience" id="work-experience">
      <h2>WORK EXPERIENCE</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
