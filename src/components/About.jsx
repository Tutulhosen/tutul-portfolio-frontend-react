import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../helpers/apiHelper"; // Import the helper function
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
        const response = await fetchWithAuth(`${import.meta.env.VITE_URL}/api/about`);

        if (response.data.success) {
          setAboutContent(response.data.data.content);
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
