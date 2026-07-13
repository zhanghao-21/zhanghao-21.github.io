import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hao Zhang — Autonomous Driving Systems Research",
  description:
    "Hao Zhang is a Ph.D. researcher at Texas A&M working on autonomous-driving simulation, HD mapping, vehicle control, and transportation safety.",
  keywords: [
    "Hao Zhang",
    "autonomous driving",
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
