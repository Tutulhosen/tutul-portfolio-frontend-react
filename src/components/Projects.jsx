import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css"; 

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 projects-heading">My Projects</h2>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="card project-card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">This is a short description of the project.</p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card project-card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">This is a short description of the project.</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4 mb-4">
            <div className="card project-card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">This is a short description of the project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
