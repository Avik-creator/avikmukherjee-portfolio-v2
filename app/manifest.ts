import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Avik Mukherjee",
		short_name: "avikmukherjee",
		description:
			"Passionate full stack developer from India. On the way to master programming",
		start_url: "/",
		id: "com.avikmukherjee",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/icon.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/icon.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
		],
	};
}