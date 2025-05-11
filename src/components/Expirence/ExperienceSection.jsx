import React from 'react';
import './ExperienceSection.css';
import { FaArrowRight } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import expImg from '../../assets/expImage.jpg';

const ExperienceInfo = ({ number, text }) => (
  <div id="infoTag">
    <div id="yearTag">{number}</div>
    <div id="textTag">{text}</div>
  </div>
);

const ExperienceTop = () => (
  <div className="container" id="experienceTop">
    <div id="experienceLeft">
      <h2 className="sinceheading">Since 2015</h2>
      <ExperienceInfo number="9" text="Years" />
      <ExperienceInfo number="6" text="Months" />
      <div id="shortInfo">
        <p>Working as Senior Engineer in Leading Australian Bank</p>
      </div>
    </div>

    <div id="experiencemid">
      <img src={expImg} alt="Professional Experience Illustration" id="experienceImg" />
    </div>

    <div id="experienceright">
      <p>
        <Typewriter
          words={[
            "With 9 years of software development experience, I am currently a Senior Engineer at ANZ Operations & Technology, specializing in microservices for cross-border and inward payments using IBM MQ, Apache Camel, Java 17, Spring Boot, and Oracle Cloud.",
            "As a Full Stack Developer, I also work with React.js and JavaScript to build dynamic front-end applications.",
            "My end-to-end development expertise enables seamless integration of back-end systems with user-friendly interfaces.",
            "Previously, I worked at EY and Infosys, contributing to Apple’s Retail Domain, and at Cognizant, where I gained experience in banking and financial solutions.",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </p>
    </div>
  </div>
);

const experience = [
  {
    id: 1,
    title: "Senior Engineer",
    company: "ANZ Operations & Technology",
    duration: "Feb 2024 - Present",
    description: "Designing and developing microservices to facilitateseamless cross-border and inward payments." +
      "payment processing,Utilizing Swift Translator for message transformation and enrichment to enhance" +
      "payment interoperability."
  },
  {
    id: 2,
    title: "Techical Lead",
    company: "Ernst & Young GDS",
    duration: "Dec 2019 - Feb 2024",
    description: "A seasoned Developer with a background as a Java Backend " +
      "Developer, contributing to the success of a prominent US" +
      "based Banking giant. Proficient in handlingthe end-to-end " +
      "development lifecycle, from gathering requirements to" +
      "delivering a robust and reliable product."

  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Infosys Limited",
    duration: "May 2018 - Dec 2019",
    description: "Software Engineer with a background as a Java Backend" +
      "Developer, with experience contributing to the success of a" +
      "leading US-based retail giant. Highly skilled in managing the" +
      "complete development lifecycle."
  },
  {
    id: 4,
    title: "Programmer Analyst",
    company: "Cognizant",
    duration: "Feb 2016 - Apr 2018",

    description: "Started my career as a fresh graduate through campus" +
      "placement, underwent comprehensive training in Java and" +
      "other technologies, and subsequently transitioned to a role" +
      "as a Java Developer at a prominent Canadian bank."
  }
];

const AllExperience = () => (
  <div className='experience'>
    {experience.map((exp, index) => (
      <div className="experienceWrapper" key={exp.id}>
        <div className="experienceCard">
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <p>{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
        {index < experience.length - 1 && (
          <div className="arrow">
            <FaArrowRight />
          </div>
        )}
      </div>
    ))}
  </div>
);

function ExperienceSection() {
  return (
    <section id="experience">
      <div className="projectdetails">
        <div className="experienceline"></div>
        <h1>Experience & Projects</h1>
        <ExperienceTop />
      </div>
      <AllExperience />
      <div className="experienceline"></div>
    </section>
  );
}

export default ExperienceSection;
