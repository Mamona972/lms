
import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "./utils/theme-provider";
import { Toaster } from "react-hot-toast";
import {Providers} from "./Provider"

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
  keywords: [
    "Programming",
    "MERN",
    "Redux",
    "Machine Learning",
  ],
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${josefin.variable} h-full antialiased  `}
    >
      <body className="min-h-full flex flex-col !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300 ">
        <Providers>
          <ThemeProvider attribute='class' defaultTheme="system" enableSystem>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </ThemeProvider>
          </Providers>
      </body>
    </html>
  );
}
