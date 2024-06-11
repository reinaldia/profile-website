import React from "react";
import Image from "next/image";
import LogoIcon from "../../../public/icons/logo-icon.svg";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] z-10 border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image src={LogoIcon} alt="Logo Icon" width={24} height={24} />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
