import React, { useEffect } from 'react';
import './About.css';
import Card from '../Card/Card';
import javaImage from '../../assets/javaSpring.png';
import reactjs from '../../assets/reactjs.png';
import cloud from '../../assets/cloud.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function About() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create a GSAP context for easier cleanup
    const ctx = gsap.context(() => {
      // Circle animations
      gsap.from(".circle", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
          trigger: ".circle-line",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
          markers: false // Set to true for debugging, then false for production
        }
      });

      // Line animations
      gsap.from(".line", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
          trigger: ".circle-line",
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      });

      // Headings animation
      gsap.from(".aboutdetails h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.6 ,
        scrollTrigger: {
          trigger: ".aboutdetails",
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      });

      // List items animation
      gsap.from(".aboutdetails li", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.6,
        scrollTrigger: {
          trigger: ".aboutdetails",
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      });
    });

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <div id='about'>
      <div className="leftAbout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span> Name: Vinod Kumar Singh</span></li>
              <li><span> Age: 31</span></li>
              <li><span> Gender: Male</span></li>
              <li><span> Language Known: Hindi, English</span></li>
            </ul>
          </div>
          
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span> Degree: B.Tech (Mechanical Engineering)</span></li>
              <li><span> CGPA: 8.2</span></li>
              <li><span> College: Lovely Professional University</span></li>    
              <li><span> Year of Passing: 2015</span></li>  
            </ul>
          </div>
          
          <div className="personalinfo">
            <h1>Skills</h1>
            <ul>
              <li><span> Back end: Java 17, Spring Boot, RabbitMQ, MS-SQL, MongoDB</span></li>
              <li><span> Front end: JavaScript, React.js, CSS, HTML</span></li>
              <li><span> Cloud: AWS, Azure, GCP</span></li>
              <li><span> Others: Docker, Kafka, Jenkins, Kubernetes</span></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="rightAbout">
        <Card title={"Java Developer"} image={javaImage}/>
        <Card title={"Front End"} image={reactjs} />
        <Card title={'Cloud'} image={cloud} />
      </div>
    </div>
  );
}

export default About;