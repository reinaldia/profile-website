import React from "react";
import Link from "next/link";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            activeClass="active"
            href={link.path}
            className="cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
