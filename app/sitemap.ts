import type { MetadataRoute } from "next";
import { posts } from "./blog/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://allthingsattention.com";
  return ["", "/community", "/resources", "/about", "/guidelines", "/privacy", "/blog", ...posts.map((post) => `/blog/${post.slug}`)].map((path) => ({ url: `${base}${path}`, changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path.startsWith("/blog/") ? .8 : .7 }));
}
