import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../helpers/apiHelper";
import { ClipLoader } from "react-spinners";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Achievement.css";

function Achievement() {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchAchievementsData = async () => {
        try {
            // Fetch achievements data using the fetchWithAuth function
            const response = await fetchWithAuth(`${import.meta.env.VITE_URL}/api/achievement`);
    
            if (response.data.success) {
            setAchievements(response.data.data);
            } else {
            setError("Achievements data not found.");
            }
        } catch (error) {
            setError("Failed to fetch Achievements data.");
            console.error(error);
        } finally {
            setLoading(false);
        }
        };
    
        fetchAchievementsData();
    }, []);
    
    if (loading) {
        return (
        <div className="preloader-container">
            <ClipLoader color="#007bff" size={50} />
            <p>Loading achievements...</p>
        </div>
        );
    }
    
    if (error) {
        return <p className="text-danger text-center">{error}</p>;
    }
        


  return (
    <section id="achievement" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 achievement-heading">Achievements</h2>
        <div className="row">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="col-md-4 mb-4">
              <div className="card achievement-card">
                <img
                  src={achievement.attached_file}
                  alt={achievement.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{achievement.title}</h5>
                </div>
                <div className="achievement-hover">
                  <p className="achievement-description">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievement;
