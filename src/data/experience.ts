export interface WorkExperience {
	role: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string;
	highlights: string[];
}

export interface TAExperience {
	course: string;
	instructor: string;
	term: string;
}

export interface Honor {
	title: string;
	year: number;
	description: string;
	emoji: string;
}

export interface OlympiadTeaching {
	role: string;
	years: string;
	description: string;
}

export interface ExperienceData {
	work: WorkExperience[];
	ta: TAExperience[];
	honors: Honor[];
	olympiadTeaching: OlympiadTeaching[];
}

export const experience: ExperienceData = {
	work: [
		{
			role: "Software Engineer",
			company: "Tabdeal",
			location: "Tehran, Iran",
			startDate: "January 2025",
			endDate: "January 2026",
			description:
				"Developed and maintained high-performance Django backend services for a cryptocurrency exchange platform. Contributed to infrastructure design and operations, including Nginx configuration, Kubernetes cluster management, and system monitoring with Kibana and Grafana to ensure scalability, reliability, and performance.",
			highlights: [
				"Developed and maintained scalable Django backend services",
				"Designed and optimized Nginx configurations for high-performance workloads",
				"Managed Kubernetes clusters and deployment workflows",
				"Implemented monitoring and observability using Kibana and Grafana",
				"Collaborated with cross-functional teams to improve system reliability and operational efficiency",
			],
		},
		{
			role: "Software Engineer Intern",
			company: "Divar",
			location: "Tehran, Iran",
			startDate: "Summer 2021",
			endDate: "Summer 2021",
			description:
				"Learned various technologies including Django/Python, Docker, and Kubernetes. Designed a simple website to benefit from payment services.",
			highlights: [
				"Learned Django/Python, Docker, and Kubernetes",
				"Designed a website with payment services (balance increase, transfer, SIM card recharge)",
			],
		},
		{
			role: "Software Engineer Intern",
			company: "Asa co",
			location: "Tehran, Iran",
			startDate: "Winter 2021",
			endDate: "Winter 2021",
			description:
				"Learned C#, React/JavaScript, and SQL. Designed a simple website for building management.",
			highlights: [
				"Learned C#, React/JavaScript, and SQL",
				"Designed a building management website",
			],
		},
	],
	ta: [
		{
			course: "Design of Algorithms",
			instructor: "Dr. Hamidreza Zarrabi-Zade",
			term: "Fall 2022",
		},
		{
			course: "Data Structures and Algorithms",
			instructor: "Dr. Mahdi Safarnejad",
			term: "Fall 2022",
		},
		{
			course: "Statistics and Probability",
			instructor: "Dr. Ali Sharifi-Zarchi",
			term: "Fall 2022",
		},
		{
			course: "Design of Algorithms",
			instructor: "Dr. Mohammad-Ali Abam",
			term: "Spring 2023",
		},
		{
			course: "Database Design",
			instructor: "Dr. Mojtaba Varmazyar",
			term: "Spring 2023",
		},
		{
			course: "Game Theory",
			instructor: "Marzie Nilipour",
			term: "Spring 2023",
		},
		{
			course: "Data Structures and Algorithms",
			instructor: "Dr. Mohammad-Ali Abam",
			term: "Fall 2023",
		},
		{
			course: "Design of Algorithms",
			instructor: "Dr. Hamidreza Zarrabi-Zade",
			term: "Fall 2023",
		},
		{
			course: "Data Structures and Algorithms",
			instructor: "Dr. Mohammad-Ali Abam",
			term: "Spring 2024",
		},
		{
			course: "Design of Algorithms",
			instructor: "Dr. Mohammad-Ali Abam",
			term: "Spring 2024",
		},
		{
			course: "Algorithmic Game Theory",
			instructor: "Dr. Masoud Seddighin",
			term: "Spring 2024",
		},
		{
			course: "Convex Optimization",
			instructor: "Dr. Amir Najafi",
			term: "Spring 2024",
		},
	],
	honors: [
		{
			title: "Bronze Medal — ICPC Regional Contest, Tehran Site",
			year: 2022,
			description: "Third place in the regional ACM ICPC programming contest.",
			emoji: "🥉",
		},
		{
			title: "Gold Medal — Iran National Olympiad in Informatics",
			year: 2019,
			description: "First place in the national informatics competition.",
			emoji: "🥇",
		},
		{
			title: "Bronze Medal — Iran National Olympiad in Informatics",
			year: 2018,
			description: "Third place in the national informatics competition.",
			emoji: "🥉",
		},
	],
	olympiadTeaching: [
		{
			role: "Olympiad in Artificial Intelligence Teacher at Allameh Helli 10 High School",
			years: "2025–Present",
			description:
				"Teaching Artificial Intelligence Olympiad topics to high school students and mentoring them in machine learning, mathematics, algorithms, and competition-oriented problem solving.",
		},
		{
			role: "Olympiad in Informatics Teacher",
			years: "2020–2024",
			description:
				"Teaching excellent high school students to participate in International Olympiad in Informatics at Farzanegan 2 High School, Dastgheib High School, Farzanegan Olympiad Club, and Allameh Helli 10 High School.",
		},
	],
};
