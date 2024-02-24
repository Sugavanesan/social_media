import React from "react";

const Footer = () => {
  const Today = new Date();
  return (
    <footer className="Footer">
      <p>Copyright &copy; 22/2/2024 {Today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
