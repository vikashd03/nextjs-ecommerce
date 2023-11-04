import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flowmazon",
  description: "We make your wallet cry",
  metadataBase: "localhost",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="favicon.png"
          type="image/x-icon"
          sizes="48x48"
        ></link>
      </head>
      <body className={inter.className}>
        <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
      </body>
    </html>
  );
}
