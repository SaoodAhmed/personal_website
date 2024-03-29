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
    "mailto:emailto:saudahmed70434@gmail.com",
	"https://twitter.com/SAUDAHM46283400",
    "https://www.linkedin.com/in/saud-ahmed-b20a8b206/",
    "https://wa.me/+923173926193",
  ],
};

export const aboutMe: AboutMEDataType = {
  title: "About Me",
  body: [
    "As a software engineer, I am deeply passionate about leveraging technology to create meaningful solutions and drive positive change. With a solid foundation in computer science, I possess a versatile skill set encompassing both technical expertise and effective communication abilities",
    "I'm committed to continuous learning and staying updated with the latest industry trends. Whether it's tackling complex algorithms or finding creative solutions to UI/UX challenges, I embrace every opportunity to expand my skill set.",
  ],
};

export const skills = {
  soft: [
    { icon: "👂🏼", text: "Active Listening" },
    { icon: "💬", text: "Effective Communication" },
    { icon: "👥", text: "Collaboration" },
    { icon: "⽓", text: "Teamwork" },
    { icon: "💡", text: "Creative Problem Solving" },
    { icon: "⌛️", text: "Time management" },
  ],
  hard: [
    { icon: "N ➡️  ", text: "Next.js" },
    { icon: "🚀", text: "React.js" },
    { icon: "🟢JS  ", text: "Node.js" },
    { icon: "💾", text: "PostgreSQL" },
    { icon: "🧠", text: "Sanity (Headless CMS)" },
    { icon: "🎨", text: "Shadcn/ui" },
    { icon: "TW 🌬️ ", text: "Tailwind CSS" },
    { icon: "ʦ", text: "TypeScript" },
    { icon: "💻", text: "Javascript" },
    { icon: "☕", text: "Java" },
    { icon: "🐍", text: "Python" },
    { icon: "📈", text: "Data Structures and Algorithms" },
    { icon: "🔢", text: "C++" },
    { icon: "🔌", text: "API's" },
    { icon: "📈", text: "SEO" },
    { icon: "🌧️", text: "Drizzle ORM" },
    { icon: "☁️", text: "Vercel" },
    { icon: "💳", text: "Stripe Payment Method" },
  ],
};


export const professionalData = {
	title: "Professional Experience",
	experiences: [
		{
			role: "Data Scientist, Acme Inc. (2021-Present)",
			description:
				"Design and implement machine learning models to analyze large datasets and drive business decisions. Collaborate with cross-functional teams to develop and launch new products and features. Provide technical guidance and mentorship to junior data scientists. Conduct regular presentations to stakeholders on the findings and insights generated from data analysis.",
			current: true,
		},

		{
			role: "Machine Learning Engineer, XYZ Corp. (2019-2021)",
			description:
				"Designed and implemented advanced machine learning algorithms to improve predictive accuracy and performance. Built and maintained scalable machine learning infrastructure using cloud computing platforms. Conducted data exploratory analysis to identify potential use cases and opportunities. Participated in regular code reviews to maintain high quality standards.",
			current: false,
		},
		{
			role: "Machine Learning Engineer, ABX Corp. (2020-2021)",
			description:
				"Designed and implemented advanced machine learning algorithms to improve predictive accuracy and performance. Built and maintained scalable machine learning infrastructure using cloud computing platforms. Conducted data exploratory analysis to identify potential use cases and opportunities. Participated in regular code reviews to maintain high quality standards.",
			current: false,
		},
	],
};