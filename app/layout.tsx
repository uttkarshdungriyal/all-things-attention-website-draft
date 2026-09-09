import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "All Things Attention | Build Better Attention Systems",
  description: "A practical community for creators, founders, marketers, growth operators, and engineers building systems for content, distribution, automation, and growth.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
