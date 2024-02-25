"use client";

import React, { useState } from "react";

type hardSkillType = {
  icon: string;
  text: string;
};
type softSkillType = {
  icon: string;
  text: string;
};
type SkillsType = {
  soft: softSkillType[];
  hard: hardSkillType[];
};

const Skills: React.FC<{ data: SkillsType | any }> = ({ data }) => {
  console.log(data);
  const [activeTab, setActiveTab] = useState("soft");
  console.log("activeTab", data[activeTab]);
  const setBg = (active: string) =>
    activeTab === active ? "bg-yellow" : "bg-grey";
  const setAlinment = (active: string) =>
    active === "soft" ? "text-left" : "text-right";

  const tabs = (
    <div className="flex">
      {["soft", "hard"].map((el: string, i: number) => {
        return (
          <button
            key={i}
            type="button"
            className={`btn ${setBg(el)} ${setAlinment(el)} font-bold`}
            onClick={() => setActiveTab(el)}
          >
            {el} Skills
          </button>
        );
      })}
    </div>
  );

  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
        activeTab === "soft" ? "justify-start" : "justify-center items-center"
      }`}
    >
      {data[activeTab].map((el: any, i: number) => (
        <li key={i} className=" skill">
          <span>{el.icon}</span>
          {el.text}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="mt-12">
      {tabs}
      {content}
    </div>
  );
};

export default Skills;
