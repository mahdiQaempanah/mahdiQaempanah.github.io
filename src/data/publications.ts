export interface Publication {
	title: string;
	venue: string;
	year: number;
	collaborators: string[];
	description: string;
	image?: string;
	links: {
		googleScholar?: string;
		arxiv?: string;
		doi?: string;
		projectPage?: string;
	};
}

export const publications: Publication[] = [
	{
		title:
			"New Parallel and Streaming Algorithms for Directed Densest Subgraph",
		venue: "NeurIPS",
		year: 2025,
		collaborators: [
			"Prof. Slobodan Mitrović",
			"Theodore Pan",
			"Mohammad Amin Raeisi",
		],
		description:
			"Designed distributed and streaming algorithms for the directed densest subgraph problem, achieving improved approximation guarantees, fewer MPC rounds, and the first deterministic single-pass semi-streaming solution with sublinear memory.",
		image: "/assets/images/densest-subgraph.png",
		links: {
			googleScholar:
				"https://scholar.google.com/citations?user=u0jxxvsAAAAJ&hl=en",
		},
	},
	{
		title: "What is the chance of being so unfair?",
		venue: "Companion Proceedings of the ACM on Web Conference",
		year: 2025,
		collaborators: [
			"Prof. Samira Hossein Ghorban",
			"Prof. Hossein Esfandiari",
			"Nima Dolatabadi",
		],
		description:
			"Developed a probabilistic fairness framework for ranking systems, introducing efficient algorithms to quantify ranking fairness and produce unbiased rankings without sacrificing utility.",
		image: "/assets/images/ranking.jpg",
		links: {
			googleScholar:
				"https://scholar.google.com/citations?user=u0jxxvsAAAAJ&hl=en",
		},
	},
];
