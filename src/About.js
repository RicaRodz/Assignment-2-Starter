import { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <h1 className="about-title">About Me</h1>
        
        <div className="about-content">
          <div className="photo-container">
            <div className="photo-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
          
          <div className="about-text">
            <p className="intro-text">
              Hello! I'm a passionate developer with a love for creating innovative 
              solutions and beautiful user experiences. I enjoy working with modern 
              technologies and constantly learning new skills.
            </p>
            
            <p className="description-text">
              With a background in computer science and a keen eye for design, I strive 
              to bridge the gap between functionality and aesthetics in every project I 
              work on.
            </p>
            
            <div className="skills-section">
              <h2 className="skills-title">Skills & Technologies</h2>
              <div className="skills-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;