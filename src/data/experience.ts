export interface WorkExperience {
	role: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string;
	highlights: string[];
	logo?: string;
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
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string;
	highlights: string[];
	logo?: string;
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
			role: "AI Engineer",
			company: "Argoman",
			location: "Tehran, Iran",
			startDate: "January 2026",
			endDate: "Present",
			description:
				"Working on the development, optimization, and deployment of AI systems across multiple ventures within Argoman. Responsible for fine-tuning and adapting machine learning models for production use, designing scalable serving infrastructure, evaluating model performance, and extending model capabilities beyond their original limitations. Collaborate across research and engineering domains to bridge theoretical advances with production-ready AI solutions. Argoman focuses on creating and scaling AI-driven products and startups.",
			highlights: [
				"Fine-tuned and optimized AI models using PyTorch and internal ML frameworks.",
				"Built and deployed scalable AI inference services with FastAPI.",
				"Designed benchmarking systems for evaluating model quality, latency, and reliability.",
				"Improved model serving performance and production scalability.",
				"Extended model capabilities through architectural and algorithmic enhancements.",
				"Bridged research and production by transforming experimental models into deployable AI systems.",
			],
			logo: "/assets/images/argoman.png",
		},
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
			logo: "/assets/images/tabdeal.png",
		},
		{
			role: "Software Engineer Intern",
			company: "Divar",
			location: "Tehran, Iran",
			startDate: "June 2021",
			endDate: "August 2021",
			description:
				"Learned various technologies including Django/Python, Docker, and Kubernetes. Designed a simple website to benefit from payment services.",
			highlights: [
				"Learned Django/Python, Docker, and Kubernetes",
				"Designed a website with payment services (balance increase, transfer, SIM card recharge)",
			],
			logo: "/assets/images/divar.jpeg",
		},
		{
			role: "Software Engineer Intern",
			company: "Asa co",
			location: "Tehran, Iran",
			startDate: "December 2021",
			endDate: "February 2022",
			description:
				"Learned C#, React/JavaScript, and SQL. Designed a simple website for building management.",
			highlights: [
				"Learned C#, React/JavaScript, and SQL",
				"Designed a building management website",
			],
			logo: "/assets/images/asa.jpeg",
		},
	],
	ta: [
		{
			course: "Convex Optimization",
			instructor: "Dr. Amir Najafi",
			term: "Spring 2024",
		},
		{
			course: "Algorithmic Game Theory",
			instructor: "Dr. Masoud Seddighin",
			term: "Spring 2024",
		},
		{
			course: "Design of Algorithms",
			instructor: "Dr. Mohammad-Ali Abam",
			term: "Spring 2024",
		},
		{
			course: "Data Structures and Algorithms",
			instructor: "Dr. Mohammad-Ali Abam",
			term: "Spring 2024",
		},
		{
			course: "Design of Algorithms (Practical Head Teaching Assistant)",
			instructor: "Dr. Hamidreza Zarrabi-Zade",
			term: "Fall 2023",
		},
		{
			course: "Data Structures and Algorithms",
			instructor: "Dr. Mohammad-Ali Abam",
			term: "Fall 2023",
		},
		{
			course: "Game Theory",
			instructor: "Marzie Nilipour",
			term: "Spring 2023",
		},
		{
			course: "Database Design",
			instructor: "Dr. Mojtaba Varmazyar",
			term: "Spring 2023",
		},
		{
			course: "Design of Algorithms",
			instructor: "Dr. Mohammad-Ali Abam",
			term: "Spring 2023",
		},
		{
			course: "Statistics and Probability",
			instructor: "Dr. Ali Sharifi-Zarchi",
			term: "Fall 2022",
		},
		{
			course: "Data Structures and Algorithms",
			instructor: "Dr. Mahdi Safarnejad",
			term: "Fall 2022",
		},
		{
			course: "Design of Algorithms",
			instructor: "Dr. Hamidreza Zarrabi-Zade",
			term: "Fall 2022",
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
			role: "Olympiad in Artificial Intelligence Teacher",
			company: "Allameh Helli 10 High School",
			location: "Tehran, Iran",
			startDate: "2025",
			endDate: "Present",
			description:
				"Teaching Artificial Intelligence Olympiad topics to high school students and mentoring them in machine learning, mathematics, algorithms, and competition-oriented problem solving.",
			highlights: [
				"Teaching AI Olympiad topics to high school students",
				"Mentoring students in machine learning and algorithms",
				"Competition-oriented problem solving training",
			],
		},
		{
			role: "Olympiad in Informatics Teacher",
			company: "Farzanegan 2 High School",
			location: "Tehran, Iran",
			startDate: "September 2023",
			endDate: "July 2024",
			description:
				"Teaching excellent high school students to participate in International Olympiad in Informatics.",
			highlights: [
				"Prepared students for the International Olympiad in Informatics",
				"Taught advanced algorithms and data structures",
			],
		},
		{
			role: "Olympiad in Informatics Teacher",
			company: "Dastgheib High School",
			location: "Shiraz, Iran (remote)",
			startDate: "September 2021",
			endDate: "July 2022",
			description:
				"Teaching excellent high school students to participate in International Olympiad in Informatics.",
			highlights: [
				"Prepared students for the International Olympiad in Informatics",
				"Taught advanced algorithms and data structures",
			],
		},
		{
			role: "Olympiad in Informatics Teacher",
			company: "Farzanegan Olympiad Club",
			location: "Mashhad, Iran (remote)",
			startDate: "September 2020",
			endDate: "July 2021",
			description:
				"Teaching excellent high school students to participate in International Olympiad in Informatics.",
			highlights: [
				"Prepared students for the International Olympiad in Informatics",
				"Taught advanced algorithms and data structures",
			],
		},
		{
			role: "Olympiad in Informatics Teacher",
			company: "Allameh Helli 10 High School",
			location: "Tehran, Iran",
			startDate: "September 2020",
			endDate: "July 2021",
			description:
				"Teaching excellent high school students to participate in International Olympiad in Informatics.",
			highlights: [
				"Prepared students for the International Olympiad in Informatics",
				"Taught advanced algorithms and data structures",
			],
		},
	],
};
