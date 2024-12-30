import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClipLoader } from "react-spinners";
import "../styles/About.css";

function About() {
  const [aboutContent, setAboutContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        // Login to get the token
        const loginResponse = await axios.post("http://127.0.0.1:8000/api/login", {
          email: "tutulhosen2022@gmail.com",
          password: "12345678",
        });

        const token = loginResponse.data.token;

        // Fetch about data
        const aboutResponse = await axios.get("http://127.0.0.1:8000/api/about", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (aboutResponse.data.success) {
          setAboutContent(aboutResponse.data.data.content);
        } else {
          setError("Data not found.");
        }
      } catch (error) {
        setError("Failed to fetch data from the API.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <section id="about" className="about py-5">
      <div className="container text-center">
        <h2 className="about-heading">About Me</h2>
        {loading && (
          <div className="preloader-container">
            <ClipLoader color="#007bff" size={50} />
            <p>Loading...</p>
          </div>
        )}
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
