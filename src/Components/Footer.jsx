import React from 'react'
import {  FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"; // Importing social icons
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">

    <div className="social-icons">
      <a href="https://www.linkedin.com/in/abi-sugesh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/sugesh._x?igsh=MWt2dmJhM2x3cXk2eQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      
    </div>
    <p>Copyright © 2025 AbiSugesh. All rights Reserved.</p>
  </footer>
  )
}

export default Footer
