import Image from "next/image";
import Sidebar from "./components/sidebar";
import AboutMe from "./components/about-me";
import { aboutMe, skills } from "@/page_data/page";

export default function Home() {
  return (
    <main className="">
      <AboutMe data = {aboutMe} skillsData = {skills}/>
      
      Page
    </main>
  );
}
