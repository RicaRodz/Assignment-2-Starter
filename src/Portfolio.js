import { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: "",
          title: "E-commerce Website",
          description: "A full-stack e-commerce platform built with React and Node.js",
          technologies: ["React", "Node.js", "MongoDB", "CSS3"],
        },
        {
          project_image: "",
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        },
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        <h1 className="portfolio-title">My Portfolio</h1>
        
        <div className="projects-container">
          {this.state.projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                {project.project_image ? (
                  <img src={project.project_image} alt={project.title} className="project-image" />
                ) : (
                  <div className="project-image-placeholder">
                    <span>Project Image</span>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                
                <div className="technologies-container">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-buttons">
                  <button className="btn-live-demo">Live Demo</button>
                  <button className="btn-view-code">View Code</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;