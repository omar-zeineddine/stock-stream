"use client";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
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
            <Sidebar />
            <div className="flex flex-col flex-grow ">
              <div
                className="flex-grow overflow-y-auto "
                style={{
                  background: "#f5f5f5",
                }}
              >
                {children}
              </div>
              <Footer className="bottom-0 " />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
