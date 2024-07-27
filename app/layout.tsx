import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Request Repeater - Efficient URL Request Testing",
  description: "Request Repeater is a tool for testing and retrying URL requests with detailed response analysis. Perfect for login attempts and API testing.",
  keywords: "Request Repeater, URL testing, API testing, retry requests, response analysis",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Request Repeater - Efficient URL Request Testing",
    description: "Request Repeater is a tool for testing and retrying URL requests with detailed response analysis.",
    url: "https://yourdomain.com",
    type: "website",
    images: [
      {
        url: "https://cdn-icons-png.flaticon.com/512/5220/5220478.png",
        width: 800,
        height: 600,
        alt: "Request Repeater",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Request Repeater is a tool for testing and retrying URL requests with detailed response analysis." />
        <meta name="keywords" content="Request Repeater, URL testing, API testing, retry requests, response analysis" />
        <meta name="author" content="Mahdi Asadolahzade" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Request Repeater - Efficient URL Request Testing" />
        <meta property="og:description" content="Request Repeater is a tool for testing and retrying URL requests with detailed response analysis." />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cdn-icons-png.flaticon.com/512/5220/5220478.png" />
        <title>Request Repeater - Efficient URL Request Testing</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
