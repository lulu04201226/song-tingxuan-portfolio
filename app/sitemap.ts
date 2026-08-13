import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{const base="https://song-tingxuan-portfolio.vercel.app";return ["","/projects/ebay-operations","/projects/ab-test","/projects/ai-product","/projects/user-behavior"].map(url=>({url:base+url,lastModified:new Date(),changeFrequency:"monthly",priority:url?0.8:1}))}
