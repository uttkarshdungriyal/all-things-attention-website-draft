import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Community | All Things Attention",
  description: "See who the All Things Attention Discord community is for, what happens inside, and how to apply.",
};

export default function CommunityPage() { return <Home />; }
