import React from 'react';
import './About.css';
import Card from '../Card/Card';
import javaImage from '../../assets/javaSpring.png';
import reactjs from '../../assets/reactjs.png';
import cloud from '../../assets/cloud.jpg';

function About() {
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
        <li><span> Gende: Male</span></li>
        <li><span> Launguage Known: Hindi,English</span></li>
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
        <li><span> Back end: Java 17, Springboot, Rabit Mq, Ms-sql, Mongo db</span></li>
        <li><span> Fron end: JavaScript, React js, Css, Html</span></li>
        <li><span> cloud : Aws, Azure, GCP </span></li>
        <li><span> Others: Docker, Kafka, Jenkins, Kubernates </span></li>
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

  )
}

export default About
