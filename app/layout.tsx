import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "AutoSync AI — Automate Your Workflow. Scale Your Brand.",
  description:
    "AutoSync AI helps creators and fast-growing startups automate social media, generate high-converting content, and manage clients on autopilot.",
  keywords: [
    "AI automation",
    "social media scheduler",
    "content generation",
    "workflow automation",
    "AutoSync AI",
  ],
  openGraph: {
    title: "AutoSync AI — Automate Your Workflow. Scale Your Brand.",
    description:
      "Schedule posts, generate high-converting copy, and manage clients on complete autopilot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
