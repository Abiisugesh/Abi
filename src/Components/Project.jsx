import React from 'react'
import "./Project.css"

const Project = () => {

    
    const projects = [
        { title: "AK HERBS", description: "Designed and developed a fully functional e-commerce website for AK Herbs using WordPress and WooCommerce.     Integrated seamless shopping features, including secure payment gateways, user-friendly navigation, and product catalog management.    Customized themes and plugins to enhance functionality and align with the brand’s vision.     Optimized the website for mobile responsiveness, performance, and SEO to improve user experience and visibility.", link: "https://akherbs.in/" },
        { title: "MEET MY DOCS", description: "This Project helps a certain medical establishment such as a clinic or hospital patient to request an appointment with a doctor in online.Here HTML, CSS for the Frontend PHP for Backend and MY SQL for store the Database.This is also Helps the Doctor to manage and schedules of their appointments with patients.", link: "#" },
        
      ];


  return (
    <div>
      <section id="projects" className="projects">
      <h1>PROJECTS</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Project
