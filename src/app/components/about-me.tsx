import React from "react";
import Skills from "./skills";


interface AboutMEDataType {
  title: string;
  body: string[];
}





type hardSkillType = {
  icon:string,
  text:string,
}
type softSkillType = {
  icon:string,
  text:string,
}
interface SkillsType {
	soft: softSkillType[]
	hard: hardSkillType[]
};




const AboutMe: React.FC<{ data: AboutMEDataType, skillsData:SkillsType }> = ({ data, skillsData}) => {
  const { title, body } = data;
  return (
    <section className="">
      <h2 className=" font-bold">{title}</h2>
      <div className="space-y-5">
        {body.map((el: string, i: number) => (
          <p key={i} className=" tracking-normal leading-normal">{el}</p>
        ))}
      </div>
      <Skills data={skillsData}/>
    </section>
  );
};

export default AboutMe;
