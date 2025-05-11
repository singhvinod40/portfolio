import React from "react";
import "./ProjectsTimeline.css";
import anzLogo from "../../assets/anz.png";
import eyLogo from "../../assets/ey.png";
import infosysLogo from "../../assets/infosys.png";
import cognizantLogo from "../../assets/cognizant.png";


const projects = [
  {
    id: 5,
    title: "Payment Messaging Platform",
    client: "ANZ",
    duration: "Feb 2024 - Present",
    company: "ANZ",
    technologies: ["Java 17", "Spring Boot", "IBM MQ", "Apache Camel", "OpenShift", "Oracle DB","React.js", "GCP","XML"],
    responsibilities: [
      ". Developing workflows for different messaging requirements.",
      ". Utolizing Swift Translator for message transformation and enrichment to enhance payment interoperability.",
      ". Compliance with regulatory requirements. ISO20022, SWIFT, and local regulatory requirements.",
      ". Designing and developing microservices to facilitate seamless cross-border and inward payments.",
      ". Payment processing, including payment initiation, validation, and settlement.", 
    ],
    logo: anzLogo,
    themeColor: "#007dba"
  },
  {
    id: 1,
    title: "KYC Automation",
    duration: "9 Months",
    company: "EY",
    client: "American Express",
    technologies: ["Java 11", "Spring Boot", "Kafka", "Docker", "AWS", "MS-SQL","Git Lab"],
    responsibilities: [
      ". Automated onboarding for credit card business",
      ". Used BPMN to design the flow for services",
      ". Service flows using BPMN",
      ". Prepare Design Documents",
      ". Unit and E2E testing, deployment, and debugging",
      ". Deployment and Debugging."
    ],
    logo: eyLogo,
    themeColor: "#FFE600"
  },
  {
    id: 2,
    title: "Transaction Periscope",
    duration: "30 Months",
    company: "EY",
    client: "EY Parthenon",
    technologies: ["Java 11", "Spring Boot", "Azure DevOps", "React.js", "Power BI","MS-SQL","JavaScript","Junit"],
    responsibilities: [
      ". REST APIs for analytics",
      ". Python ML model integration",
      ". Reports via Power BI",
      ". Frontend in React",
      ". Design Database and APIs",
    ],
    logo: eyLogo,
    themeColor: "#FFE600"
  },
  {
    id: 3,
    title: "Master Production Scheduler",
    duration: "15 Months",
    company: "Infosys",
    client: "Apple",
    technologies: ["Java 8", "Spring Boot","Rest API","MongoDB", "Swagger","Maven","Junit","Git"],
    responsibilities: [
      ". Shipping/production services",
      ". Involvement in development, unit testing and preparation of test logs, bug fixing",
      ". System design and Swagger APIs",
      ". Involvement in Peer Reviews of code"
    ],
    logo: infosysLogo,
    themeColor: "#007CC3"
  },
  {
    id: 4,
    title: "Backoffice System",
    duration: "12 Months",
    company: "Cognizant",
    client: "Royal Bank of Canada",
    technologies: ["Java 8", "Spring", "Hibernate", "MySQL","Jenkins"],
    responsibilities: [
      ". Development of Services for Banking needs of the Derivative Trade compliance",
      ". Preparation of design for the requirements",
      ". System design, testing, and bug fixes"
    ],
    logo: cognizantLogo,
    themeColor: "#248D95"
  },
];

const ProjectsGrid = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Professional Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            style={{ 
              borderTop: `4px solid ${project.themeColor}`,
              marginTop: `${index * 20}px` // Dynamic top margin for ladder effect
            }}
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