import "./globals.css";

import { Navbar } from "~/components/layouts";
import { Analytics } from "~/components/layouts/analytics";
import { ScrollToTop } from "~/components/shared";
import { generalSans, inter } from "~/utils/fonts";

export const metadata = {
  title: "ram.codes",
  description: "Portfolio of Ram Shankar",
  openGraph: {
    title: "ram.codes",
    description: "Portfolio of Ram Shankar",
    url: "https://ram.codes",
    siteName: "ram.codes",
    images: [
      {
        url: "https://ram.codes/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "ram.codes",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${generalSans.variable} font-sans`}>
      <head>
        <Analytics />
      </head>
      <body className={`relative bg-stone-950 ${inter.className}`}>
        <Navbar />
        <ScrollToTop />
        {/* mt-14 is used to offset the height of navbar */}
        <main className="z-10 mt-14">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
