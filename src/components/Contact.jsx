import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css"; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-3">Contact Me</h2>
        <p className="text-center mt-2" style={{ fontSize: '1.1rem' }}>
          Have a question or want to work together? Reach out!
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-6 col-md-8">
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name Input */}
              <div className="form-group mb-4">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-group mb-4">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Description Input */}
              <div className="form-group mb-4">
                <label htmlFor="description" className="form-label">Message</label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  rows="5"
                  placeholder="Write your message"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn submit-btn"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
