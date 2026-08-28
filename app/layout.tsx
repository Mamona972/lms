import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Josefin_Sans } from "next/font/google";
import { Providers } from "./Provider";
import Custom from "./Custom";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export const metadata: Metadata = {
  title: "Elearning",
  description:
    "Elearning is a platform for students to learn and get help from teachers",
  keywords: ["Programming", "MERN", "Redux", "Machine Learning"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${josefin.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300">
        <Providers>
          <Custom>
           {children}
          </Custom>
        </Providers>
      </body>
    </html>
  );
}
