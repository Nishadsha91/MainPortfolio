import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black text-center py-6 border-t border-gray-800">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Mohammed Nishad. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
