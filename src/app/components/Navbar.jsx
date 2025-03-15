"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import LogoIcon from "../../../public/icons/logo-icon.svg";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Skill",
    path: "/skill",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);
  const indicatorRef = useRef(null);
  const navRef = useRef(null);
  const linkRefs = useRef([]);

  const cleanLink = (link) => (link ? link.replace(/^\/+/, "") : "");
  const updateIndicator = useCallback(() => {
    if (
      !indicatorRef.current ||
      linkRefs.current.length === 0 ||
      !navRef.current
    )
    return;
    
    const currentLink = hoveredLink !== null ? cleanLink(hoveredLink) : cleanLink(activeLink);
    const index = navLinks.findIndex((link) => cleanLink(link.path) === currentLink);


    if (index !== -1 && linkRefs.current[index]) {
      const linkEl = linkRefs.current[index];
      const linkRect = linkEl.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();

      indicatorRef.current.style.width = `${linkRect.width}px`;
      indicatorRef.current.style.left = `${
        linkRect.left - navRect.left - 31
      }px`;

      if (hoveredLink !== null && hoveredLink !== activeLink) {
        indicatorRef.current.style.backgroundColor = "#ADB7BE";
      } else {
        indicatorRef.current.style.backgroundColor = "#FFFFFF";
      }

      indicatorRef.current.style.opacity = "1";
    } else {
      indicatorRef.current.style.opacity = "0";
    }
  }, [activeLink, hoveredLink]);

  useEffect(() => {
    const path = window.location.pathname.substring(1);
    setActiveLink(path || "");
  }, []);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const handleLinkHover = (index) => {
    setHoveredLink(navLinks[index].path);
  };

  const handleNavContainerLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav className="fixed mx-auto p-2 border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center md:justify-center mx-auto px-4 py-2">
        {/* <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src={LogoIcon} alt="Logo Icon" width={24} height={24} />
        </Link> */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className="menu hidden md:block md:w-auto relative"
          id="navbar"
          ref={navRef}
          onMouseLeave={handleNavContainerLeave}
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 relative">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`cursor-pointer block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 transition-colors duration-300 ${
                    cleanLink(activeLink) === cleanLink(link.path)
                      ? "text-white"
                      : cleanLink(hoveredLink) !== null && cleanLink(hoveredLink) !== cleanLink(link.path)
                      ? "text-[#555B61]"
                      : "text-[#555B61] hover:text-[#ADB7BE]"
                  }`}
                  onClick={() => handleLinkClick(link.path)}
                  onMouseEnter={() => handleLinkHover(index)}
                  // Remove onMouseLeave here to keep the hover state
                  ref={(el) => (linkRefs.current[index] = el)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <div
              ref={indicatorRef}
              className="absolute -bottom-1 h-0.5 bg-white transition-all duration-300 ease-in-out opacity-0"
              style={{ left: 0, width: 0 }}
            />
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
