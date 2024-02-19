interface PersonalDataType {
    name:string;
    role:string;
    education:string[],
    contactLinks:string[]
}


export const PersonalData:PersonalDataType = {
    name:"Saud Ahmed",
    role:"Software Engineer",
    education:[
        "Mehran UET – BE Software Engineering → Sep 2019 - Nov 2023",
		"Govt. Boys Degree College – Intermediate (Pre-Engineering) → April 2017 - May 2019",
    ],
    contactLinks:[
        "mailto:emailto:saudahmed70434@gmail.com",
        "https://www.linkedin.com/in/saud-ahmed-b20a8b206/",
        "https://wa.me/+923173926193",
    ]
}

const aboutMe = {
    title:'About Me',
    body:[
        "As a software engineer, I am deeply passionate about leveraging technology to create meaningful solutions and drive positive change. With a solid foundation in computer science, I possess a versatile skill set encompassing both technical expertise and effective communication abilities",
        ""
    ]
}