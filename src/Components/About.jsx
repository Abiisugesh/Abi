import React from 'react'
import "./About.css"
import img from "../Images/Abisugesh.png"
import resume from "../Images/AbiSugesh.pdf"

const About = () => {
  return (
    <div>
       <section id="about" className="about">
      {/* <h2>About Me</h2> */}
      <img src={img} alt="Your Name" className="profile-img" />
      <p>
        Hello! I'm AbiSugesh Junior software developer with a passion for building innovative software solutions, Currently working as a Junior Software Developer in <a href='https://enterkeysolutions.com/'target='_blank' style={{color:" #3498db"}}>Enterkey Solutions</a>
      </p>
      <button><a href={resume}download="resume"></a>Download CV</button>
      
    </section>
    </div>
  )
}

export default About
