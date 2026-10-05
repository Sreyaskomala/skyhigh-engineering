import type { MetadataRoute } from "next";
import { solutions } from "@/lib/solutions";
export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!url) return [];
  return [
    "",
    "/solutions",
    "/engineering",
    "/about",
    "/contact",
    "/privacy",
    ...solutions.map((s) => `/solutions/${s.slug}`),
  ].map((path) => ({ url: `${url}${path}` }));
}
