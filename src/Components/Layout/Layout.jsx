import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "../../Cursor/CustomCursor";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-200 min-h-screen flex flex-col"  style={{ cursor: "none" }}>
      <CustomCursor/>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}; 

export default Layout;
