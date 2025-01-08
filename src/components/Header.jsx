import React, { useState, useEffect } from "react";
import { fetchWithAuth } from "../helpers/apiHelper"; 
import { ClipLoader } from "react-spinners";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Header.css";

function Header() {
  const [AuthData, setAuthData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const response = await fetchWithAuth(`${import.meta.env.VITE_URL}/api/hero`);
        setAuthData(response.data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthData();
  }, []);

  if (loading) {
    return (
      <div className="preloader-container">
        <ClipLoader color="#007bff" size={50} />
        <p>Loading...</p>
      </div>
    );
  }

  if (!AuthData) {
    return <p>Error loading hero data.</p>;
  }

  const {
    name,
  } = AuthData;

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">{name}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#achievement">Achievement</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
