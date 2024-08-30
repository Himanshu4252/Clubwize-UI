import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import OnBoardLeft from "./Components/Onboarding/OnboardLeft/OnBoardLeft";
import PageNavigation from "./Components/PageNavigation/PageNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clubwize UI",
  description: "Start your Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}


<div className="fixed bottom-0 opacity-70 bg-orange-300 rounded-lg z-[99999]">
<PageNavigation />
</div>
      </body>
    </html>
  );
}
