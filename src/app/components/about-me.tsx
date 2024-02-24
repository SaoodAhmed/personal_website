import React from "react";
import Skills from "./skills";

interface AboutMEDataType {
  title: string;
  body: string[];
}

const AboutMe: React.FC<{ data: AboutMEDataType }> = ({ data, Skills }) => {
  const { title, body } = data;
  return (
    <section className="">
      <h2 className=" font-bold">{title}</h2>
      <div className="space-y-5">
        {body.map((el: string, i: number) => (
          <p key={i} className=" tracking-normal leading-normal">{el}</p>
        ))}
      </div>
      <Skills data={Skills}/>
    </section>
  );
};

export default AboutMe;
