import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/project")
      .then((response) => {
        if (response.data.success) {
          setProjects(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching projects data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="preloader-container">
        <ClipLoader color="#007bff" size={50} />
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 projects-heading">My Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card project-card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <div className="project-hover">
                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{
                        __html: project.description,
                      }}
                    ></div>
                    <div className="project-buttons">
                      {/* Show Live button only if link exists */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-icon"
                        >
                          <i className="fas fa-link"></i> Live
                        </a>
                      )}
                      {/* Show GitHub button only if github_link exists */}
                      {project.github_link && (
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-dark btn-icon"
                        >
                          <i className="fab fa-github"></i> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
