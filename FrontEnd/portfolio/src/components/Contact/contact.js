import React, { useState } from "react";
import axios from "axios";
// import React from 'react'
import './contact.css'
import Instagram_icon from '../../assets/instagram-logo-2.png';
import linkdin from '../../assets/linkdin.png';
import facebook from '../../assets/facebook.png';

const Contact = () => {
   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("https://portfolio-backend-wf3c.onrender.com", formData);
      setStatus(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message.");
    }
  };
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactTitle">Contact Me</h1>
        <span className='contactDec'>Please fill out the from below to discus any query</span>
        <form action="" className='contactForm' onSubmit={handleSubmit}>
          <input type='text' name="name" className='name' placeholder='Enter Your Name' onChange={handleChange}required/>
          <input type='email' name="email" className='email' placeholder='Enter Your Mail' onChange={handleChange}required/>
          <textarea name='message'className='msg' rows="5" placeholder='Your Message'onChange={handleChange}></textarea>
          <button type="Submit" value="Send" className='submitBtn'>Submit</button>
          <p>{status}</p>
        </form>
        <div className='links'>
          <a href='https://www.instagram.com/om_pawar7511?igsh=dHhwNnd0MGFsOWlr' target='_blank' rel='noopener noreferrer'>
            <img src={Instagram_icon} alt="" height="100px" width="100px" className='link' />
          </a>
          <a href='https://www.linkedin.com/in/om-pawar-425b40286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer'>
            <img src={linkdin} alt="" height="100px" width="100px" className='link' />
          </a>
          <a href='https://www.facebook.com/share/1YLn9HtkUR/' target='_blank' rel='noopener noreferrer'>
            <img src={facebook} alt="" height="100px" width="100px" className='link' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
