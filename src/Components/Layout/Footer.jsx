import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black-200 text-center py-6 border-t border-gray-800">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Mohammed Nishad. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
