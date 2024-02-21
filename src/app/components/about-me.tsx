import React from "react";

interface AboutMEDataType {
  title: string;
  body: string[];
}

const AboutMe: React.FC<{ data: AboutMEDataType }> = ({ data }) => {
  const { title, body } = data;
  return (
    <>
      <h1>{title}</h1>
      {
        body.map((el:string, i:number)=>(
            <p key={i}>{el}</p>
        ))
      }
    </>
  );
};

export default AboutMe;
