export interface Project {
	title: string;
	description: string;
	tech: string[];
	image?: string;
	links: {
		github?: string;
		live?: string;
		docs?: string;
	};
}

export const projects: Project[] = [
	{
		title: "Olympiad Graph Theory Book",
		description:
			"Co-authored a 200-page online book in Persian that emphasizes algorithmic methods related to graph theory concepts. The book has assisted thousands of students in preparing for the Iranian National Olympiad in Informatics.",
		tech: ["LaTeX", "Graph Theory"],
		image: "/assets/images/shazzz.png",
		links: {
			live: "https://gtoi.shaazzz.ir/",
		},
	},
	{
		title: "LP-Based Matching Algorithms",
		description:
			"Implemented a novel algorithm based on the paper 'Multiplicative Auction Algorithm for Approximate Maximum Weight Bipartite Matching,' achieving a groundbreaking O(m/\u03B5) complexity with an approximation factor of (1-\u03B5) for maximum weight bipartite matching. Conducted comparative analysis with multiple algorithms as part of the project.",
		tech: ["Python", "Linear Programming", "Optimization"],
		image: "/assets/images/matching.png",
		links: {
			github: "https://github.com/mahdiQaempanah/LP-Based-Matching-Algorithms",
		},
	},
	{
		title: "Graph-Based Image Segmentation",
		description:
			"Developed a graph-based image segmentation algorithm utilizing superpixels to group similar pixels based on spatial and color features. After constructing the graph, a Disjoint Set Union (DSU) data structure iteratively merges vertices until the final segmentation is achieved.",
		tech: ["Python", "Computer Vision", "Graph Algorithms"],
		image: "/assets/images/vision.png",
		links: {
			github: "https://github.com/mahdiQaempanah/Computer-Vision-Project",
		},
	},
];
