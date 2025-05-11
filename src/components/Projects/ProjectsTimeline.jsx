import React from "react";
import "./ProjectsTimeline.css"; // Assuming you have a CSS file for styling
import anzLogo from "../../assets/anz.png";
import eyLogo from "../../assets/ey.png";
import infosysLogo from "../../assets/infosys.png";
import cognizantLogo from "../../assets/cognizant.jpg";

const projects = [
  {
    id: 1,
    title: "KYC Automation",
    duration: "9 Months",
    company: "EY",
    client: "American Express",
    technologies: ["Java 11", "Spring Boot", "Kafka", "Docker", "AWS", "MS-SQL"],
    responsibilities: [
      "Automated onboarding for credit card business",
      "Service flows using BPMN",
      "Unit and E2E testing, deployment, and debugging"
    ],
    logo: eyLogo,
    themeColor: "#2e1065"
  },
  {
    id: 2,
    title: "Transaction Periscope",
    duration: "30 Months",
    company: "EY",
    technologies: ["Java 11", "Spring Boot", "Azure DevOps", "React.js", "Power BI"],
    responsibilities: [
      "REST APIs for analytics",
      "Python ML model integration",
      "Reports via Power BI",
      "Frontend in React"
    ],
    logo: eyLogo,
    themeColor: "#2e1065"
  },
  {
    id: 3,
    title: "Production Scheduler",
    duration: "15 Months",
    company: "Infosys",
    client: "Apple",
    technologies: ["Java 8", "Spring Boot", "MongoDB", "Swagger"],
    responsibilities: [
      "Shipping/production services",
      "System design and Swagger APIs",
      "Acted as Scrum Master"
    ],
    logo: infosysLogo,
    themeColor: "#007cc3"
  },
  {
    id: 4,
    title: "Backoffice System",
    duration: "12 Months",
    company: "Cognizant",
    client: "RBC",
    technologies: ["Java 8", "Spring", "Hibernate", "MySQL"],
    responsibilities: [
      "Compliance services for derivatives",
      "System design, testing, and bug fixes"
    ],
    logo: cognizantLogo,
    themeColor: "#0033a0"
  },
  {
    id: 5,
    title: "Payment Systems",
    duration: "Feb 2024 - Present",
    company: "ANZ",
    technologies: ["Java 17", "IBM MQ", "Apache Camel", "Oracle Cloud"],
    responsibilities: [
      "Cross-border payment microservices",
      "Messaging with IBM MQ",
      "Deployed on Oracle Cloud"
    ],
    logo: anzLogo,
    themeColor: "#00843d"
  }
];

const ProjectsGrid = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Professional Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            style={{ borderTop: `4px solid ${project.themeColor}` }}
          >
            <div className="project-header">
              <img src={project.logo} alt={project.company} className="company-logo" />
              <div className="project-meta">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-details">
                  <span className="project-duration">{project.duration}</span>
                  {project.client && <span className="project-client">{project.client}</span>}
                </div>
              </div>
            </div>
            
            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <ul className="responsibilities">
              {project.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;