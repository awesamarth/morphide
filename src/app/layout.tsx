import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import '@rainbow-me/rainbowkit/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MorphIDE",
  description: "AI powered IDE for deploying contracts to Morph Sepolia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className+" bg-gray-900 "}>
        <Providers >{children}</Providers></body>
    </html>
  );
}