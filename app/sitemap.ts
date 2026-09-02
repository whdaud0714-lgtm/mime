import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/festival";

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = [
		"",
		"/about",
		"/program",
		"/visit",
		"/brand",
		"/bookmark",
		"/app",
		"/app/schedule",
		"/app/map",
	];
	const now = new Date();
	return routes.map((path) => ({
		url: `${SITE_URL}${path}`,
		lastModified: now,
		changeFrequency: "weekly",
		priority: path === "" ? 1 : 0.7,
	}));
}
