import "./globals.css";
import { Footer, Navbar } from "~/components/layouts";
import { ScrollToTop } from "~/components/shared";
import { inter } from "~/utils/fonts";

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
      <body className={`relative bg-stone-950 ${inter.className}`}>
        <Navbar />
        <ScrollToTop />
        {/* mt-14 is used to offset the height of navbar */}
        <main className="z-10 mt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
