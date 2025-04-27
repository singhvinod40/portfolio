import React from 'react';
import './Home.css';
import iTimage from '../../assets/itImage.png';
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../assets/resume.pdf';

function Home() {
  return (
    <section id='home'>
      <div className='sidebar'>
        <ul>
          <li>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vinod.k.singh40@gmail.com&su=Hello&body=Hi Vinod," target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/singhvinod40" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vinod-kumar-singh-419428a9/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/8727907826" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/i__m__vinod/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com/singhvinod40" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className='leftHome'>
        <div className="homedetails">
          <div className="line1">Hey there, I am</div>
          <div className="line2">Vinod Kumar Singh</div>
          <div className="line3">
            <Typewriter
              words={[
                "Java Full Stack Developer",
                "9+ years of experience",
                "Microservices specialist",
                "Cloud technology expert",
                "Worked in banking, retail, and insurance"
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={10}
              delaySpeed={1000}
            />
          </div>
          <a href={resume} download="Vinod_Kumar_Singh_Resume.pdf">
            <button>Hire Me!</button>
          </a>
        </div>
      </div>

      <div className='rightHome'>
        <img src={iTimage} alt="Vinod Kumar Singh showcasing IT skills" />
      </div>
    </section>
  );
}

export default Home;