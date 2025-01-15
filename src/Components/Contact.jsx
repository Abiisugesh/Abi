import {useState} from 'react'
import emailjs from "emailjs-com";
import "./Contact.css"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [successMessage, setSuccessMessage] = useState("");
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_apbslgc",  // Replace with your EmailJS Service ID
            "template_4s3n11d", // Replace with your EmailJS Template ID
            e.target,
            "qleQ-gx_HtMtwTrVM"   // Replace with your EmailJS Public Key
          )
          .then(
            (result) => {
              setSuccessMessage("Your message has been sent successfully!");
            },
            (error) => {
              setSuccessMessage("An error occurred. Please try again.");
            }
          );
    
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
      };
    
  return (
    <div  id="contact" className="contact-container">
    <h2>CONTACT ME</h2>
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
    {successMessage && <p className="success-message">{successMessage}</p>}
  </div>
  )
}

export default Contact
