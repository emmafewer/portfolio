import type { Metadata } from "next";
import "./ui/globals.css";
import {inter} from "@/app/ui/fonts";
import NavBar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";

export const metadata: Metadata = {
  title: "Emma Fewer",
  description: "Emma Fewer's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased h-screen`}
      >
      <NavBar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
