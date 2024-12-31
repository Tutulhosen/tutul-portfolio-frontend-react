import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../helpers/apiHelper"; // Import the helper function
import { ClipLoader } from "react-spinners";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        // Fetch projects data using the fetchWithAuth function
        const response = await fetchWithAuth(`${import.meta.env.VITE_URL}/api/project`);

        if (response.data.success) {
          setProjects(response.data.data);
        } else {
          setError("Projects data not found.");
        }
      } catch (error) {
        setError("Failed to fetch projects data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectsData();
  }, []);

  if (loading) {
    return (
      <div className="preloader-container">
        <ClipLoader color="#007bff" size={50} />
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-danger text-center">{error}</p>;
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
