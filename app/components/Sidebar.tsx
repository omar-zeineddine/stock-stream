"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { routes } from "@/app/utils/constants";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <aside className="flex flex-col w-64 px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 flex-shrink-0">
        <div className="flex justify-between items-center">
          <Link href="/" legacyBehavior>
            <a href="#">
              <Image
                className="w-auto h-16 sm:h-12"
                src="/stocks.png"
                alt="logo"
                width={64}
                height={64}
              />
            </a>
          </Link>
          <h2 className="font-semibold">Stock-Stream</h2>
        </div>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            {routes.map((route) => (
              <Link href={route.href} key={route.href} legacyBehavior>
                <a
                  className={`flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${
                    isActive(route.path) ? "dark:bg-gray-800 bg-gray-100" : ""
                  }`}
                >
                  {route.icon}
                  <span className="mx-4 font-medium">{route.label}</span>
                </a>
              </Link>
            ))}
            <hr className="my-6 border-gray-200 dark:border-gray-600" />
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
