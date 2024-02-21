import Image from "next/image";
import Sidebar from "./components/sidebar";
import AboutMe from "./components/about-me";
import { aboutMe } from "@/page_data/page";

export default function Home() {
  return (
    <main className="bg-green">
      <AboutMe data = {aboutMe}/>
      
      Page
    </main>
  );
}
