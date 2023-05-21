import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "~/components/layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ram.codes",
  description: "Portfolio of Ram Shankar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-stone-950 ${inter.className}`}>
        <Navbar />
        <main className="z-10 mt-14 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
