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
		title: "What is the chance of being so unfair?",
		venue: "Companion Proceedings of the ACM on Web Conference (WWW) 2025",
		year: 2025,
		collaborators: [
			"Prof. Samira Hossein Ghorban (IPM, Tehran)",
			"Prof. Hossein Esfandiari (Google, New York)",
			"Nima Dolatabadi",
		],
		description:
			"We define a novel fairness measure for ranking individuals who belong to groups that may be affected by discrimination. We develop an optimal algorithm to identify this measure and provide extensive experimental validation of its effectiveness.",
		links: {
			googleScholar:
				"https://scholar.google.com/citations?user=u0jxxvsAAAAJ&hl=en",
		},
	},
	{
		title:
			"New Parallel and Streaming Algorithms for Directed Densest Subgraph (Equal Contribution)",
		venue: "NeurIPS 2025 (Poster)",
		year: 2025,
		collaborators: [
			"Prof. Slobodan Mitrović (UC Davis, USA)",
			"Theodore Pan (UC Davis, USA)",
			"Mohammad Amin Raeisi (Yale, USA)",
		],
		description:
			"We develop deterministic algorithms for the densest subgraph problem in directed graphs: a single-pass semi-streaming algorithm achieving O(\u221Alog n)-approximation with sublinear memory and O(log\u00B2 n) worst-case update time for dynamic streams, and a Massively Parallel Computation (MPC) algorithm achieving (2+\u03B5)-approximation in O(\u221Alog n) rounds per machine. The algorithms are validated on temporal datasets.",
		links: {
			googleScholar:
				"https://scholar.google.com/citations?user=u0jxxvsAAAAJ&hl=en",
		},
	},
];
