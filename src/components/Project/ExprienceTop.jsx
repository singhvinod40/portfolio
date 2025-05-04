import React from "react";
import "./ExprienceTop.css";
import ExpirenceInfo from "./ExpirenceInfo";
import expImg from "../../assets/expImage.jpg";
import { Typewriter } from "react-simple-typewriter";

function ExprienceTop() {
  return (
    <div id="exprienceTop">
      <div id="exprienceLeft">
        <h2 className="sinceheading">Since 2015</h2>
        <ExpirenceInfo number="9" text="Years" />
        <ExpirenceInfo number="6" text="Months" />
        <div id="shortInfo">
          <p>Working as Senior Engineer in Leading Australian Bank</p>
        </div>
      </div>

      <div id="expriencemid">
        <img src={expImg} alt="Experience" id="exprienceImg" />
      </div>

      <div id="exprienceright">
        <Typewriter
          words={[
            "With 9 years of software development experience, I am currently a Senior Engineer at ANZ Operations & Technology, specializing in microservices for cross-border and inward payments using IBM MQ, Apache Camel, Java 17, Spring Boot, and Oracle Cloud.",
            "As a Full Stack Developer, I also work with React.js and JavaScript to build dynamic front-end applications.",
            "My end-to-end development expertise enables seamless integration of back-end systems with user-friendly interfaces.",
            "Previously, I worked at EY and Infosys, contributing to Apple’s Retail Domain, and at Cognizant, where I gained experience in banking and financial solutions.",
          ]}
          loop={0} // Infinite loop
          cursor
          cursorStyle="_"
          typeSpeed={50} // Speed of typing
          deleteSpeed={30} // Speed of deleting
          delaySpeed={2000} // Delay before typing the next word
        />
      </div>
    </div>
  );
}

export default ExprienceTop;
