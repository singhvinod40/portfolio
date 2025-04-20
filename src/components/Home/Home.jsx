import React from 'react';
import './Home.css';
import iTimage from '../../assets/itImage.png';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <section id='home'>
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
          <button>Hire Me!</button>
        </div>
      </div>

      <div className='rightHome'>
        <img src={iTimage} alt="Vinod Kumar Singh showcasing IT skills" />
      </div>
    </section>
  );
}

export default Home;
