interface PersonalDataType {
  name: string;
  role: string;
  education: string[];
  contactLinks: string[];
}

interface AboutMEDataType {
  title: string;
  body: string[];
}

export const PersonalData: PersonalDataType = {
  name: "Saud Ahmed",
  role: "Software Engineer",
  education: [
    "Mehran UET – BE in Software Engineering → Sep 2019 - Nov 2023",
    "Govt. Boys Degree College – Interm. (Pre-Engr.) → April 2017 - May 2019",
  ],
  contactLinks: [
    "https://www.linkedin.com/in/saud-ahmed-b20a8b206/",
    "https://github.com/SaoodAhmed?tab=repositories",
    "mailto:saudahmed70434@gmail.com",
    "https://wa.me/+923173926193",
    "https://twitter.com/SAUDAHM46283400",
  ],
};

export const aboutMe: AboutMEDataType = {
  title: "About Me",
  body: [
    "As a software engineer, I am deeply passionate about leveraging technology to create meaningful solutions and drive positive change. With a solid foundation in software engineering field, I possess a versatile skill set encompassing both technical expertise and effective communication abilities",
    "I'm committed to continuous learning and staying updated with the latest industry trends. Whether it's tackling complex algorithms or finding creative solutions to UI/UX challenges, I embrace every opportunity to expand my skill set.",
  ],
};

export const skills = {

  hard: [
    { icon: "⚛️ ", text: "Next.js/React.js" },
    { icon: "🧠", text: "AI-Driven Development" },
    { icon: "🧩", text: "CMS (Headless)" },
{ icon: "🐍 ", text: "Data Automation(Python)" },
{ icon: "⚙️", text: "n8n (Workflow Automation)" },

    { icon: "🟢 ", text: "Node.js" },
    
    { icon: "🐘 ", text: "PostgreSQL" },
    { icon: "🎨 ", text: "ShadcnUI/Tailblocks" },
    { icon: "🔁 ", text: "Redux.js" },
    { icon: "🌬️ ", text: "Tailwind CSS" },
    
    { icon: "ʦ ", text: "Typescript" },
    { icon: "J͡S ", text: "Javascript" },
    { icon: "🌐 ", text: "WordPress" },
    { icon: "☕ ", text: "Java" },

    { icon: "🔢 ", text: "C++" },
    { icon: "⚡", text: "FastAPI" },
   
   

  ],
  soft: [
    { icon: "💬 ", text: "Effective Communication" },
    { icon: "👥 ", text: "Collaboration" },
    { icon: "⽓ ", text: "Teamwork" },
    { icon: "💡 ", text: "Creative Problem Solving" },
    { icon: "👂🏼 ", text: "Active Listening" },
    { icon: "⌛️ ", text: "Time management" },
  ],
};


export const professionalData = {
  title: "Professional Experience",
  experiences: [
    {
      "role": "SDE At KENDUIT (US Remote) — April 2024 - Present",
      "description": "Developed responsive websites using HTML, CSS & js also, converted existing static HTML into Next.js/React.js applications. Built end-to-end sites from scratch with custom WordPress theme development and integration. Implemented data automation and web-scraping pipelines in Python using Selenium, BeautifulSoup, and Requests to extract, clean, and integrate data. Collaborated on full-stack projects, optimized cross-device performance and accessibility, and delivered interactive, user-friendly layouts.",
      "current": true
    },

    {
      "role": "SDE Intern at Webnet — Jan 2024 - March 2024",
      "description": "Learn and Implement existing websites from HTML to Reactjs/Nextjs also, explored Nextjs latest features e.g, CSR, SSR, SSG, Dynamic Routes also, integrate API's.",
      "current": false,

    },
    {
      "role": "SDE Intern at PIAIC — June 2022 - July 2023",
      "description": "Learn & Explore advanced Nextjs/Reactjs features e.g, SSR, SSG, CSR, Dyanmic Routes, API's along with Headless CMS integrations(Sanity, Contentful). Developed responsive, user-friendly Figma layouts into Nextjs/Reactjs also, worked on a full-stack E-Commerce projects (Authentication, Filtering, Cart, Payment methods, Api's integration). Managed database tasks & built UI components using Next.js/React.js, Tailwindcss, Shadcn UI/Tailblock, TS/JS, PostgreSQL and Sanity.",
      "current": false,

    },
  ],
};