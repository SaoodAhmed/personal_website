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
    "Mehran University Of Engineering & Technology – BE in Software Engineering → September 2019 - November 2023",
    "Govt. Boys Degree College – Intermediate (Pre-Engineering) → April 2017 - May 2019",
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
    { icon: "🟢 ", text: "Node.js" },
    { icon: "🐘 ", text: "PostgreSQL" },
    { icon: "🧠 ", text: "CMS(Headless)" },
    { icon: "🎨 ", text: "ShadcnUI/Tailblocks" },
    { icon: "🌬️ ", text: "Tailwind CSS" },
    { icon: "🐍 ", text: "Data Automation(Python)"},
    { icon: "ʦ ", text: "Typescript" },
    { icon: "J͡S ", text: "Javascript" },
    { icon: "☕ ", text: "Java" },
    
    { icon: "🔢 ", text: "C++" },
    { icon: "🔌 ", text: "API's" },
    { icon: "📈 ", text: "SEO" },
    { icon: "🌧️ ", text: "Drizzle(ORM)" },
    { icon: "☁️ ", text: "Vercel" },
    { icon: "🤖 ", text: "Agentic AI(Cont...)" }

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
      "role": "SDE At KENDUIT (Remote) — Nextjs/Reactjs, HTML, CSS, JS, Python(Data Automation/Scraping) (April 2024 - Present)",
      "description": "Learned and implemented interactive layouts for US-based clients including custom WordPress theme development and integration. Contributed to a full-stack project by leveraging advanced front-end development skills. Developed user-friendly, responsive designs optimized for multiple devices. Gained hands-on experience in web scraping using Python libraries such as Selenium, BeautifulSoup, and Requests.",
      "current": true,
      
    },
    {
      "role": "SDE Intern at Webnet — Nextjs/Reactjs, TS/JS, Dynamic Routes, APIs (Jan 2024 - March 2024)",
      "description": "Learned and implemented existing websites on Next.js and explored its latest features (CSR, SSR, SSG, dynamic routing). Created Webnet’s new company website with a responsive front-end, API integration, and dynamic routing.",
      "current": false,
      
    },
    {
      "role": "SDE Intern at PIAIC — Nextjs/Reactjs, TS/JS, APIs, Sanity (June 2022 - July 2023)",
      "description": "Implemented advanced Next.js features (SSR, SSG, CSR, dynamic routing) and headless CMS integrations (Sanity, Contentful). Developed responsive, user-friendly front-ends and worked on a full-stack e-commerce project (authentication, search, cart, payments). Managed database tasks and built front-end components using Next.js/React.js, Tailwindcss, Shadcn UI, TS/JS, PostgreSQL, and Sanity.",
      "current": false,
      
    },
  ],
};