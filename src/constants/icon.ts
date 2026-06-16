import type { Favicon } from "@/types/config.ts";

export const defaultFavicons: Favicon[] = [
	{
		src: "/favicon/favicon-light-32.svg",
		theme: "light",
		sizes: "32x32",
	},
	{
		src: "/favicon/favicon-light-128.svg",
		theme: "light",
		sizes: "128x128",
	},
	{
		src: "/favicon/favicon-dark-32.svg",
		theme: "dark",
		sizes: "32x32",
	},
	{
		src: "/favicon/favicon-dark-128.svg",
		theme: "dark",
		sizes: "128x128",
	},
];
