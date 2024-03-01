
import React from "react";
import { Twitter } from "./icons/twitter";
import Link from "next/link";
import { Envelope } from "./icons/envlop";
import { Linkedin } from "./icons/linkedin";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";

interface PersonalDataType {
  name: string;
  role: string;
  education: string[];
  contactLinks: string[];
}

const Sidebar: React.FC<{ data: PersonalDataType }> = ({ data }) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col  content-between w-full h-auto sm:h-screen sm:justify-around sm:w-4/12 sm:fixed">
      <div className="flex flex-col p-10 items-center text-white">
        <Image priority className="rounded-full h-full mb-6" src="/profile.jpg" height={300} width={300} alt="saud_ahmed.profile" aria-label="saud_ahmed.profile"/>
        <h1 className=" text-yellow">
          {name}
        </h1>
        <h2 className="mb-6 ">
          {role}
        </h2>
        <div className="flex flex-col justify-start">

        <p className="mb-5 leading-normal tracking-wider">{education[0]}</p>
        <p className="mb-5 leading-normal tracking-wider">{education[1]}</p>
        <div className="text-center mb-4 mt-4 sm:mt-8">
        </div>
          <h3 className=" mx-auto">
            Contact me
          </h3>
          <div className="flex flex-row justify-center gap-2">
            <Link href={contactLinks[0]} aria-label="">
              <Envelope className={"icons-contactme"} />
            </Link>
            <Link href={contactLinks[1]} aria-label="">
              <Twitter className={"icons-contactme"} />
            </Link>
            <Link href={contactLinks[2]} aria-label="">
              <Linkedin className={"icons-contactme"} />
            </Link>
            <Link href={contactLinks[3]} aria-label="">
              <IoLogoWhatsapp className="icons-contactme" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
