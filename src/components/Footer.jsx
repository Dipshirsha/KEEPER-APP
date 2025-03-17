import React from "react";
import "./Note.css"; // Reuse the same CSS file

const currentyear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">Copyright © {currentyear}</p>
    </footer>
  );
}

export default Footer;
