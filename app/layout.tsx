import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";
import ThemeProvider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "DesignDeck",
  description: "A DesignDeck built with Liveblocks and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${workSans.className} bg-dark`}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          >
        <Room>{children}</Room>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
