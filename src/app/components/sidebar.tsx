
import React from "react";
import { Twitter } from "./icons/twitter";
import Link from "next/link";
import { Envelope } from "./icons/envlop";
import { Linkedin } from "./icons/linkedin";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";

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
        <Image priority className="rounded-full h-full mb-6" src="/profile.png" height={300} width={300} alt="saud_ahmed.profile" aria-label="saud_ahmed.profile" />
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
          <h2 className=" mx-auto mb-2">
            Contact me
          </h2>
          <div className="flex flex-row justify-center gap-2">
            <Link href={contactLinks[0]} aria-label="">
              <Linkedin className={"icons-contactme"} />
            </Link>
            <Link href={contactLinks[1]} aria-label="">
              <BsGithub className={"icons-contactme"} />
            </Link>
            <Link href={contactLinks[4]} aria-label="">
              <Twitter className={"icons-contactme"} />
            </Link>
            <Link href={contactLinks[2]} aria-label="">
              <Envelope className={"icons-contactme"} />
            </Link>
            <Link href={contactLinks[3]} aria-label="">
              <IoLogoWhatsapp className="icons-contactme" />
            </Link>

          </div>
          <Link
            href="/Saud_Ahmed_s_Résumé.pdf"
            download="Saud_Ahmed_s_Résumé.pdf"
            aria-label="Download CV"
            rel="noopener noreferrer"
            className="inline-flex mx-auto  mt-2 items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-600  text-white text-sm font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
          >
            <HiOutlineDownload className={"text-2xl"} />
            <p >Download CV</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
