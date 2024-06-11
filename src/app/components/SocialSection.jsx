"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import socialsData from "../data/socialsData"

const SocialSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
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
    </section>
  );
};

export default SocialSection;
