import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import AppProvider from "@/components/misc/app-provider";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pathmorph",
  description: "AI Career coach for job seekers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} ${montserrat.className} antialiased`}>
        <AppProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
