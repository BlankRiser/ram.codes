import { Metadata } from "next";
import { Footer } from "~/components/layouts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
