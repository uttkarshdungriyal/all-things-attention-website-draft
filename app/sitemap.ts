import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://allthingsattention.com";
  return ["", "/community", "/resources", "/about", "/guidelines", "/privacy"].map((path) => ({ url: `${base}${path}`, changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : .7 }));
}
