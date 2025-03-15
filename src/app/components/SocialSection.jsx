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
      className="gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">{"Let's Connect"}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {
            "Saya selalu bersemangat untuk terhubung dan memperluas jaringan! Jangan ragu untuk menghubungi saya kapan saja, baik jika Anda memiliki pertanyaan, ingin berdiskusi, atau sekadar ingin menyapa. Saya menantikan untuk berinteraksi dengan Anda dan akan berusaha merespons secepat mungkin."
          }
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
