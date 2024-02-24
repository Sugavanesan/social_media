import React from "react";

const Footer = () => {
  const Today = new Date();
  return (
    <footer className="Footer">
      <p>Copyright &copy; 21/2/2019 {Today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
