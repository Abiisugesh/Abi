import React from 'react'
import "./Education.css"

const Education = () => {

    const educationDetails = [
        {
          degree: "B.Tech  Information Technology",
          institution: "CAPE Institute of Technology",
          year: "2020 - 2024",
          // description: "Specialized in software development, algorithms, and web technologies."
        },
        {
          degree: "HSC",
          institution: "CMC Matric Hr Sec School",
          year: "2019 - 2020",
          // description: "Focused on mathematics, physics, and computer science."
        },
        {
          degree: "SSLC",
          institution: "CMC Matric Hr Sec School",
          year: "2017 - 2018",
          // description: "Focused on mathematics, physics, and computer science."
        }
      ];

      
  return (
    <div>
    <section id="education" className="education">
    <h2>EDUCATION</h2>
    <div className="education-list">
      {educationDetails.map((edu, index) => (
        <div className="education-item" key={index}>
          <h3>{edu.degree}</h3>
          <p className="institution">{edu.institution}</p>
          <p className="year">{edu.year}</p>
          {/* <p className="description">{edu.description}</p> */}
        </div>
      ))}
    </div>
  </section>
  </div>
  )
}

export default Education
