import React from "react";

const Footer = () => {
  const Today = new Date();
  return (
    <footer className="Footer">
      <p>Copyright &copy; commit 1 {Today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
