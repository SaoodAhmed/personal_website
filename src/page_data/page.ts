interface PersonalDataType {
    name:string;
    role:string;
    education:string[],
    contactLinks:string[]
}



interface AboutMEDataType {
    title:string;
    body:string[]

}


export const PersonalData:PersonalDataType = {
    name:"Saud Ahmed",
    role:"Software Engineer",
    education:[
        "Mehran University Of Engineering & Technology – BE Software Engineering → September 2019 - November 2023",
		"Govt. Boys Degree College – Intermediate (Pre-Engineering) → April 2017 - May 2019",
    ],
    contactLinks:[
        "mailto:emailto:saudahmed70434@gmail.com",
        "https://www.linkedin.com/in/saud-ahmed-b20a8b206/",
        "https://wa.me/+923173926193",
    ]
}

export const aboutMe:AboutMEDataType = {
    title:'About Me',
    body:[
        "As a software engineer, I am deeply passionate about leveraging technology to create meaningful solutions and drive positive change. With a solid foundation in computer science, I possess a versatile skill set encompassing both technical expertise and effective communication abilities",
        "I'm committed to continuous learning and staying updated with the latest industry trends. Whether it's tackling complex algorithms or finding creative solutions to UI/UX challenges, I embrace every opportunity to expand my skill set."
    ]
}

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
		{ icon: "N ➡️", text: "Next.js" },
		{ icon: "🚀", text: "React.js" },
		{ icon: "🟢JS", text: "Node.js" },
		{ icon: "T🌬️W", text: "Tailwind CSS" },
		{ icon: "ʦ", text: "TypeScript" },
		{ icon: "💻", text: "TypeScript" },
		{ icon: "☕", text: "Java" },
		{ icon: "🐍", text: "Python" },
		{ icon: "📈", text: "SEO" },
		{ icon: "💾", text: "PostgreSQL" },
		{ icon: "📈", text: "Data Structures and Algorithms" },
		{ icon: "🎨", text: "Shadcn/ui" },
		{ icon: "🧠", text: "Sanity(Headless CMS)" },
	],
};
