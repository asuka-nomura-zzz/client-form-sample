import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'client form sample',
  description:  'client form sample',
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
      <html lang="ja">
        <body className="max-w-7xl min-h-44 mx-10 my-10 xl:mx-auto p-6 bg-white">
          <h1 className="p-3 text-center font-bold text-2xl">Client Form Sampleの再現</h1>
          {children}
        </body>
      </html>
  );
}
