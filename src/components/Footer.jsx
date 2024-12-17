import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer py-3 text-center text-white">
      <p className="mb-0">
        &copy; 2024{' '}
        <span style={{ color: '#7a7aff' }}>Md Tutul</span>. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
