import React from "react";

const Footer = () => {
  const Today = new Date();
  return (
    <footer className="Footer">
      <p>Copyright &copy; commit 3 {Today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
