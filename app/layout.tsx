import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://allthingsattention.com"),
  title: "All Things Attention | Build Better Attention Systems",
  description: "A practical community for creators, founders, marketers, growth operators, and engineers building systems for content, distribution, automation, and growth.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: { title: "All Things Attention", description: "Build an audience. Engineer distribution. Turn attention into growth.", type: "website", url: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"All Things Attention",url:"https://allthingsattention.com",description:"A practical community for people building repeatable systems for content, distribution, automation, and growth."})}}/></body></html>;
}
