import { Metadata } from 'next';
import { Footer } from '~/components/layouts';

export const metadata: Metadata = {
  title: 'Snippets',
  description: 'Snippets of code that I use often',
};

export default function SnippetsLayout({
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
