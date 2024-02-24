import React from "react";

const Footer = () => {
  const Today = new Date();
  return (
    <footer className="Footer">
      <p>Copyright &copy; 25/3/2019 {Today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
