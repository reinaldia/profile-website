"use client";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FilterTag from "./FilterTag";
import TabButton from "./TabButton";
import skillsData from "../data/skillsData";

const AboutSection = () => {
  const skillTags = ["Tech Stack", "Tools"];

  const [tag, setTag] = useState("Tech Stack");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredSkills = skillsData.filter((skill) => skill.tag.includes(tag));

  const aboutTab = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="pl-2 flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            {skillTags.map((tagItem, index) => (
              <FilterTag
                key={index}
                onClick={handleTagChange}
                name={tagItem}
                isSelected={tag === tagItem}
                filterType={"skills"}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-8 px-4 max-h-[16rem] overflow-y-auto">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="mt-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <div className="flex flex-row gap-4 items-center">
                  <h3>{skill.name}</h3>
                  {skill.image && (
                    <Image
                      src={skill.image}
                      alt="skill image"
                      width={24}
                      height={24}
                    />
                  )}
                </div>
                <div className="flex items-center">
                  <div className="w-[12rem] h-2 bg-gray-500 rounded-full">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 2 }}
                    ></motion.div>
                  </div>
                  <div className="ml-2 font-bold text-white">{skill.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
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
      ),
    },
  ];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

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
            src="/images/about-image.png"
            alt="About Image"
            width={500}
            height={500}
          />
        </motion.div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg px-4 max-h-[12rem] overflow-y-auto">
            Hello! I&apos;m Ghazi Adila Ghifari, a dedicated student with a
            passion for web development. Through my studies, I&apos;ve acquired
            proficiency in various frameworks and ORMs, adept at both front-end
            and back-end development. Furthermore, my exploration of UI/UX and
            graphic design enhances my ability to create visually appealing and
            user-friendly digital solutions. Additionally, I have proficiency in
            using Microsoft Office applications such as Word, Excel, and
            PowerPoint, enhancing productivity and presentation capabilities.
            Complementing my technical skills are the soft skills I&apos;ve
            cultivated through my role as a secretary. I excel in teamwork,
            problem-solving, and time management, attributes that contribute to
            my effectiveness in collaborative projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {aboutTab.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {aboutTab.find((t) => t.id === tab)?.content || null}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
