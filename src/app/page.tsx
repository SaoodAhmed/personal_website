import Image from "next/image";
import Sidebar from "./components/sidebar";
import AboutMe from "./components/about-me";
import { aboutMe, professionalData, skills } from "@/page_data/page";
import ProfessionalExperience from "./components/professional-experience";

export default function Home() {
  return (
    <main className="">
      <AboutMe data = {aboutMe} skillsData = {skills}/>
      <ProfessionalExperience data={professionalData}/>
      
      
      
    </main>
  );
}
