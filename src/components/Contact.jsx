import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/contact", formData);
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "An error occurred.");
      } else {
        toast.error("Failed to send the message. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <ToastContainer />
        <h2 className="text-center mb-3">Contact Me</h2>
        <p className="text-center mt-2" style={{ fontSize: "1.1rem" }}>
          Have a question or want to work together? Reach out!
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-6 col-md-8">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group mb-4">
                <label htmlFor="name" className="form-label">
                  Your Name <span className="required">*</span>
                </label>
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

              <div className="form-group mb-4">
                <label htmlFor="email" className="form-label">
                  Your Email <span className="required">*</span>
                </label>
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

              <div className="form-group mb-4">
                <label htmlFor="phone" className="form-label">
                  Your Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="subject" className="form-label">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-control"
                  placeholder="Enter the subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="5"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn submit-btn"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
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
