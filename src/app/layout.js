import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata for SEO and Social Sharing
export const metadata = {
  title: "Ceenami Haus – A Cozy Vacation Rental",
  description:
    "Relax and recharge at Ceenami Haus – a stylish, cozy and modern vacation rental with peaceful ambiance and aesthetic design.",
  keywords: [
    "Ceenami Haus",
    "vacation rental",
    "cozy stay",
    "modern stay",
    "stylish rental",
    "airbnb alternative",
    "peaceful vacation",
    "verbo",
  ],
  authors: [{ name: "Ceenami Haus Team" }],
  creator: "Ceenami",
  metadataBase: new URL("https://ceenami-haus.vercel.app"), // Update to your deployed domain
  openGraph: {
    title: "Ceenami Haus – A Cozy Vacation Rental",
    description:
      "Stylish and serene vacation rental with a modern design and cozy atmosphere. Ideal for peaceful getaways.",
    url: "https://ceenami-haus.vercel.app",
    siteName: "Ceenami Haus",
    images: [
      {
        url: "/og-preview.jpg", // Optional preview image in /public
        width: 1200,
        height: 630,
        alt: "Ceenami Haus Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
