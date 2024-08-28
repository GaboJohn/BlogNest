import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setSuccessMessage('Your message has been sent successfully!');
      
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="contactPage">
    <div className="contactContainer">
      <h2 className="contactTitle">Contact Us</h2>
      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          className="contactInput"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="contactInput"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="contactTextarea"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className="contactButton" type="submit">
          Send Message
        </button>
        {successMessage && <p className="successMessage">{successMessage}</p>}
      </form>
    </div>
    </div>
  );
};

export default Contact;
