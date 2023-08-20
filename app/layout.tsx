"use client";
import Footer from "./components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-grow">
            <div className="flex flex-col flex-grow ">
              <div
                className="flex-grow "
                style={{
                  background: "#f5f5f5",
                }}
              >
                {children}
              </div>
              <Footer className="absolute bottom-0 left-0 w-full" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
