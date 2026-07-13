import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hao Zhang — AI, Digital Twins & Transportation Safety",
  description:
    "Hao Zhang is a Ph.D. researcher at Texas A&M building digital twins, AI systems, and simulation tools for safer autonomous mobility.",
  keywords: [
    "Hao Zhang",
    "transportation engineering",
    "digital twins",
    "autonomous vehicles",
    "HD mapping",
    "traffic safety",
    "Texas A&M",
  ],
  authors: [{ name: "Hao Zhang" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
