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
        "https://www.linkedin.com/in/saud-ahmed-b20a8b206/",
        "saudahmed70434@gmail.com",
        "+923173926193",
    ]
}