import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Julius N. Mwangi",
  description: `
    Crafting Engaging, High-Impact Web Applications for Over 15 Years.
    Driven by a passion for creating intuitive, visually stunning, and 
    problem-solving digital experiences`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen`}>
        <header className="bg-white">
          <div className="h-20 pt-28 sm:h-1/6 header-bg">&nbsp;</div>
          <nav className="-mt-12 sm:-mt-24 p-3 flex flex-col md:flex-row mx-auto max-w-screen-lg justify-center md:justify-between">
            <h3>
              <a href="" className="flex flex-col md:flex-row gap-3 items-center">
                <img src="/images/IMG_20230824_1246311-sm.jpg"
                  className="w-20 sm:w-40 ring-2 ring-white rounded-full" />
                <span className="pt-0.2 md:pt-20 text-nowrap">
                  <i className="text-2xl sm:text-3xl/7 text-4md">&lt;</i>
                  <i className="text-4xl sm:text-6xl/7 font-bold brand mx-2">nj-mwas</i>
                  <i className="text-2xl sm:text-3xl/7 text-nowrap"> developer = fullstack /&gt;</i>
                </span>
              </a>
            </h3>
            <div className="self-center md:pt-20 md:ms-auto flex gap-3">
              <Link className={buttonVariants({ variant: "ghost", size: "icon" })}
                href="https://stackoverflow.com/users/2529302/njmwas" target="_blank">
                <img src="/images/stack-overflow.png" alt="" className="rounded-full w-6 sm:w-8" />
              </Link>

              <Link className={buttonVariants({ variant: "ghost", size: "icon" })}
                href="https://www.linkedin.com/in/julius-n-mwangi-7bb50617/" target="_blank">
                <img src="/images/linkedin.png" alt="" className="rounded-full w-6 sm:w-8" />
              </Link>

              <Link href="mailto://njmwas@gmail.com" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5} stroke="currentColor" className="size-6 sm:size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>
              </Link>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html >
  );
}
