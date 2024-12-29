import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClipLoader } from "react-spinners";
import "../styles/Skills.css";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    axios
      .get("http://127.0.0.1:8000/api/skill")
      .then((response) => {
        if (response.data.success) {
          setSkills(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching skills data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
      return (
        <div className="preloader-container">
          <ClipLoader color="#007bff" size={50} />
          <p>Loading Skills...</p>
        </div>
      );
    }

  return (
    <section id="skills" className="skills py-5">
      <div className="container text-center">
        <h2 className="skills-heading">My Skills</h2>
        <div className="row mt-4">
          {skills.map((skill) => (
            <div key={skill.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="skill-card p-3 border rounded shadow-sm">
              {skill.icon ? (
                  <i className={skill.icon}></i>
                ) : (
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="img-fluid mb-3"
                  />
                )}

                <h5 className="skill-title">{skill.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
