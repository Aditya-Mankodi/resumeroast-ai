import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResumeRoast AI",
  description: "Get the honest read on your resume.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}