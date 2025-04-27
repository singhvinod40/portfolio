import React from 'react';
import './Contact.css';
import logo from '../../assets/logo.png';

function Contact() {
  return (
    <div id='contact'>
      <div className="leftContact">
        <h1>Contact Me</h1>
      <img src={logo} alt='Contact me'/>
      </div>

      <div className="rightContact">
        <form action="https://formspree.io/f/xanondbr" method="POST">

          <input type="text" name="Username" placeholder='Name' required/>
          <input type="email" name="userEmail" placeholder='Email' required/>
          <textarea name="message" id="textarea" cols="30" rows="10" placeholder='Type your Message' required></textarea>
          <button type="submit" id='btn'>Send</button>

        </form>


    </div>
    </div>
  )
}

export default Contact;
