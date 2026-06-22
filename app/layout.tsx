import type { Metadata } from "next";
import "./globals.css";

import {
  Cormorant_Garamond,
  Great_Vibes,
  Inter,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sagar-priyanka-wedding-six.vercel.app"),

  title: "Sagar ❤️ Priyanka | Wedding Invitation",

  description:
    "Together with our families, we warmly invite you to celebrate our wedding on 26 June 2026.",

  applicationName: "Sagar & Priyanka Wedding",

  keywords: [
    "Wedding",
    "Wedding Invitation",
    "Sagar",
    "Priyanka",
    "Indian Wedding",
    "Cuttack Wedding",
    "Wedding Website",
  ],

  authors: [
    {
      name: "Sagar Biswal",
    },
  ],

  creator: "Sagar Biswal",

  openGraph: {
    title: "Sagar ❤️ Priyanka | Wedding Invitation",

    description:
      "Together with our families, we warmly invite you to celebrate our wedding on 26 June 2026.",

    url: "https://sagar-priyanka-wedding-six.vercel.app",

    siteName: "Sagar & Priyanka Wedding",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sagar & Priyanka Wedding Invitation",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Sagar ❤️ Priyanka | Wedding Invitation",

    description:
      "Together with our families, we warmly invite you to celebrate our wedding on 26 June 2026.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${inter.variable}
         ${cormorant.variable}
         ${greatVibes.variable}
         bg-[#12050B]
         text-white
         antialiased
       `}
      >
        {children}
      </body>
    </html>
  );
}