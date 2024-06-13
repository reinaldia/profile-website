"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import socialsData from "../data/socialsData";

const SocialSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m always excited to connect and expand my network! Feel free to
          reach out anytime, whether you have a question, want to discuss, or
          simply want to say hello. I&apos;m looking forward to engaging with
          you and will do my best to respond promptly.
        </p>
        <div className="socials flex flex-row gap-2 items-center">
          {socialsData.map((social) => (
            <Link
              key={social.id}
              href={social.link}
              title={social.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.image}
                alt={social.alt}
                width={social.size}
                height={social.size}
              />
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SocialSection;
