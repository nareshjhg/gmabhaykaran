import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-center text-gray-400 text-sm px-4">
      © {new Date().getFullYear()} Grandmaster Abhaykaran. All rights reserved.
    </footer>
  );
};

export default Footer;
