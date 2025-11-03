import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Geist, Syne } from 'next/font/google';
import Head from 'next/head';

const geist = Syne({
  subsets: ['latin'],
});

export const metadata = {
    title: 'Commercn | Shadcn Ecommerce Blocks',
    description: 'Shadcn UI blocks for e-commerce websites. Built with React, Next.js, and Tailwind CSS.',
    keywords: ['Commercn', 'Shadcn UI', 'Shadcn E-commerce'],
    icons: {
        icon: '/favicon.ico',
    },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <Head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="7e98cb80-cce6-440e-8d23-b1a4abd6adfa"></script>
      </Head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

