import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noventra Technologies — Innovating Today. Transform Tomorrow.",
  description:
    "Noventra Technologies delivers end-to-end IT solutions — IT consultancy, networking, software development, cybersecurity, cloud services, and more.",
  keywords: "IT consultancy, networking, software development, cloud services, cybersecurity, Kenya, Africa",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Noventra Technologies",
    description: "Innovating Today. Transform Tomorrow. Your complete technology partner.",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
