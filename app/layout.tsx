import type { Metadata } from "next";
import "./ui/globals.css";
import { openSans } from "@/app/ui/fonts";
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
      <body className={`${openSans.className} antialiased`}>
        {/*Add Providers back when theme toggle is working*/}
        {/*<Providers>*/}
        <main className={"flex flex-col p-2 min-h-screen gap-4 md:gap-10"}>
          <NavBar />
          {children}
          <Footer />
        </main>
        {/*</Providers>*/}
      </body>
    </html>
  );
}
