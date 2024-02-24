"use client";

import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("soft");
  const setBg = (active: string) =>
    activeTab === active ? "bg-yellow" : "bg-grey";
  const setAlinment = (active: string) =>
     active === "soft" ? "text-left" : "text-right";

  return (
    <div>
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
      <ul>

      </ul>
    </div>
  );
};

export default Skills;
