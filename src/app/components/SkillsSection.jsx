"use client";
import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import TabButton from "./TabButton";
import skillsData from "../data/skillsData";

const SkillSection = () => {
  const skillTab = [
    { title: "Tech Stack", id: "techs" },
    { title: "Tools", id: "tools" },
  ];

  const [tab, setTab] = useState("techs");
  const [isPending, startTransition] = useTransition();
  const [expandedSkill, setExpandedSkill] = useState(null);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const toggleAccordion = (index) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  const filteredSkills = skillsData.filter((skill) =>
    skill.category.includes(tab)
  );

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="flex flex-row justify-start mt-8">
            {skillTab.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>

          {/* List Skill dengan Fixed Height */}
          <div className="mt-8">
            <div className="pl-2 flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 px-4 justify-items-start">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    className="border-2 border-gray-400 p-4 rounded-lg w-full h-fit"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="w-full mr-4 flex flex-col md:flex-row gap-4 justify-between">
                        <div className="flex items-center gap-4">
                          {skill.image && (
                            <Image
                              src={skill.image}
                              alt="skill image"
                              width={24}
                              height={24}
                            />
                          )}
                          <h3 className="text-xs lg:text-base font-semibold">
                            {skill.name}
                          </h3>
                        </div>
                        <span className="w-[6rem] text-xs md:text-sm text-center py-1 px-3 border-2 border-gray-300">
                          {skill.proficiency}
                        </span>
                        {/* Ikon panah dengan animasi rotasi */}
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedSkill === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        padding: 0,
                        marginTop: 0,
                      }}
                      animate={{
                        height: expandedSkill === index ? "auto" : 0,
                        opacity: expandedSkill === index ? 1 : 0,
                        padding: expandedSkill === index ? "12px" : "0px",
                        marginTop: expandedSkill === index ? "12px" : "0px",
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-gray-800 rounded-lg"
                    >
                      {skill.description && Array.isArray(skill.description) ? (
                        <ul className="list-disc list-inside text-xs md:text-sm text-gray-300">
                          {skill.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs md:text-sm text-gray-300">
                          {skill.description}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillSection;
