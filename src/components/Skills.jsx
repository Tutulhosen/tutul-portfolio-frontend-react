import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Skills.css";

import phpImage from "../assets/images/php.png";
import laravelImage from "../assets/images/laravel.svg";
import ajaxImage from "../assets/images/ajax.webp";
import jsImage from "../assets/images/js.png";
import ciImage from "../assets/images/ci.png";
import htmlImage from "../assets/images/html.png";
import cssImage from "../assets/images/css.png";

function Skills() {
  return (
    <section id="skills" className="skills py-5">
      <div className="container">
        <h2 className="text-center mb-4 skills-heading">My Skills</h2>
        <div className="row justify-content-center">
          {/* Skill Cards */}
          {[
            { name: "PHP", img: phpImage },
            { name: "MySQL", icon: "fas fa-database", color: "text-secondary" },
            { name: "Laravel", img: laravelImage },
            { name: "API Management", icon: "fas fa-network-wired", color: "text-warning" },
            { name: "Ajax", img: ajaxImage },
            { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-primary" },
            { name: "Laravel OAuth SSO", icon: "fas fa-key", color: "text-success" },
            { name: "Microservices", icon: "fas fa-microchip", color: "text-secondary" },
            { name: "JavaScript", img: jsImage },
            { name: "CodeIgniter", img: ciImage },
            { name: "HTML", img: htmlImage },
            { name: "CSS", img: cssImage },
          ].map((skill, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4 text-center">
              <div className="skill-card p-3">
                {skill.img ? (
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="skill-image mb-3"
                  />
                ) : (
                  <i
                    className={`${skill.icon} fa-3x ${skill.color} mb-3`}
                  ></i>
                )}
                <h5 className="skill-name">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
