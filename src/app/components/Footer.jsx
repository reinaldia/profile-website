import React from "react";
import SocialSection from "./SocialSection";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] z-10 border-l-transparent border-r-transparent text-white">
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 py-8 px-12">
        <SocialSection />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
