import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css";

function About() {
  const [aboutContent, setAboutContent] = useState("");
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    
    axios
      .get("http://127.0.0.1:8000/api/about")
      .then((response) => {
        if (response.data.success) {
          setAboutContent(response.data.data.content); 
        } else {
          setError("Data not found.");
        }
      })
      .catch((error) => {
        setError("Failed to fetch data from the API.");
        console.error(error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []);

  return (
    <section id="about" className="about py-5">
      <div className="container text-center">
        <h2 className="about-heading">About Me</h2>
        {loading && <p>Loading...</p>} 
        {error && <p className="text-danger">{error}</p>} 
        {!loading && !error && (
          <div
            className="about-description mt-4"
            dangerouslySetInnerHTML={{ __html: aboutContent }}
          ></div>
        )}
      </div>
    </section>
  );
}

export default About;
