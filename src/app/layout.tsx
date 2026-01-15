import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const dm_Sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khan-it-bd.vercel.app"),
  title: {
    default: "Digital Marketing Agency in Bangladesh | Khan IT",
    template: "%s | Khan IT – Best Digital Marketing & SEO Agency Bangladesh",
  },

  description:
    "Khan IT is the leading digital marketing agency in Bangladesh offering expert SEO, Google & Facebook Ads, web design, content marketing & social media management. Get measurable growth & higher ROI with 10+ years experienced team led by Md Faruk Khan.",

  keywords: [
    "digital marketing agency Bangladesh",
    "SEO agency Bangladesh",
    "best SEO company in Bangladesh",
    "digital marketing Bangladesh",
    "Facebook ads agency Bangladesh",
    "Google ads agency Bangladesh",
    "web design Bangladesh",
    "social media marketing Bangladesh",
    "Md Faruk Khan SEO",
    "Khan IT",
  ],

  openGraph: {
    title: "Khan IT – Top Digital Marketing & SEO Agency in Bangladesh",
    description:
      "Grow your business online with proven SEO, PPC, web design & social media strategies. 100+ happy clients, transparent pricing, data-driven results.",
    url: "https://khan-it-bd.vercel.app",
    siteName: "Khan IT",
    images: [
      {
        url: "/assests/images/khanitsocial.png",
        width: 1200,
        height: 630,
        alt: "Khan IT Digital Marketing Agency Bangladesh",
      },
    ],
    locale: "en_BD",
    type: "website",
  },

  alternates: {
    canonical: "https://khan-it-bd.vercel.app",
  },

  authors: [{ name: "Md Faruk Khan", url: "https://khan-it-bd.vercel.app" }],
  creator: "Khan IT",
  publisher: "Khan IT",
  category: "Digital Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_Sans.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
