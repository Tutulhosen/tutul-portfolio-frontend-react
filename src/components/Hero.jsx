import React, { useState, useEffect } from "react";
import { fetchWithAuth } from "../helpers/apiHelper"; 
import { ClipLoader } from "react-spinners";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.css";

// Importing social media icons
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetchWithAuth(`${import.meta.env.VITE_URL}/api/hero`);
        setHeroData(response.data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) {
    return (
      <div className="preloader-container">
        <ClipLoader color="#007bff" size={50} />
        <p>Loading...</p>
      </div>
    );
  }

  if (!heroData) {
    return <p>Error loading hero data.</p>;
  }

  const {
    name,
    profile: {
      short_description,
      profile_picture,
      resume,
      linkedin,
      github,
      facebook,
      whatsapp,
    },
  } = heroData;

  return (
    <section className="hero d-flex align-items-center" id="hero">
      <div className="container">
        <div className="row">
          {/* Text Section */}
          <div className="col-lg-6 d-flex flex-column justify-content-center pe-lg-5 py-4">
            <h1 className="hero-title">
              Welcome to <span className="brand">{name}</span>
            </h1>
            <p className="hero-subtitle">{short_description}</p>
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <a href="#projects" className="btn btn-primary me-md-2 mb-2 mb-md-0">
                View Projects
              </a>
              <a
                href={`${import.meta.env.VITE_URL}/storage/${resume}`}
                download
                className="btn btn-outline-light"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Image and Social Media Section */}
          <div className="col-lg-6 d-flex flex-column align-items-center py-4">
            {/* Image */}
            <img
              src={`${import.meta.env.VITE_URL}/storage/${profile_picture}`}
              alt="Hero"
              className="img-fluid mb-3"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                borderRadius: "30%",
              }}
            />

            {/* Social Media Icons */}
            <div className="social-icons text-center mt-2">
              {linkedin && (
                <a
                  href={linkedin}
                  className="me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} className="icon-bg" />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  className="me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} className="icon-bg" />
                </a>
              )}
              {facebook && (
                <a
                  href={facebook}
                  className="me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={30} className="icon-bg" />
                </a>
              )}
              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp}`}
                  className="me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={30} className="icon-bg" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
