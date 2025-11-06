import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LoginHelper from "@/components/loginhelper";
import { Suspense } from "react";
import UserImage from "@/components/userimage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ForkLore",
  description: "Made with ❤️ and 🧠",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StackProvider app={stackClientApp}>
          <StackTheme>
            <div className="navbar bg-base-100 shadow-sm">
              <div className="flex-1">
                <a className="btn btn-ghost text-xl">ForkLore</a>
              </div>
              <div className="flex gap-2">
                <Link href="/" className="self-center">
                  Home
                </Link>
                <div className="divider divider-horizontal divider-primary h-6 self-center"></div>
                <Link href="/recipe" className="self-center pe-5">
                  Recipe
                </Link>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <Suspense
                        fallback={
                          <span className="loading loading-spinner loading-xl self-center"></span>
                        }
                      >
                        <UserImage />
                      </Suspense>
                    </div>
                  </div>
                  <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow border border-gray-700">
                    <Suspense
                      fallback={
                        <span className="loading loading-spinner loading-xl self-center"></span>
                      }
                    >
                      <LoginHelper />
                    </Suspense>
                  </ul>
                </div>
              </div>
            </div>
            {children}
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
              <aside>
                <p>
                  Copyright © {new Date().getFullYear()} - All right reserved by
                  ForkLore Ltd
                </p>
              </aside>
            </footer>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
