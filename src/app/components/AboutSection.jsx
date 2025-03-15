"use client";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import useLocales from "../hooks/useLocales";
import Image from "next/image";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div layout transition={{ duration: 0.3 }}>
          <Image
            src="/images/about-image.jpg"
            alt="About Image"
            width={500}
            height={500}
          />
        </motion.div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify px-4 mb-2">
            {
              "Halo! Saya Ghazi Adila Ghifari, seorang siswa yang berdedikasi dengan minat dalam pengembangan web. Melalui studi saya, saya telah memperoleh keterampilan dalam berbagai framework dan ORM, serta mahir dalam pengembangan front-end maupun back-end. Selain itu, eksplorasi saya dalam UI/UX dan desain grafis meningkatkan kemampuan saya dalam menciptakan solusi digital yang menarik dan ramah pengguna."
            }
          </p>
          <p className="text-base lg:text-lg text-justify px-4">
            {
              "Saya juga memiliki keahlian dalam menggunakan aplikasi Microsoft Office seperti Word, Excel, dan PowerPoint, yang mendukung produktivitas dan kemampuan presentasi saya. Melengkapi keterampilan teknis saya, saya juga telah mengembangkan keterampilan lunak melalui peran saya sebagai sekretaris. Saya unggul dalam kerja tim, pemecahan masalah, dan manajemen waktu."
            }
          </p>

          <div className="mt-8">
            <div className="pl-2 flex flex-col gap-2 border-s-2 relative">
              <div className="relative pl-2 flex flex-col justify-center before:content-['•'] before:absolute before:-left-[0.8125rem]">
                <p>(2022-Now)</p>
                <p>SMKN 4 Bandung</p>
                <i>Rekayasa Perangkat Lunak</i>
              </div>
              <div className="relative pl-2 flex flex-col justify-center before:content-['•'] before:absolute before:-left-[0.8125rem]">
                <p>(2019-2022)</p>
                <p>SMPN 8 Bandung</p>
              </div>
              <div className="relative pl-2 flex flex-col justify-center before:content-['•'] before:absolute before:-left-[0.8125rem]">
                <p>(2013-2019)</p>
                <p>SDN 172 Andir Kidul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
