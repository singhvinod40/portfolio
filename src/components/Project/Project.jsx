import React from 'react';
import "./Project.css";
import ExprienceTop from './ExprienceTop';

function Project() {
  return (
    <section id="project">
      <div className="projectdetails">
      <div className="exprienceline"></div>
        <h1>Experience & Projects</h1>
        <ExprienceTop />
        <div className="exprienceline"></div>
      </div>
    </section>
  );
}

export default Project;